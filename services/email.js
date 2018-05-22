const
  nodeMailer = require('nodemailer'),
  response = require('../response')
;

module.exports = {
  sendMessage: function sendMessage(transportInfo, from, to, subject, text, html) {
    const transporter = nodeMailer.createTransport(transportInfo);
    const mail = { from ,to, subject, text, html };
    return promise = new Promise((resolve, reject) => {
      try {
        transporter.sendMail(mail, (error, info) => {
          resolve( {error, info} );
        });  
      } catch(err) {
        reject(err);
      }
    });
  }
};