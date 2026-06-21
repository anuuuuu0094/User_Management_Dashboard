import { DEPARTMENTS } from "../constants/department";

export const transformUser = (
  user,
  index = 0
) => {
  const [firstName = "", ...lastNameParts] =
    user.name.split(" ");

  return {
    id: user.id,
    firstName,
    lastName: lastNameParts.join(" "),
    email: user.email,
    department:
      user.department ||
      DEPARTMENTS[index % DEPARTMENTS.length]
  };
};