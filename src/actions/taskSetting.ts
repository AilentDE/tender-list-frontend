// import { revalidatePath } from "next/cache";

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

export { getSetting };
