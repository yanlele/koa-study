const Koa =require('koa');
const logger=require('./logger-async');
const app=new Koa();

app.use(logger());
app.use((ctx)=>{
    ctx.body='hello world!'
});
app.listen(3000);
console.log('server is start ap port 3000');