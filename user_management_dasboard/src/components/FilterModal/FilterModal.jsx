import { useEffect, useState } from "react";

import Modal from "../common/Modal";
import Button from "../common/Button";
import Input from "../common/Input";

import { DEPARTMENTS } from "../../constants/departments";

function FilterModal({ isOpen, onClose, filters, onApply, onReset }) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (key, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Modal title="Filters" isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <Input
          label="First Name"
          value={localFilters.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />

        <Input
          label="Last Name"
          value={localFilters.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />

        <Input
          label="Email"
          value={localFilters.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">
            Department
          </label>

          <select
            value={localFilters.department}
            onChange={(e) => handleChange("department", e.target.value)}
            className="input"
          >
            <option value="">All Departments</option>

            {DEPARTMENTS.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="secondary" onClick={onReset}>
            Reset
          </Button>

          <Button
            onClick={() => {
              onApply(localFilters);
              onClose();
            }}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default FilterModal;
