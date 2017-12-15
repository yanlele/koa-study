const fs =require('fs');
const Koa=require('koa');
const app=new Koa();

const main=async function(ctx,next){
    ctx.response.type='html';
    ctx.response.bod=await fs.readFile('../demo/template.html');
};

app.use(main);
app.listen(3000);