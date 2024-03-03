let themeClasses;

export default function Container({
  className = "",
  mobileFull = false,
  children,
  ...rest
}) {
  return (
    <div
      className={`container ${!mobileFull ? "px-4" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
