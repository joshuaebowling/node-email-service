const 
  net = require('net'),
  JsonSocket = require('json-socket'),
  logger = require('./utils').logger
;

module.exports = function Client(host, port) {
  const self = this;
  self.client = new JsonSocket(net.createConnection({host, port}));
  self.sendEmail = function Client_sendEmail(transportInfo, from, to, subject, text, html) {
    return new Promise((resolve, reject) => {
      self.client.on('message', (response) => {
        if(response.error) return reject(response.error);
        resolve(response);
      });
      self.client.sendMessage({transportInfo, from, to, subject, text, html});
    });
  };
  return Object.freeze(Object.seal(self));
};