import axios from "axios";

export const saveRequest = async (username) => {
  const res = await axios.post(
    "https://glass-bridge-api.onrender.com/api/users/add-user",
    { username: username }
  );
  return res;
};

export const updateUser = async (count, id) => {
  try {
    const res = await axios.put(
      `https://glass-bridge-api.onrender.com/api/users/update-user/${id}`,
      { ended: count }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async () => {
  const res = await axios.get(
    "https://glass-bridge-api.onrender.com/api/users/all"
  );
  return res;
};

export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
