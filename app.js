var express = require('express');
var path  =require('path');

var app = express();

app.set('views',path.join(__dirname,'public/views/'));
app.set('view engine','.html');
app.engine('.html',require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('purchase/index');
});

app.listen(4000, function(){
    console.log('The server is starting on port 4000.')
});