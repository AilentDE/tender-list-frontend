import { getCrawlerStatus, startCrawler, stopCrawler } from "@/actions/crawler";
import HoverButton from "@/components/ui/HoverButton";

const CrawlerStatus = async () => {
  const status = await getCrawlerStatus();

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${status ? "bg-green-400" : "bg-red-400"}`}
          ></span>
          <span
            className={`relative inline-flex h-3 w-3 rounded-full ${status ? "bg-green-500" : "bg-red-500"}`}
          ></span>
        </span>
        <div>{status ? "Running" : "Stopped"}</div>
      </div>
      <div className="flex justify-end gap-2">
        <form action={startCrawler}>
          <HoverButton>
            <span>Start</span>
          </HoverButton>
        </form>
        <form action={stopCrawler}>
          <HoverButton>
            <span>Stop</span>
          </HoverButton>
        </form>
      </div>
    </>
  );
};

export default CrawlerStatus;
