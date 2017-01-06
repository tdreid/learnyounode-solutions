var lsMod = require("./LsMod");

lsMod(process.argv[2],process.argv[3],function(err,files){
    if(err){
        console.err(err);
    } else {
        files.forEach(function(fileName){
            console.log(fileName);
        })
    }
})