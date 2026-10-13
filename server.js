import http from 'node:http'
import { serverStatic } from './serverstatic.js'
const PORT = 5000
const __dirName = import.meta.dirname
const server = http.createServer(async (req, res) => {
    await serverStatic(res, req, __dirName)
})
server.listen(PORT)