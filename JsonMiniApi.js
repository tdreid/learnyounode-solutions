var url = require('url');
var http = require('http');

var routes = {
     '/api/parsetime' : function(urlObj){
         var dt = new Date(urlObj.query.iso);
         var ret = {
            hour: dt.getHours(),
            minute: dt.getMinutes(),
            second: dt.getSeconds()
         };
        return JSON.stringify(ret);        
     }, 
     '/api/unixtime' : function(urlObj){
         var dt = new Date(urlObj.query.iso);
         var ret = {
            unixtime: dt.getTime() 
         };
         return JSON.stringify(ret);
     }
};


var srv = http.createServer(function(req, res){
    var urlObj = url.parse(req.url,true);
    var route = routes[urlObj.pathname];
    if (route){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(route);
    } else {
        res.writeHead(404);
        res.end;
    }
    
});
 
srv.listen(process.argv[2]);
