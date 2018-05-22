require('should');

describe('response module tests', function() {
  var createResponse;

  // replace this with your own test data
  before(function() {
    // runs before all tests in this block
    createResponse = require('../response');
    createResponse.should.be.a.Function();
  });

  it('should return object with null props when no args given', () => {
    const result = createResponse();
    result.should.be.an.Object();
    result.should.have.property('error', null);
    result.should.have.property('result', null);
  });

  it('should return an object with an error if a value is passed for argument 1', () => {
    const result = createResponse('test');
    result.should.be.an.Object();
    result.should.have.property('error', 'test');
    result.should.have.property('result', null);
  });

  it('should return an object with an error if a value is passed for argument 2', () => {
    const result = createResponse(null, 'test');
    result.should.be.an.Object();
    result.should.have.property('error', null);
    result.should.have.property('result', 'test');
  });
  
})