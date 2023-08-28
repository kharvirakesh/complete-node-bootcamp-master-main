const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('home page');
    } else if (pathName === '/api') {
        fs.readFile(`${__dirname}/final/dev-data/data.json`, 'utf-8', (err, data) => {
            console.log(JSON.parse(data));
            res.writeHead(200, { 'Content-type': 'Application/json' });
            res.end(data);
        })
    }
    else if (pathName === '/product') {
        res.end('product page');
    } else {
        res.writeHead(404, {
            'Content-type': 'plain/html',
            'my-own-header': 'hello-world',
        })
        res.end(`<h1>page not found!</h1>`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});