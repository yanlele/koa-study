# koa-study

### 基础部分
    基础的概念：Koa提供一个content对象，表示一次对话的上下文，包括了http请求和http响应。通过对这个对象的加工，可以控制返回给用户的内容
    

* 1 koa的开始
    * 1.1 Context.response.body属性是发送给用户的内容
```javascript
const Koa =require('koa');
const app=new Koa();
const main =ctx=>{
    ctx.response.body='hello world'
};
app.use(main);
app.listen(3000);
```