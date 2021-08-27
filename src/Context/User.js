import React, { useEffect, useState, useContext } from "react";
import { io } from "socket.io-client";
import { colorMapper } from "../Components/colors";

const UserContext = React.createContext();
const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [guests, setGuests] = useState([]);
  const [calendar, setCalendar] = useState({});
  const [pending, setPending] = useState(true);

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
    if (!pending) socket.emit("moveMouse", user.index, x, y);
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

  const getGuest = (i) => {
    console.log(guests);
    console.log(guests[i]);
    return { ...guests[i] };
  };

  const updateMouseState = (index, x, y) => {
    setGuests((prev) => {
      let temp = [...prev];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].index === index) {
          temp[i].mouse.x = x;
          temp[i].mouse.y = y;
        }
      }
      return temp;
    });
  };

  useEffect(() => {
    const newSocket = io(`https://colendar.herokuapp.com`);

    setSocket(newSocket);

    newSocket.emit("hello");

    newSocket.on("getGuests", (guests) => {
      setGuests(
        guests.map((item) => ({
          ...item,
          color: colorMapper[item.index],
          mouse: { x: 0, y: 0 },
        }))
      );

      let user = null;
      guests.forEach((item) => {
        if (item.id === newSocket.id) {
          user = {
            ...item,
            color: colorMapper[item.index],
            mouse: { x: 0, y: 0 },
          };
        }
      });
      setUser(user);
      setPending(false);
    });

    newSocket.on("updateCalendar", (calendar) => {
      setCalendar(calendar);
    });

    newSocket.on("updateMouse", (index, x, y) => {
      window.requestAnimationFrame(() => {
        updateMouseState(index, x, y);
      });
    });

    return () => newSocket.close();
  }, []);

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
        getGuest,
        pending,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
