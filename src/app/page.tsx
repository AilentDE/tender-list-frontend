import { Suspense } from "react";

import SectionCard from "@/components/SectionCard";
import CrawlerStatus from "@/components/forms/CrawlerStatus";
import SettingSection from "@/components/section/SettionSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex flex-col space-y-8">
        <SectionCard
          title="Crawler Status"
          description="Is the crawler running?"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <CrawlerStatus />
          </Suspense>
        </SectionCard>
        <SettingSection />
      </main>
    </div>
  );
}
