const  assert  = require('chai').assert;
const differenceOfArrays = require('../jsprograms/program5.js');

describe('program5.Difference of 2 arrays', function(){
  it('It should return null', function(){
    let result = differenceOfArrays(null);
    let output = null; 
    assert.deepEqual(result,output);
    });
  it('It should return [3,100,10]', function(){
      let result = differenceOfArrays([1,2,3],[100,2,1,10]);
      let output = [3,100,10]; 
      assert.deepEqual(result,output);
  });

});