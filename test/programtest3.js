const assert=require('chai').assert;
const Ascending=require('../jsprograms/program3.js')
describe('program3.Testing - arranging in Ascending order', function(){
  it('It should return null', function(){
    let actual = Ascending(null);
    let output = null; 
    assert.deepEqual(actual,output);
    });
	it('It should return [7,45,98,100]', function(){
        let actual = Ascending([45,7,98,1200]);
        let output = [7,45,98,1200]; 
		assert.deepEqual(actual,output);
    });  
});