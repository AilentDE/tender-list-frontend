"use client";

type HoverButtonProp = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const HoverButton = ({
  children,
  className,
  onClick,
  type,
}: HoverButtonProp) => {
  return (
    <button
      className={`rounded-md border border-gray-400 px-2 py-1 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600/50 ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default HoverButton;
