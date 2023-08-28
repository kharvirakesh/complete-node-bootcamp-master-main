const fs = require("fs");
const url = require("url");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    const pathname = req.url;

    if (pathname === "/" || pathname === "/overview") {
        res.end("This is HomePage");
    } else if (pathname === "/project") {
        fs.readFileSync('./dev-data/data.json');
        res.end("This is Product Page");
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
        })
        res.end('<h1>page not found</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
});
