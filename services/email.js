const
  nodeMailer = require('node-mailer'),
  response = require('../response')
;

module.exports ={
  sendMessage: function sendMessage(transportInfo, from, to, subject, message) {
    const transporter = nodemailer.createTransport(transportInfo);
    const mail = { from ,to, subject, message };
    return promise = new Promise((resolve, reject) => {
      try {
        transporter.sendMail(mail, (error, info) => {
          resolve({error, info});
        });  
      } catch(err) {
        reject(err);
      }
    });
  }
};