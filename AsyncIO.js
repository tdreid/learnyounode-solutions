var fs = require("fs");
fs.readFile(process.argv[2],"utf8", function(e,d){
    if(!e){
        console.log(d.split("\n").length - 1);
    }
});