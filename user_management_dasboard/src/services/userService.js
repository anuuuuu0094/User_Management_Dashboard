import api from "../api/axios";

export const fetchUsers = async () => {
  const response = await api.get("/users");

  return response.data;
};

export const createUser = async (payload) => {
  const response = await api.post("/users", payload);

  return response.data;
};

export const updateUser = async (id, payload) => {
  const response = await api.put(`/users/${id}`, payload);

  return response.data;
};

export const deleteUser = async (id) => {
  await api.delete(`/users/${id}`);

  return id;
};