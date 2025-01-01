import UrlButton from "@/components/ui/UrlButton";
import Image from "next/image";

const RootFooter = () => {
  return (
    <footer className="sticky bottom-0 flex flex-wrap items-center justify-center space-x-6 bg-gray-50/90 dark:bg-gray-900/90">
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
  );
};

export default RootFooter;
