type Webhook = {
  primary: string;
  debug: string;
};

const CrawlerWebhook = ({ webhook }: { webhook: Webhook }) => {
  return (
    <form>
      <ul className="flex flex-col space-y-2">
        <li className="flex flex-row items-center space-x-2">
          <label className="w-24 font-bold">Notification</label>
          <input
            className="flex flex-nowrap rounded-md border px-1"
            type="text"
            defaultValue={webhook.primary}
          />
        </li>
        <li className="flex flex-row items-center space-x-2">
          <label className="w-24 font-bold">Debug</label>
          <input
            className="flex flex-nowrap rounded-md border px-1"
            type="text"
            defaultValue={webhook.debug}
          />
        </li>
      </ul>
    </form>
  );
};

export default CrawlerWebhook;
