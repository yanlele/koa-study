const compose=require('koa-compose');
const Koa =require('koa');
const app=new Koa();

const logger=(ctx,next)=>{
    console.log('logger')
};

const main=ctx=>{
    ctx.response.body='hello world'
};

let middleWares=compose([logger,main]);
app.use(middleWares);

app.listen(3000);