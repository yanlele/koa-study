const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

const route=require('koa-route');
const redirect=ctx=>{
    ctx.response.redirect('/');
};
const main=ctx=>{
    ctx.response.body='main'
};

app.use(main);
app.use(route.get('/redirect',redirect));
app.use(route.get('/',main));


app.listen(3000);