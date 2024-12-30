import { Suspense } from "react";
import Image from "next/image";

import SectionCard from "@/components/SectionCard";
import UrlButton from "@/components/UrlButton";
import CrawlerStatus from "@/components/forms/crawlerStatus";

export default function Home() {
  return (
    <div className="mt-10 grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:mt-0 sm:p-20">
      <main>
        <SectionCard
          title="Crawler Status"
          description="Is the crawler running?"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <CrawlerStatus />
          </Suspense>
        </SectionCard>
      </main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center space-x-6">
        <UrlButton url="https://web.pcc.gov.tw/prkms/tender/common/basic/indexTenderBasic">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          政府招標查詢
        </UrlButton>
        <UrlButton url="https://www.distantnova.com/">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          遠星文創
        </UrlButton>
      </footer>
    </div>
  );
}
