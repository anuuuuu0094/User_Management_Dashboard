import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

import {
  createUser,
  deleteUser,
  fetchUsers,
  updateUser,
} from "../services/userService";

import { transformUser } from "../utils/transformUser";
import { sortUsers } from "../utils/sorting";
import { filterUsers } from "../utils/filtering";

import useDebounce from "./useDebounce";

function useUsers() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm);

  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const [sortConfig, setSortConfig] = useState({
    key: "firstName",
    direction: "asc",
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchUsers();

      const transformedUsers = data.map((user, index) =>
        transformUser(user, index),
      );

      setUsers(transformedUsers);
    } catch (err) {
      setError(err.message || "Failed to fetch users");

      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (payload) => {
    try {
      const response = await createUser(payload);

      const newUser = {
        ...payload,
        id: response.id || Date.now(),
      };

      setUsers((prev) => [newUser, ...prev]);

      toast.success("User added successfully");
    } catch (err) {
      toast.error(err.message || "Failed to add user");
    }
  };

  const editUser = async (id, payload) => {
    try {
      await updateUser(id, payload);

      setUsers((prev) =>
        prev.map((user) =>
          user.id === id
            ? {
                ...user,
                ...payload,
              }
            : user,
        ),
      );

      toast.success("User updated successfully");
    } catch (err) {
      toast.error(err.message || "Failed to update user");
    }
  };

  const removeUser = async (id) => {
    try {
      await deleteUser(id);

      setUsers((prev) => prev.filter((user) => user.id !== id));

      toast.success("User deleted successfully");
    } catch (err) {
      toast.error(err.message || "Failed to delete user");
    }
  };

  const searchedUsers = useMemo(() => {
    if (!debouncedSearch.trim()) {
      return users;
    }

    const query = debouncedSearch.toLowerCase();

    return users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });
  }, [users, debouncedSearch]);

  const filteredUsers = useMemo(() => {
    return filterUsers(searchedUsers, filters);
  }, [searchedUsers, filters]);

  const sortedUsers = useMemo(() => {
    return sortUsers(filteredUsers, sortConfig.key, sortConfig.direction);
  }, [filteredUsers, sortConfig]);

  const updateSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const resetFilters = () => {
    setFilters({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
  };

  return {
    users: sortedUsers,

    loading,
    error,

    searchTerm,
    setSearchTerm,

    filters,
    setFilters,
    resetFilters,

    sortConfig,
    updateSort,

    addUser,
    editUser,
    removeUser,

    reloadUsers: loadUsers,
  };
}

export default useUsers;
