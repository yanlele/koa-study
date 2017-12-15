const Koa = require('koa');
const app = new Koa();
const route=require('koa-route');
const path=require('path');
const serve=require('koa-static');
const fs=require('fs');


const staticPublic=serve(path.join(__dirname, 'public'));

const about=ctx=>{
    ctx.response.type='html';
    ctx.response.body=fs.createReadStream('./demo/template.html')
};

const main=ctx=>{
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    ctx.response.body='main html'
};

const redirect=ctx=>{
    ctx.response.redirect('/')
};

app.use(staticPublic);
app.use(route.get('/',main));
app.use(route.get('/about',about));
app.use(route.get('/redirect',redirect));



app.listen(3000);