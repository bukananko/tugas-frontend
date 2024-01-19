const Button = ({
  children,
  className,
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-gray-100 text-black"
      } rounded-full px-4 py-2 drop-shadow-xl hover:scale-105 duration-200 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
