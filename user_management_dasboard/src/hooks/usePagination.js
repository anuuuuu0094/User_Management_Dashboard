import { useMemo, useState } from "react";

function usePagination(data = [], initialPageSize = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;

    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    pageSize,
    totalPages,
    paginatedData,

    setCurrentPage,
    setPageSize,
    goToPage,
  };
}

export default usePagination;
