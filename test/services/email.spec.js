require('should');

describe('email service tests', function() {
  var emailService, testData;
  this.timeout(5000);
  testData = require('../test-message-data-real');
  // replace this with your own test data
  before(function() {
    // runs before all tests in this block
    emailService = require('../../services').email;
  });

  it('service should be an object with a sendMessage function', () => {
    emailService.should.be.an.Object();
    emailService.should.have.property('sendMessage');
    emailService.sendMessage.should.be.a.Function();
  });

  it('sendMessage should create transport', (done) => {
    emailService.sendMessage(testData.transport, testData.from, testData.to[0], testData.messages[0].subject, testData.messages[0].text, testData.messages[0].html)
      .then(data => { console.log('data=',data); data.error.should.be.Null(); done(); })
      .catch(err => { console.log(err); err.should.be.null(); done(); })
    ;
  });
  
})