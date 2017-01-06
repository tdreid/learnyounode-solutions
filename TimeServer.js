var net = require('net');
var df = require('date-format'); // $ npm install date-format

var server = net.createServer(function(socket){
    var dt = new Date();
    socket.write(df('yyyy-MM-dd hh:mm',dt)+"\n");
    socket.end();
});

server.listen(process.argv[2]);