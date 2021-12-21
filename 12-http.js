const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my Home Page');
    }
    else if (req.url === '/about') {
        res.end('Welcome to my About Page');
    } else {
        res.end(`
        <h1>Tou Bad!</h1>
        <p>Page does not exist!</p>
        <a href="/">Back Home</a>
        `);
    }
});

server.listen(5000);