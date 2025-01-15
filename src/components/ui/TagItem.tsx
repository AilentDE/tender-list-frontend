import { X } from "lucide-react";

type TagItemProp = {
  title: string;
  onDelete: () => void;
};

const TagItem = ({ title, onDelete }: TagItemProp) => {
  return (
    <div className="text-md flex items-center rounded-md border border-gray-400 bg-gray-200/50 px-1 py-0.5 dark:border-gray-600 dark:bg-gray-800 md:text-xs">
      {title}
      <X className="size-4 cursor-pointer" onClick={onDelete} />
    </div>
  );
};

export default TagItem;
