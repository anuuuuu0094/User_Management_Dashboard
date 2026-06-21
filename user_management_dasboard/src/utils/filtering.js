export const filterUsers = (users, filters) => {
  return users.filter((user) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;

      return user[key]?.toLowerCase().includes(value.toLowerCase());
    });
  });
};
