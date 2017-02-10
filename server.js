var app=require('express')();

app.get('/img',function (req,res) {
   res.send("我是一张图片");
});
app.get('/script',function (req,res) {
    res.send("handleResponse('我是从服务器传来的数据')")
});

app.listen(8081);
