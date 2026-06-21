export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email) => emailRegex.test(email);

export const validateUser = (user) => {
  const errors = {};

  if (!user.firstName?.trim()) {
    errors.firstName = "First name is required";
  }

  if (!user.lastName?.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!user.email?.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(user.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!user.department?.trim()) {
    errors.department = "Department is required";
  }

  return errors;
};
