export const paginate = (data, currentPage, pageSize) => {
  const start = (currentPage - 1) * pageSize;

  return data.slice(start, start + pageSize);
};
