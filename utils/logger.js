const
  Logger = require('bunyan'),
  config = require('config'),
  path = require('path')
;
var log = new Logger({
  name: 'email-service',
  streams: [
    {
      stream: process.stdout,
      level: Logger.DEBUG,
      src: true
    }
    // {
    //   path: path.resolve(config.logFile),
    //   level: Logger.ERROR,
    //   src: true
    // }
  ]
});

module.exports = log;