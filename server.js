    import http from 'node:http'
    import { serverStatic } from './utils/serverstatic.js'
    import { handleGet, handlePost } from './handlers/routeHandlers.js'
    const PORT = 5000
    const __dirName = import.meta.dirname
    const server = http.createServer(async (req, res) => {
        
        if(req.url.startsWith('/api') && req.method==='GET'){
            return await handleGet(res)
    }
    else if(req.url.startsWith('/api') && req.method === 'POST'){
        handlePost(res,req)
    }
    else{
    await serverStatic(res, req, __dirName)
}
    })
    server.listen(PORT)