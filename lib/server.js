var http = require('http'),
    url = require('url');

function start(route, handle) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;

    route(handle, pathname, req, res);
  }

  http.createServer(onRequest).listen(8000, function() {
    console.log('servre bound at http://127.0.0.1:8000/');
  });
}

exports.start = start;
