const HoverButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="rounded-md border border-gray-400 px-2 py-1 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600/50">
      {children}
    </button>
  );
};

export default HoverButton;
