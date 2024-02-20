import api from "./api";

export const register = async (data) => {
  return await api.post("users", data);
};

export const login = async (data) => {
  const users = await api.get("users");
  const user = users.data.find(
    (user) => user.username === data.username && user.password === data.password
  );

  if (user) {
    return { status: 200, message: "Login successful", user };
  } else {
    return { status: 401, message: "Invalid username or password" };
  }
};
