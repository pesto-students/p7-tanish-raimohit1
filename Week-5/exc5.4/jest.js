JEST Installation
npm install --save-dev jest

#1) In the node project created in the above section, create a js file named calculator.js with contents as shown below


const mathOperations = {
   sum: function(a,b) {
       return a + b;
   },
   
   diff: function(a,b) {
       return a - b;
   },
   product: function(a,b) {
       return a * b
   }
}
  module.exports = mathOperations


#2) Now, create a test file in the same folder for these tests, named calculator.test.js – this is the convention expected by the Jest framework to look for all the files that contain Jest based tests. We will also import the function under test, in order to execute the code in the test.

const mathOperations = require('./calculator');


#3) Now, let’s write tests for different methods in the main file 


Please refer to the below points w.r.t the test above:

a) The describe block is an outer description for the test suite i.e it represents a generic container for all the tests that we are going to write for the calculator in this file.

b) Next, we have an individual test block – this represents a single test. The string in quotes represents the name of the test.

c) Refer to the code in the expect block – “expect” is nothing but an assertion. The statement is calling the sum method in the function under test with inputs 1 & 2 and expecting the output to be 3.


describe("Calculator tests", () => {
 test('adding 1 + 2 should return 3', () => {
   // arrange and act
   var result = mathOperations.sum(1,2)
 
   // assert
   expect(result).toBe(3);
 });
})

d) In order to run this test, simply run the command “npm test” in the terminal or command prompt at the project location.




#4) Let’s try some more tests.

a) First, write a failing test and see what output we get. Let’s just change the result to some incorrect value in the same test that we wrote in the last section. See how the test looks like.

describe("Calculator tests", () => {
 test('adding 1 + 2 should return 10', () => {
   // arrange and act
   var result = mathOperations.sum(1,2)
 
   // assert
   expect(result).toBe(10);
 });
})


Jest Matchers

#1) Equality
#2) Truthiness
#3) Number Matchers
#4) String Matchers