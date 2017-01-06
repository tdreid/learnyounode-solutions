var http = require('http');
var answers = [null,null,null];
var urls = process.argv.slice(2);

for(var i = 0;i < urls.length;i++){
    (function(i) {
        http.get(urls[i], function(request) {
          var result = "";
          request.setEncoding("utf8");
          request.on("data", function(data) {
            result += data;
          });
          request.on("end", function() {
            answers[i] = result;
            var n = 0;
            for (var j = 0; j < answers.length; j++) {
              if (answers[j] != null) n++;
            }
            if (n == answers.length) {
              for (var k = 0; k < answers.length; k++) {
                console.log(answers[k]);
              }
            }
          });
        });
      })(i);
}

