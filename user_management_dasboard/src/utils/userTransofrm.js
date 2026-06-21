const departments = ["IT", "HR", "Finance", "Sales", "Marketing"];

export const transformUser = (user, index) => {
  const [firstName, ...rest] = user.name.split(" ");

  return {
    id: user.id,
    firstName,
    lastName: rest.join(" "),
    email: user.email,
    department: departments[index % departments.length],
  };
};
