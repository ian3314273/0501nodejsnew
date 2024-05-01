const Parser = require('rss-parser')

let parser = new Parser();

// Get https://www.cwa.gov.tw/rss/Data/cwa_warning.xml

async function fetchData() {
    let feed = await  parser.parseURL('https://www.cwa.gov.tw/rss/Data/cwa_warning.xml');
    console.log((feed.title));

    feed.items.forEach((item=>{
        console.log(item.title + ' ' + item.link)
    }));
}