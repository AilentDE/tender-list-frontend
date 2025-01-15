"use client";

import { useState, useRef } from "react";
import TagItem from "@/components/ui/TagItem";

type CrawlerTags = {
  tags: string[];
  org_tags: string[];
};

const CrawlerTags = ({ tagSet }: { tagSet: CrawlerTags }) => {
  const { tags, org_tags } = tagSet;
  const [keywords, setKeywords] = useState(tags);
  const [oriKeywords, setOriKeywords] = useState(org_tags);

  const deleteKeyword = (keyword: string) => {
    setKeywords(keywords.filter((tag) => tag !== keyword));
  };

  const deleteOriKeyword = (keyword: string) => {
    setOriKeywords(oriKeywords.filter((tag) => tag !== keyword));
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const inputOriRef = useRef<HTMLInputElement>(null);

  return (
    <form className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-2">
        <label className="font-xl rounded-md bg-gray-200 text-center font-semibold dark:bg-gray-800">
          Keywords
        </label>
        <input
          type="text"
          placeholder="keyword"
          className="mb-2 min-w-24 rounded-md border px-1"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const newTag = inputRef.current?.value;
              if (newTag && !keywords.includes(newTag)) {
                setKeywords([newTag, ...keywords]);
              }
              inputRef.current!.value = "";
            }
          }}
        />
        <div className="flex w-80 flex-wrap gap-2">
          {keywords.map((tag, index) => (
            <TagItem
              key={index}
              title={tag}
              onDelete={() => deleteKeyword(tag)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="font-xl rounded-md bg-gray-200 text-center font-semibold dark:bg-gray-800">
          Organization
        </label>
        <input
          type="text"
          placeholder="organization"
          className="mb-2 min-w-24 rounded-md border px-1"
          ref={inputOriRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const newTag = inputOriRef.current?.value;
              if (newTag && !oriKeywords.includes(newTag)) {
                setOriKeywords([newTag, ...oriKeywords]);
              }
              inputOriRef.current!.value = "";
            }
          }}
        />
        <div className="flex w-80 flex-wrap gap-2">
          {oriKeywords.map((tag, index) => (
            <TagItem
              key={index}
              title={tag}
              onDelete={() => deleteOriKeyword(tag)}
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default CrawlerTags;
