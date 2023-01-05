



































// // First Class Functions
// /*
// receivesAFunction function should:
//     - take a callback function as an argument
//     - call the callback function
//     - it doesn't matter what this function returns, so long as it calls the callback function */
// function receivesAFunction(callback) {
//     return callback();
// }
// // Alternative Arrow Function (refactored version):
// receivesAFunction = callback => callback();
// callback = () => x + 3;
// // console.log(receivesAFunction);
// // console.log(callback(x = 1));


// /* returnsANamedFunction function should: 
//     - take no arguments
//     - return a named function          */
// function returnsANamedFunction () {
//     return function namedFunction () {
//         console.log('this is an example of a named function');
//     }
// }


// /* returnsAnAnonymousFunction function should:
//     - take no arguments
//     - take an anonymous function            */
// function returnsAnAnonymousFunction () {
//     return () => console.log('this is an anonymous function');
// }
