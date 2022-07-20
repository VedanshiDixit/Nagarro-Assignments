const http = require('http');
const fs = require('fs');
const port = 3000;


const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html' });
    fs.readFile(__dirname +"/public"+ (req.url === "/" ? "/index.html" : req.url), function(error,data) {
        if(error){
            res.writeHead(404);
            res.write('Error : File Not Found');
        } else{
            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(port, function(error) {
    if(error){
        console.log('Something went wrong', error);
    } else{
        console.log(`Server is running on Port: ${port}`);
    }
});
