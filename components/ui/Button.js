const baseStyle = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "4px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "0.2s all ease-in-out",
};

const variants = {
  primary: {
    backgroundColor: "#0070f3",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#eaeaea",
    color: "#333",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#0070f3",
    border: "1px solid black",
  },
};

const sizes = {
  sm: { fontSize: "0.75rem", padding: "0.25rem 0.5rem" },
  md: { fontSize: "1rem" },
  lg: { fontSize: "1.25rem", padding: "0.75rem 1.5rem" },
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  style = {},
  ...props
}) {
  const Component = as;

  const combinedStyle = {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size],
    ...style,
  };

  return (
    <Component style={combinedStyle} {...props}>
      {children}
    </Component>
  );
}
