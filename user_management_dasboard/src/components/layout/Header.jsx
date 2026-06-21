import { Users } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4">
        <div className="rounded-lg bg-sky-500 p-2 text-white">
          <Users size={22} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-800">
            User Management Dashboard
          </h1>

          <p className="text-sm text-slate-500">Manage users efficiently</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
