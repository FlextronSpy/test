var fs = require('fs');
var $ = require("jquery");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

function writeJson(json, callback) {
    fs.writeFile('new.json', json, 'utf8', callback);
}

xhr.open('GET', 'https://api.opendota.com/api/players/173588988/matches', true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status <400) {
        data = JSON.parse(xhr.responseText);
        console.log('data' + data);
        var json = JSON.stringify(data);
        writeJson(json, function(){

        });
    } else {
        console.log(Eror);
    }
};

xhr.send();