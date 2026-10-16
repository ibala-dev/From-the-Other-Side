import fs from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { parseJSONBody } from './parseJSONBody.js';
export async  function storeData(__dirname){
const  [geoLocation,timeStamp,text,title] = await parseJSONBody()
const filePath = path.join(__dirname,'data','data.json')
const file = await fs.readFile(filePath, 'utf8');

const data = {
  "uuid": randomUUID(),
  timeStamp,
  text,
  title
}

  if (!Array.isArray(data)) {
    throw new Error('data.json must contain a JSON array');
  }
filePath.push(data)
await fs.writeFile(filePath, JSON.stringify(data, null, 2));
 console.log('Records saved:', data.length);
console.log('New data added successfully!');

}