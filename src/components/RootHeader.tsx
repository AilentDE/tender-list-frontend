import ThemeSwitcher from "@/components/themeSwicher";

const RootHeader = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between border-b border-gray-800/80 bg-gray-50/90 px-4 py-2 dark:border-gray-200/80 dark:bg-gray-900/90 md:px-8 md:py-4">
      <h1 className="text-2xl font-bold">DistantNova</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default RootHeader;
