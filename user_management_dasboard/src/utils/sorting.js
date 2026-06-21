export const sortUsers = (users, key, direction) => {
  return [...users].sort((a, b) => {
    const first = a[key]?.toLowerCase();
    const second = b[key]?.toLowerCase();

    return direction === "asc"
      ? first.localeCompare(second)
      : second.localeCompare(first);
  });
};
