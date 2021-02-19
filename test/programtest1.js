const assert=require('chai').assert;
const highestAndLowest = require('../jsprograms/program1.js');
describe('program1) Testing - HighestLowest values', function(){
	it('It should return high 6 and low 1 values', function(){
        let result = highestAndLowest("1 2 4 5 6");
        let output = [6,1]; 
		assert.deepEqual(result,output);
    });
    it('It should return null', function(){
        let result = highestAndLowest(null);
        let output = null; 
		assert.deepEqual(result,output);
    });
});