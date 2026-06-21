import { ArrowDown, ArrowUp, Pencil, Trash2 } from "lucide-react";

function UserTable({ users, sortConfig, onSort, onEdit, onDelete }) {
  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return null;
    }

    return sortConfig.direction === "asc" ? (
      <ArrowUp size={16} />
    ) : (
      <ArrowDown size={16} />
    );
  };

  return (
    <>
      <div className="hidden overflow-hidden rounded-xl bg-white shadow-card md:block">
        <table className="min-w-full">
          <thead className="border-b border-slate-200 bg-sky-50">
            <tr>
              <th className="table-header">ID</th>

              {[
                {
                  key: "firstName",
                  label: "First Name",
                },
                {
                  key: "lastName",
                  label: "Last Name",
                },
                {
                  key: "email",
                  label: "Email",
                },
                {
                  key: "department",
                  label: "Department",
                },
              ].map((column) => (
                <th
                  key={column.key}
                  className="table-header cursor-pointer"
                  onClick={() => onSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.label}

                    {renderSortIcon(column.key)}
                  </div>
                </th>
              ))}

              <th className="table-header">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-100 hover:bg-sky-50"
              >
                <td className="table-cell">{user.id}</td>

                <td className="table-cell">{user.firstName}</td>

                <td className="table-cell">{user.lastName}</td>

                <td className="table-cell">{user.email}</td>

                <td className="table-cell">{user.department}</td>

                <td className="table-cell">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(user)}
                      className="rounded-lg p-2 text-sky-600 hover:bg-sky-100"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(user.id)}
                      className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {users.map((user) => (
          <div key={user.id} className="card p-4">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Name:</span> {user.firstName}{" "}
                {user.lastName}
              </p>

              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>

              <p>
                <span className="font-semibold">Department:</span>{" "}
                {user.department}
              </p>
            </div>

            <div className="mt-4 flex gap-3">
              <button onClick={() => onEdit(user)} className="btn-primary">
                Edit
              </button>

              <button
                onClick={() => onDelete(user.id)}
                className="rounded-lg bg-red-500 px-4 py-2 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserTable;
