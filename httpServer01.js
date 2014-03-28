var http = require('http'),
    redis = require('redis'),
    url = require('url');

var server = http.createServer(function(req, res) {
  var query = url.parse(req.url, true).query;
  var client = redis.createClient();

  client.lpush('top', 'nihao');
  res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
  });
  client.lpop('top', function(i, o) {
    console.log(o);
  });
  client.quit();
  res.end();
});

server.listen(8000, '127.0.0.1', function() {
  console.log('server bound at http://localhost:8000/');
});
