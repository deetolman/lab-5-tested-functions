/* global assert */
var tests = [];
function test(name, testFn) {
    tests.push({
        name: name,
        testFn: testFn
    });
    test.run = function() {
        var results = runTests();
        displayResults(results);
    };
}

function runTests() {
    //loop thru tests
    var results = [];
    var test;
    for(var i = 0; i < tests.length; i++){

    //reference the test
        test = tests[i];
        try {
            test.testFn();
        
    //if no errors - passes
            test.status = 'PASSED';
        }
        catch(err) {
         //if error - fails
            test.status = 'FAILED';
            test.error = err.message;
        }

    //record the results
        results.push(test);
    }
    //return all results
    return results;
}
function displayResults(results){
    var result;
    var color;

    for(var i = 0; i < results.length; i++) {
        result = [i];
        console.log(result);
        if(test.status === 'PASSED') {
            color = 'green';
        } else {
            color = 'red';
        }
        //log out result
        result.name + '%c' + test.status,
        'color: ' + color + ';';
    }
}
//change to true to run test tests
if(true) {//eslint-disable-line
    test ('1 + 1 = 2 passes', function(){
        assert.equal(1 + 1, 2);
    });

    test('1 + 1 = 2 fails', function() {
        assert.equal (1 + 1, 3);
    });

    var results = runTests();
    displayResults(results);
    test.run();
}