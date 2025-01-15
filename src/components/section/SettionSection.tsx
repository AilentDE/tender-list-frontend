import SectionCard from "@/components/SectionCard";
import { getSetting } from "@/actions/taskSetting";

import CrawlerWebhook from "@/components/forms/CrawlerWebhook";
import CrawlerDate from "@/components/forms/CrawlerDate";
import CrawlerTags from "@/components/forms/CrawlerTags";

const SettingSection = async () => {
  const setting = await getSetting();
  const { webhook, date, tag } = setting;

  return (
    <>
      <SectionCard
        title="Webhook"
        description="Teams webhook used for sending message"
      >
        <CrawlerWebhook webhook={webhook} />
      </SectionCard>
      <SectionCard title="Date" description="working day and holiday">
        <CrawlerDate date={date} />
      </SectionCard>
      <SectionCard title="Tags" description="setting tender tags for search">
        <CrawlerTags tagSet={tag} />
      </SectionCard>
    </>
  );
};

export default SettingSection;
