type TitleScopeProps = {
  title: string;
  children: React.ReactNode;
};

const TitleScope = ({ title, children }: TitleScopeProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-xl rounded-md bg-gray-200 text-center font-semibold dark:bg-gray-800">
        {title}
      </label>
      {children}
    </div>
  );
};

export default TitleScope;
