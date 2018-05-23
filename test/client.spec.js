require('should');

describe('email client tests', function() {
  var emailClient, testData;
  this.timeout(5000);
  testData = require('../test-message-data-real');
  // replace this with your own test data
  before(function() {
    // runs before all tests in this block
    emailClient = require('../../client');
  });

  it('service should be an object with a sendMessage function', () => {
    emailClient.should.be.an.Object();
    emailClient.should.have.property('sendMessage');
    emailClient.sendMessage.should.be.a.Function();
  });

  it('sendMessage should send message', (done) => {
    emailClient.sendMessage(testData.transport, testData.from, testData.to[0], testData.messages[0].subject, testData.messages[0].text, testData.messages[0].html)
      .then(data => { 
        data.error.should.be.Null();
        data.result.should.be.an.Object();
        data.result.should.have.property('accepted');
        data.result.should.have.property('rejected');
        data.result.should.have.property('response');
        data.result.should.have.property('messageId');
        data.result.accepted.should.be.an.Array();
        data.result.rejected.should.be.an.Array();
        done();
      })
      .catch(err => { 
        err.should.be.Null();
        done(); 
      })
    ;
  });
  
})