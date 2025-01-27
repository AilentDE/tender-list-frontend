import { X } from "lucide-react";

type TagItemProp = {
  title: string;
  tagType: "keyword" | "organization";
  onDelete: () => void;
};

const TagItem = ({ title, tagType, onDelete }: TagItemProp) => {
  return (
    <div className="text-md flex items-center rounded-md border border-gray-400 bg-gray-200/50 px-1 py-0.5 dark:border-gray-600 dark:bg-gray-800 md:text-xs">
      {title}
      <X className="size-4 cursor-pointer" onClick={onDelete} />
      <input type="hidden" name={tagType} value={title} />
    </div>
  );
};

export default TagItem;
