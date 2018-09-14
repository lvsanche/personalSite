


var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(app).listen(8080, '127.0.0.1');


function app (req, res){
    var filePath = req.url;
    console.log(filePath);
    if(filePath === '/'){
        filePath = '/index.html';
    }
    var extname = String(path.extname(filePath)).toLowerCase();
    
    // console.log(req.headers);
    // console.log(req.method);
    if( req.method === 'GET'){
        var mimeTypes = {
            '.js': 'text/javascript',
            '.html': 'text/html',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.wav': 'audio/wav',
            '.mp4': 'video/mp4',
            '.woff': 'application/font-woff',
            '.ttf': 'application/font-ttf',
            '.eot': 'application/vnd.ms-fontobject',
            '.otf': 'application/font-otf',
            '.svg': 'application/image/svg+xml'
        };

        console.log('before: '+filePath)
        var contentType = mimeTypes[extname] || 'application/octet-stream';
        filePath = path.resolve(__dirname, '../public'+filePath);

        console.log('Generic: '+  filePath);
        fs.readFile(filePath, function(error, content) {
            if (error) {
                if(error.code == 'ENOENT') {
                    res.writeHead(404);
                    res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                }
                else {
                    res.writeHead(500);
                    res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                }
            }
            else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
}    
