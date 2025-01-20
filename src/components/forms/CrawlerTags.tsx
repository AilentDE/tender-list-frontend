"use client";

import { useState, useRef } from "react";

import FormUpdateBtn from "@/components/ui/FormUpdateBtn";
import TitleScope from "@/components/section/TitleScope";
import TagItem from "@/components/ui/TagItem";
import { updateTags } from "@/actions/taskSetting";

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
    <form action={updateTags} className="flex flex-col space-y-4">
      <TitleScope title="Keywords">
        <input
          type="text"
          placeholder="keyword"
          className="mb-2 min-w-24 rounded-md border px-1"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "numpadEnter") {
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
              tagType="keyword"
              onDelete={() => deleteKeyword(tag)}
            />
          ))}
        </div>
      </TitleScope>
      <TitleScope title="Organization">
        <input
          type="text"
          placeholder="organization"
          className="mb-2 min-w-24 rounded-md border px-1"
          ref={inputOriRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "numpadEnter") {
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
              tagType="organization"
              onDelete={() => deleteOriKeyword(tag)}
            />
          ))}
        </div>
      </TitleScope>
      <div className="flex justify-end gap-2">
        <FormUpdateBtn />
      </div>
    </form>
  );
};

export default CrawlerTags;
