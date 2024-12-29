const UrlButton = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) => {
  return (
    <a
      className="flex items-center gap-2 border-gray-800 hover:text-gray-500 hover:underline hover:underline-offset-4"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default UrlButton;
