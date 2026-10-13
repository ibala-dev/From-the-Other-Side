import http from 'node:http'
import { serverStatic } from './utils/serverstatic.js'
import { handleGet } from './handlers/routeHandlers.js'
const PORT = 5000
const __dirName = import.meta.dirname
const server = http.createServer(async (req, res) => {
    await serverStatic(res, req, __dirName)
    if(req.url.path.startsWith('/api') && req.method==='GET'){
        handleGet()
}
})
server.listen(PORT)