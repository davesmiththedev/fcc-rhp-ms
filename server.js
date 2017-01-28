const express = require("express");
const app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    var ip = req.header('x-forwarded-for');
    var os = getOS(req.header('user-agent'));
    var language = getLanguage(req.header('accept-language'));
    
    var results = {ipaddress: ip, language: language, software: os};
    
    res.end(JSON.stringify(results));
    
}).listen(port);

function getLanguage(acceptLanguage){
    if (acceptLanguage != null){
        var langaugeData = acceptLanguage.split(',');
        return langaugeData[0];
    }else{
        return null;
    }
};

function getOS(userAgent){
    if(userAgent != null){
        var osRegExp = /\(([^)]+)\)/;
        var matches = osRegExp.exec(userAgent);
        
        return matches[1];
    }else{
        return null;
    }
};