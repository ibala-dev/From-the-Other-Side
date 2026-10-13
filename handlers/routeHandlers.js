import { getData } from "../utils/getData";
import { sendResponse } from "../utils/sendResponse";

export function handleGet(){
    const data = getData()
    const dataStr = JSON.stringify(data)
    sendResponse(res,'200','text/plain',dataStr)
}