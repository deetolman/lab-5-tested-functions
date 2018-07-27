function passingTest(){
}
try {
    passingTest();
    console.log('Test PASSED');
}
catch(err) {
    console.log('Test Failed', err);
}
function failingTest() {
 throw new error ('failing test')
}
try {
    failingTest();
    console.log ('test passed');
}
catch(err) {
    console.log('test Failed', err.message);
}