"use server";
import { revalidatePath } from "next/cache";

const BASE_URL = process.env.API_URL;

const getSetting = async () => {
  try {
    const response = await fetch(`${BASE_URL}/task/setting`);
    const data = await response.json();

    console.log(data);

    return data.success ? data.data : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const updateWebhooks = async (formData: FormData) => {
  const primary = formData.get("primary");
  const debug = formData.get("debug");

  try {
    const response = await fetch(`${BASE_URL}/task/setting/webhook`, {
      method: "PUT",
      body: JSON.stringify({
        primary,
        debug,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.success) {
      revalidatePath("/");
    }
    return data.success;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const updateDate = async (formData: FormData) => {
  const workdays = formData.getAll("workday");
  const holidays = formData.getAll("holiday");

  try {
    const response = await fetch(`${BASE_URL}/task/setting/date`, {
      method: "PUT",
      body: JSON.stringify({
        workdays: workdays.filter((day) => day !== ""),
        holidays: holidays.filter((day) => day !== ""),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.success) {
      revalidatePath("/");
    }
    return data.success;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export { getSetting, updateWebhooks, updateDate };
