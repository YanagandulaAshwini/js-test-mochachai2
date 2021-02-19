const assert=require('chai').assert;
const Dasheven=require('../jsprograms/program2.js')
describe('program2) Testing - Dash Between even numbers', function(){
	it('It should return 12-256-8-4', function(){
        let result = Dasheven([1,2,2,5,6,8,4]);
        let output = '12-256-8-4'; 
		assert.equal(result,output);
    });
    it('It should return null', function(){
        let result = Dasheven(null);
        let output = null; 
		assert.equal(result,output);
    });
});
