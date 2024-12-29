import ThemeSwitcher from "@/components/themeSwicher";

const RootHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
      <h1 className="text-2xl font-bold">DistantNova</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default RootHeader;
