type SectionCardProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

const SectionCard = ({ children, title, description }: SectionCardProps) => {
  return (
    <div className="flex min-w-80 flex-col space-y-2 rounded-lg border border-gray-800 bg-white/50 p-4 dark:border-gray-200 dark:bg-gray-950/50">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      {children}
    </div>
  );
};

export default SectionCard;
