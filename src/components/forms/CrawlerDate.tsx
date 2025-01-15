"use client";

import { useState, useEffect } from "react";

import HoverButton from "@/components/ui/HoverButton";
import DateItem from "@/components/ui/DateItem";
import { updateDate } from "@/actions/taskSetting";

type CrawlerDate = {
  workdays: string[];
  holidays: string[];
};

const CrawlerDate = ({ date }: { date: CrawlerDate }) => {
  const [workdays, setWorkdays] = useState(date.workdays);
  const [holidays, setHolidays] = useState(date.holidays);

  useEffect(() => {
    setWorkdays(date.workdays);
    setHolidays(date.holidays);
  }, [date]);

  const addWorkingDay = () => {
    setWorkdays([...workdays, ""]);
  };
  const addHoliday = () => {
    setHolidays([...holidays, ""]);
  };

  return (
    <form action={updateDate} className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-2">
        <label className="font-xl rounded-md bg-gray-200 text-center font-semibold dark:bg-gray-800">
          Work on weekend
        </label>
        {workdays.map((day, index) => (
          <DateItem
            key={index}
            date={day}
            dateType="workday"
            onChange={(e) => {
              const newWorkdays = [...workdays];
              if (workdays.includes(e.target.value)) {
                return;
              }
              newWorkdays[index] = e.target.value;
              setWorkdays(newWorkdays);
            }}
            onDelete={() => {
              const newWorkdays = [...workdays];
              newWorkdays.splice(index, 1);
              setWorkdays(newWorkdays);
            }}
          />
        ))}
        <HoverButton onClick={addWorkingDay} type="button" className="sm:w-2/5">
          Add
        </HoverButton>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="font-xl rounded-md bg-gray-200 text-center font-semibold dark:bg-gray-800">
          Pass on workday
        </label>
        {holidays.map((day, index) => (
          <DateItem
            key={index}
            date={day}
            dateType="holiday"
            onChange={(e) => {
              const newHolidays = [...holidays];
              if (holidays.includes(e.target.value)) {
                return;
              }
              newHolidays[index] = e.target.value;
              setHolidays(newHolidays);
            }}
            onDelete={() => {
              const newHolidays = [...holidays];
              newHolidays.splice(index, 1);
              setHolidays(newHolidays);
            }}
          />
        ))}
        <HoverButton onClick={addHoliday} type="button" className="sm:w-2/5">
          Add
        </HoverButton>
      </div>
      <div className="flex justify-end gap-2">
        <HoverButton>
          <span>Update</span>
        </HoverButton>
      </div>
    </form>
  );
};

export default CrawlerDate;
