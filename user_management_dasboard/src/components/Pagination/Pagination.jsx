import { PAGINATION_OPTIONS } from "../../constants/paginationOptions";

function Pagination({
  currentPage,
  totalPages,
  pageSize,
  setPageSize,
  onPageChange,
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-600">Rows per page</span>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="input w-24"
        >
          {PAGINATION_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="btn-secondary"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>

        <span className="text-sm font-medium">
          {currentPage} / {totalPages || 1}
        </span>

        <button
          className="btn-primary"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
