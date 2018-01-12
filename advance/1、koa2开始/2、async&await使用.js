function getSyncTime(){
    return new Promise((resolve,reject)=>{
        try{
            let startTime=new Date().getTime();
            setTimeout(()=>{
                let endTime=new Date().getTime();
                let data=endTime-startTime;
                resolve(data);
            },500)
        }catch(err){
            reject(err);
        }
    })
}

async function getSycnData(){
    let time=await getSyncTime();

    let data=`endTime-startTime=${time}`;
    return data;
}

async function getData(){
    let data=await getSycnData();

    console.log(data)
}

getData();