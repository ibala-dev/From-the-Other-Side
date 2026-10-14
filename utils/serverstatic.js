import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from "./contentType.js";

export async function serverStatic(res, req, dir) {
    const baseDir = path.join(dir, 'public')
    const pathDir = path.join(baseDir, req.url === '/' ? 'index.html' : req.url.split('?')[0])
    const ext = path.extname(pathDir)
    const contentType = getContentType(ext)
    try {
        
        const content = await fs.readFile(pathDir)
        sendResponse(res, 200, contentType, content)
    }
    catch (error) {
        if(error.code === 'ENOENT'){
                const errorPath = path.join(baseDir,'404.html')
                try{
                    const fetchData = await fs.readFile(errorPath)
                    sendResponse(res,404,'text/html',fetchData)
                }
                catch(err){
                    sendResponse(res, 500, 'text/plain', '404-page nout found')
                }
        }
        else{
            sendResponse(sendResponse(res, 500, 'text/html', `<html><h1>Server error:${error.code}</h1></html>`))
        }
    }

}

