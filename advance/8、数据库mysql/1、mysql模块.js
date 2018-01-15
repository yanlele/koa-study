//创建连接池
const mysql=require('mysql');
const pool=mysql.createPool({
    host:'127.0.0.1',
    user:'yanle',
    password:'53693750',
    database:'005_koa_demo'
});

//在数据池中进行会话操作
pool.getConnection(function(err,connection){
    connection.query('SELECT * FROM _mysql_session_store',(err,results,fields)=>{
        //结束会话
        connection.release();

        //如果错误就抛出
        if(err){
            throw err;
        }
    })
});