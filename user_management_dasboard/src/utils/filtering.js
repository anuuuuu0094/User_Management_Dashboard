export const filterUsers = (users, filters) => {
  return users.filter((user) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value?.trim()) return true;

      return String(user[key] || "")
        .toLowerCase()
        .includes(value.toLowerCase());
    });
  });
};
