import axios from "axios";

export const fetchNewRoom = async () => {
  try {
    const res = await axios.post("http://localhost:3001/rooms");
    if (res.data.ok) {
      return res.data.roomcode;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getRoomInfo = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3001/rooms/${id}`);

    if (res.data.ok) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getNewToken = async (token, initials) => {
  let payload = {};
  if (token) payload.token = token;
  if (initials) payload.initials = initials;

  try {
    const res = await axios.post(`http://localhost:3001/token`, payload);

    console.log(res);

    if (res.data.ok) {
      return res.data.token;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const joinRoom = async (token, roomcode) => {
  try {
    const res = await axios.post(`http://localhost:3001/join/${roomcode}`, {
      token,
    });

    if (res.data.ok) {
      return res.data;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getUserInfo = async (token) => {
  const res = await axios.post(`http://localhost:3001/user`, { token });
  if (res.data.ok) return res.data;
  else return false;
};
