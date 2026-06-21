export const sortUsers = (users, sortBy, direction) => {
  if (!sortBy) return users;

  return [...users].sort((a, b) => {
    const first = String(a[sortBy] || "").toLowerCase();

    const second = String(b[sortBy] || "").toLowerCase();

    const comparison = first.localeCompare(second);

    return direction === "asc" ? comparison : -comparison;
  });
};
