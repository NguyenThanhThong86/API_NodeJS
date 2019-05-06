# List APIs
- API GET, POST, PUT, DELETE Products 
# Source Code - NodeJs
    https://github.com/NguyenThanhThong86/API_NodeJS.git

# Product API
- GET /v1/products ---> Get list of product
- POST /v1/products ---> Add to one product
- Put /v1/products ---> Update to one product
- Delete /v1/products ---> Delete to one product

# Mocha Chai Istanbul NYC

- If you think writing test cases will slow down your development process, then you may or may not be right. You are right when you are implementing a one page application or a simple prototype project; also, you may be wrong in these cases because testing is simple and saves your time. Really!!!!!!!!

- For sure, the time for testing a simple page will force you to retype the inputs ten times or hundreds to find the bug and fix it. Dear developer your time is important to you and your boss. Just write your input data once and you can run your Node several times to uncover the hidden bugs and kill them easily.

- To uncover the bugs, you need a simple success case and a code coverage report. Then, write some tests to assure the branches of your code are covered.

- Mocha is a JavaScript test framework running on Node.js and in the browser, to run the testing scripts written in JS. Mocha tests run test cases serially for flexibility and to make testing report more accurate. Hence, Mocha is just a test runner and does not include assertion. Chai is aTest-driven development “TDD” assertion library for Node and the browser that can be delightfully paired with any JavaScript testing framework. The Chai expect style is like expect API in Jasmine to make life easier to who know Jasmine.

- Istanbul is a JavaScript tool to generate the coverage report. It is another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. You do not need to write any code to run the coverage report. You just need the command line to generate an HTML report for all your JS code and you can include or exclude whatever in the package.json file easily. NYC is the Istanbul command line interface.

# Installation
	
- npm i mocha --save-dev
- npm i chai --save-dev
- npm i nyc --save-dev


# Configuration:
- add test, nyc elements to package.json
- "scripts": {
        "nyc": "nyc mocha unittest/unittest.js --timeout 10000 --exit",
        "coverage": "nyc --reporter=lcov --reporter=text-lcov npm test",
        "test": "mocha unittest/unittest.js",
        "start": "nodemon index.js"
    }
  
  
# Testing
#Run a test case
- npm test
  
  
#Run a test case with Istanbul code coverage
- npm run nyc
