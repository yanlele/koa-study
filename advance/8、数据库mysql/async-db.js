//创建连接池
const mysql=require('mysql');
const pool=mysql.createPool({
    host:'127.0.0.1',
    user:'yanle',
    password:'53693750',
    database:'005_koa_demo'
});

let query =function(sql,values){
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(err,connection){
            if(err){
                reject(err)
            }else{
                connection.query(sql,values,(err,rows)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows)
                    }

                    connection.release();
                })
            }
        })
    })
};

module.exports={query}