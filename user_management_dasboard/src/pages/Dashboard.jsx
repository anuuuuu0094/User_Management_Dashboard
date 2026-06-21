import { useMemo, useState } from "react";

import { Filter, Plus } from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";

import SearchBar from "../components/SearchBar/SearchBar";
import FilterModal from "../components/FilterModal/FilterModal";
import UserForm from "../components/UserForm/UserForm";
import UserTable from "../components/UserTable/UserTable";
import Pagination from "../components/Pagination/Pagination";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal/ConfirmDeleteModal";

import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import ErrorMessage from "../components/common/ErrorMessage";
import Button from "../components/common/Button";

import useUsers from "../hooks/useUsers";
import usePagination from "../hooks/usePagination";

function Dashboard() {
  const {
    users,

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

    reloadUsers,
  } = useUsers();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [isUserFormOpen, setIsUserFormOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const [deleteUserId, setDeleteUserId] = useState(null);

  const paginated = usePagination(users);

  const activeFiltersCount = useMemo(() => {
    return Object.values(filters).filter(Boolean).length;
  }, [filters]);

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsUserFormOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsUserFormOpen(true);
  };

  const handleUserSubmit = async (formData) => {
    if (selectedUser) {
      await editUser(selectedUser.id, formData);
    } else {
      await addUser(formData);
    }

    setSelectedUser(null);
  };

  const handleDeleteConfirm = async () => {
    await removeUser(deleteUserId);

    setDeleteUserId(null);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="card p-4 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="secondary"
                className="relative"
                onClick={() => setIsFilterOpen(true)}
              >
                <div className="flex items-center gap-2">
                  <Filter size={18} />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-xs text-white">
                      {activeFiltersCount}
                    </span>
                  )}
                </div>
              </Button>

              <Button onClick={handleAddUser}>
                <div className="flex items-center gap-2">
                  <Plus size={18} />
                  Add User
                </div>
              </Button>
            </div>
          </div>
        </div>

        {loading && <Loader />}

        {!loading && error && (
          <ErrorMessage message={error} onRetry={reloadUsers} />
        )}

        {!loading && !error && users.length > 0 && (
          <>
            <UserTable
              users={paginated.paginatedData}
              sortConfig={sortConfig}
              onSort={updateSort}
              onEdit={handleEditUser}
              onDelete={(id) => setDeleteUserId(id)}
            />

            <div className="card p-4">
              <Pagination
                currentPage={paginated.currentPage}
                totalPages={paginated.totalPages}
                pageSize={paginated.pageSize}
                setPageSize={paginated.setPageSize}
                onPageChange={paginated.setCurrentPage}
              />
            </div>
          </>
        )}

        {!loading && !error && users.length === 0 && <EmptyState />}
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApply={setFilters}
        onReset={() => {
          resetFilters();
          setIsFilterOpen(false);
        }}
      />

      <UserForm
        isOpen={isUserFormOpen}
        onClose={() => {
          setIsUserFormOpen(false);
          setSelectedUser(null);
        }}
        initialData={selectedUser}
        onSubmit={handleUserSubmit}
      />

      <ConfirmDeleteModal
        isOpen={Boolean(deleteUserId)}
        onClose={() => setDeleteUserId(null)}
        onConfirm={handleDeleteConfirm}
      />
    </DashboardLayout>
  );
}

export default Dashboard;
