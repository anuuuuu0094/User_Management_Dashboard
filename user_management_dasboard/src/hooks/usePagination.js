import { useEffect, useMemo, useState } from "react";

function usePagination(data = [], initialPageSize = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const [pageSize, setPageSize] = useState(initialPageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, data.length]);

  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;

    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  return {
    currentPage,
    pageSize,
    totalPages,
    paginatedData,

    setCurrentPage,
    setPageSize,
  };
}

export default usePagination;
