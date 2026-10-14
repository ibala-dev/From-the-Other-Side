export async function parseJSONBody(req){
    let body =''
try{
    for await (const chunks of req){
        body+= chunks
    }
   return JSON.parse(body)
}catch(error){
    console.log(`ivalid JSON format:${error.code}`)
}
}