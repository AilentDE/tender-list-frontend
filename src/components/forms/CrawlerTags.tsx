type CrawlerTags = {
  tags: string[];
  org_tags: string[];
};

const CrawlerTags = ({ tags }: { tags: CrawlerTags }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="keyword"
        className="min-w-24 rounded-md border px-1"
      />
    </form>
  );
};

export default CrawlerTags;
