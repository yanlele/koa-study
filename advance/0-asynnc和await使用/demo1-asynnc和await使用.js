function getSyncTime(){
    return new Promise((resolve,reject)=>{
        try{
            let startTime=new Date().getTime();
            setTimeout(()=>{
                let entTime=new Date().getTime();
                let data=entTime-startTime;
                resolve(data);
            },500)
        } catch(err){
            reject(err)
        }
    })
}

async function getSyncData(){
    let time = await getSyncTime();
    let data=`endTime - startTime = ${time}`;
    return data;
}

async function getData(){
    let data=await getSyncData();
    console.log(data);
}

getData();