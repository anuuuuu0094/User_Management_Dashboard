function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger:
      "rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:opacity-50",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
