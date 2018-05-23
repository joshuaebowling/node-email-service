const
  net = require('net'),
  JsonSocket = require('json-socket'),
  config = require('config'),
  Response = require('./response'),
  mailService = require('./services').email,
  log = require('./utils').log
;

const server = net.createServer({port: config.port});

server.on('connection', (socket) => {
  jsonSocket = new JsonSocket(socket);
  jsonSocket.on('message', (data) => {
    mailService.sendMessage(data.transportInfo, data.from, data.to, data.subject, data.message)
      .then(response => {
        log.info(response);
        jsonSocket.sendMessage(response);
      })
      .catch()
    ;
  });
  socket.on('error', () => {});

});

server.listen(config.port, () => { log.info(`server ready on port ${ config.port }`) });