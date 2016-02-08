var http = require('http');
var express = require('express');
var morgan = require('morgan');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var livereload = require('livereload');

var app = express();
app.set('port', process.env.PORT || 4321);
app.use(morgan('short'));
var server = http.createServer(app);

app.use('/', serveIndex(__dirname + '/www', { icons: true }));
app.use('/', serveStatic(__dirname + '/www'));

app.use(function(req, res, next){
  res.status(404).send('Error 404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Error 500: ' + err.stack);
});

server.listen(app.get('port'), function(){
  console.info('App server running @ http://localhost:' + app.get('port'));
});

var lrServer = livereload.createServer({
  port: 35729,
  exts: '*'
}).watch(__dirname + '/www');

console.info('Live reload running @ http://localhost:35729, watching directory "www"');