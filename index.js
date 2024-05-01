const Parser = require('rss-parser')

let parser = new Parser();
let result =
// Get https://www.cwa.gov.tw/rss/Data/cwa_warning.xml

async function fetchData() {
    let feed = await  parser.parseURL('https://www.cwa.gov.tw/rss/Data/cwa_warning.xml');
    console.log((feed.title));

    feed.items.forEach((item=>{
        console.log(item.title + ' ' + item.link + item.content)
    }));
}

fetchData();

var http = require('http');

http.createServer(async function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World!<br>");
    // 載入檔案
    let text = await getText('https://www.w3schools.com/js/mycar.html');
    // 取代"img_car.jpg" 為 "https://www.w3schools.com/js/img_car.jpg" text
    text = text.replace(/img_car.jpg/g, "https://www.w3schools.com/js/img_car.jpg");
    res.write(text);
    console.log("http://localhost:8080" + req.url);

    res.end();
}).listen(8080);

console.log("本機端的網址: http://localhost:8080");


async function getText(file) {
    let response = await fetch(file);
    let data = await response.text();
    return data;
}