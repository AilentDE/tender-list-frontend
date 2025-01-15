import { updateWebhooks } from "@/actions/taskSetting";
import HoverButton from "@/components/ui/HoverButton";

type Webhook = {
  primary: string;
  debug: string;
};

const CrawlerWebhook = ({ webhook }: { webhook: Webhook }) => {
  return (
    <form action={updateWebhooks} className="flex flex-col space-y-4">
      <ul className="flex flex-col space-y-2">
        <li className="flex flex-row items-center space-x-2">
          <label className="w-24 font-bold">Notification</label>
          <input
            className="flex flex-nowrap rounded-md border px-1"
            type="text"
            defaultValue={webhook.primary}
            name="primary"
          />
        </li>
        <li className="flex flex-row items-center space-x-2">
          <label className="w-24 font-bold">Debug</label>
          <input
            className="flex flex-nowrap rounded-md border bg-gray-300/50 px-1 dark:bg-gray-600/80"
            type="text"
            defaultValue={webhook.debug}
            name="debug"
            disabled
          />
          <input type="hidden" name="debug" value={webhook.debug} />
        </li>
      </ul>
      <div className="flex justify-end gap-2">
        <HoverButton>
          <span>Update</span>
        </HoverButton>
      </div>
    </form>
  );
};

export default CrawlerWebhook;
