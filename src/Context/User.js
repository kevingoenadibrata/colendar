import axios from "axios";
import { get, set } from "js-cookie";
import React, { useEffect, useState, useContext } from "react";
import { useCallback } from "react";
import { io } from "socket.io-client";
import { colorMapper } from "../Components/colors";
import { getNewToken, getUserInfo, joinRoom } from "../Fetchers";

const UserContext = React.createContext();
const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [guests, setGuests] = useState([]);
  const [calendar, setCalendar] = useState({});
  const [pending, setPending] = useState(false);

  const setCalendarIcon = (date, icon) => {
    const tempCalendar = { ...calendar };
    if (!tempCalendar[date]) {
      tempCalendar[date] = [0, 0, 0, 0, 0, 0];
    }
    tempCalendar[date][user.index] = icon;
    setCalendar(tempCalendar);
    socket.emit("setIcon", date, icon, user.index);
  };

  const moveMouse = (x, y) => {
    if (!pending) socket.emit("moveMouse", user.id, x, y);
  };

  const getDateData = (date) => {
    const tempCalendar = { ...calendar };
    if (!tempCalendar[date]) {
      tempCalendar[date] = [0, 0, 0, 0, 0, 0];
      setCalendar(tempCalendar);
      return [0, 0, 0, 0, 0, 0];
    }

    return calendar[date];
  };

  const connectSocket = (roomcode) => {
    const newSocket = io(`localhost:3001`);

    setSocket(newSocket);

    newSocket.emit("join", roomcode);

    newSocket.on("getGuests", (guests) => {
      let mapGuests = {};
      for (let i = 0; i < guests.length; i++) {
        mapGuests[guests[i].id] = {
          initials: guests[i].name,
          color: colorMapper[i],
          id: guests[i].id,
        };
      }
      setGuests(mapGuests);
      setPending(false);
    });

    newSocket.on("updateCalendar", (calendar) => {
      setCalendar(calendar);
    });

    return () => newSocket.close();
  };

  const refreshToken = async (initials) => {
    const res = await getNewToken(token, initials);
    setToken(res);
    set("token", JSON.stringify({ token: res }));
    return res;
  };

  const requestJoinRoom = async (roomcode) => {
    const res = await joinRoom(token, roomcode);
    if (res) {
      connectSocket(roomcode);
      setUser({ ...res.user });
      return true;
    } else {
      return false;
    }
  };

  const loadCookie = useCallback(async () => {
    setPending(true);
    try {
      const cookieData = JSON.parse(get("token"));
      if (!cookieData || !cookieData?.token) {
        setToken(null);
      } else {
        setToken(cookieData.token);
        const res = await getUserInfo(cookieData.token);
        setUser(res);
      }
    } catch {
      setToken(null);
    }
    setPending(false);
  }, []);

  useEffect(() => {
    loadCookie();
  }, [loadCookie]);

  if (pending)
    return (
      <div>
        <p>loading</p>
      </div>
    );

  return (
    <UserContext.Provider
      value={{
        user,
        guests,
        socket,
        calendar,
        getDateData,
        setCalendarIcon,
        moveMouse,
        pending,
        refreshToken,
        connectSocket,
        token,
        requestJoinRoom,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
