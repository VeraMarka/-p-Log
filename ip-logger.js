const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const ip = req.connection.remoteAddress;
    console.log('IP Address:', ip);
    // IP'yi dosyaya yazma
    fs.appendFile('ips.txt', ip + '\n', (err) => {
        if (err) throw err;
        console.log('IP logged to ips.txt');
    });

    // İpucu: Burada başka işlemler de yapılabilir, örneğin istemciye yanıt gönderme
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Link clicked!</h1>');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
