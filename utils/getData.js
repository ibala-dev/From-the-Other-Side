import path from 'node:path'
import fs from 'node:fs/promises'
export async function getData() {
    try {

        const pathData = path.join('data', 'data.json')
        const data = await fs.readFile(pathData, 'utf-8')
        const jsonData = JSON.stringify(data)
        const ParsedData = JSON.parse(jsonData)
        return ParsedData
    }       
    catch (error) {
        console.log(error)
        return []
    }

}