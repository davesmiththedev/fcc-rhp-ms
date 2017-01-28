const express = require("express");
const app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    var ip = req.header('x-forwarded-for');
    var os = getOS(req.header('user-agent'));
    var language = getLanguage(req.header('accept-language'));
    
    res.end(ip + ' - ' + os + ' - ' + language);
    
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
    var firstSplit = userAgent.split('(');
    var secondSplit = firstSplit[1].split(';');
    var os = secondSplit[0];
    
    return os;
};