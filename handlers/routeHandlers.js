import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
    const data = await getData();

    const dataStr =
        typeof data === "string" ? data : JSON.stringify(data);

    sendResponse(res, 200, "application/json", dataStr);
}