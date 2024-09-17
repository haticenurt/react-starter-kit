function request(url,data=false, method='GET'){

    return new Promise(async(resolve,reject)=>{
        const options={
            method
        }
        if(data&&method=='POST'){
            options.body=JSON.stringify()
        }
        const response=await fetch(url,options)
        const result = await response.json()

        if(response.ok&&response.status==200)
    {
      resolve(result)
    }else{ reject(result)}
    })
}
export const POST =(url,data)=>request(url,data,POST)
export const gat =url=>request(url)