import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full md:max-w-md">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={value}
        placeholder="Search by name or email..."
        onChange={(e) => onChange(e.target.value)}
        className="input pl-10"
      />
    </div>
  );
}

export default SearchBar;
