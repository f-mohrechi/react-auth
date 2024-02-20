import api from "./api";

export const register = async (data) => {
  return await api.post("users", data);
};
