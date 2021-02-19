const  assert  = require('chai').assert;
const  removeduplicate = require('../jsprograms/program4.js');

describe('program4.Testing - Removing duplicates in array', function(){
	it('It should return [1,2,3,5,6]', function(){
        let result =  removeduplicate([1,2,1,2,2,3,3,5,6]);
        let output = [1,2,3,5,6]; 
		assert.deepEqual(result,output);
    });
    it('It should return null', function(){
        let result =  removeduplicate(null);
        let output = null; 
		assert.deepEqual(result,output);
    });
});