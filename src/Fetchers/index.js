import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const serverDomain =
  process.env.REACT_APP_SERVER_DOMAIN || "http://localhost:3001";
console.log(`Using Server: ${serverDomain}`);

export const fetchNewRoom = async () => {
  try {
    const res = await axios.post(`${serverDomain}/rooms`);
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
    const res = await axios.get(`${serverDomain}/rooms/${id}`);

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
    const res = await axios.post(`${serverDomain}/token`, payload);

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
    const res = await axios.post(`${serverDomain}/join/${roomcode}`, {
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
  const res = await axios.post(`${serverDomain}/user`, { token });
  if (res.data.ok) return res.data;
  else return false;
};
