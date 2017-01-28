const express = require("express");
const app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    var ip = req.header('x-forwarded-for');
    var userAgent = req.header('user-agent');
    var acceptLanguage = req.header('accept-language');
    
    res.end(ip + ' - ' + userAgent + ' - ' + acceptLanguage);
    
}).listen(port);