import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Modal from "../common/Modal";
import Button from "../common/Button";
import Input from "../common/Input";

import { DEPARTMENTS } from "../../constants/departments";

function UserForm({ isOpen, onClose, initialData, onSubmit }) {
  const isEditMode = Boolean(initialData);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    },
  });

  useEffect(() => {
    reset(
      initialData || {
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      },
    );
  }, [initialData, reset]);

  const submitHandler = (data) => {
    onSubmit(data);

    reset();

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? "Edit User" : "Add User"}
    >
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        <Input
          label="First Name"
          error={errors.firstName?.message}
          {...register("firstName", {
            required: "First name is required",
          })}
        />

        <Input
          label="Last Name"
          error={errors.lastName?.message}
          {...register("lastName", {
            required: "Last name is required",
          })}
        />

        <Input
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",

            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

              message: "Invalid email address",
            },
          })}
        />

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">
            Department
          </label>

          <select
            className="input"
            {...register("department", {
              required: "Department is required",
            })}
          >
            <option value="">Select Department</option>

            {DEPARTMENTS.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>

          {errors.department && (
            <p className="text-sm text-red-500">{errors.department.message}</p>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit">
            {isEditMode ? "Update User" : "Add User"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default UserForm;
