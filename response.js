
module.exports =  function createResponse(error = null, result = null) {
  return Object.seal(Object.freeze({error, result}));
};