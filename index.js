const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath;

    // Map URLs to file paths
    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact-me') {
        filePath = path.join(__dirname, 'contact-me.html');
    } else {
        filePath = path.join(__dirname, '404.html');
    }

    // Read the file and serve the content
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
