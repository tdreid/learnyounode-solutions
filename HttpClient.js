var ht = require('http');

ht.get(process.argv[2],function(r){
    r.setEncoding("utf8");
    r.on("data",function(d){
        console.log(d);
    })
})

