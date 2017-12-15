const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

const route = require('koa-route');
const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body=fs.createReadStream('./demos/template.html')
};
const main =ctx=>{
    ctx.response.type='html';
    ctx.response.body='main html'
};

app.use(route.get('/',main));
app.use(route.get('/about',about));

app.listen(3000);