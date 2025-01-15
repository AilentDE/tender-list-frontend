"use server";
import { revalidatePath } from "next/cache";

const BASE_URL = process.env.API_URL;

const getCrawlerStatus = async (): Promise<boolean | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/scheduler/status`);
    const data = await response.json();

    console.log(data);

    return data.success ? data.data.running : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const startCrawler = async () => {
  try {
    const response = await fetch(`${BASE_URL}/scheduler/start`, {
      method: "POST",
    });
    const data = await response.json();

    if (data.success) {
      revalidatePath("/");
      return data.data.running;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const stopCrawler = async () => {
  try {
    const response = await fetch(`${BASE_URL}/scheduler/pause`, {
      method: "POST",
    });
    const data = await response.json();

    if (data.success) {
      revalidatePath("/");
      return data.data.running;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export { getCrawlerStatus, startCrawler, stopCrawler };
