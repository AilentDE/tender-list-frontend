import { Trash2 } from "lucide-react";

type DateItemProp = {
  date: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
};

const DateItem = ({ date, onChange, onDelete }: DateItemProp) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="date"
        className="rounded-md border border-gray-400 px-1 dark:border-gray-600 sm:w-2/5"
        value={date}
        onChange={onChange}
      />
      <Trash2 className="size-5 cursor-pointer" onClick={onDelete} />
    </div>
  );
};

export default DateItem;
