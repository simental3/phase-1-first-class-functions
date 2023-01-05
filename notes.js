// First Class Functions

/* receivesAFunction function should:
    - take a callback function as an argument
    - call the callback function
    - it doesn't matter what this function returns, so long as it calls the callback function */
function receivesAFunction(callback) {
    return callback();
}
// Arrow Function:
receivesAFunction = callback => callback();
// console.log(receivesAFunction);

function callback(x) {
    return 3 + x;
}
// Arrow Function:
callback = () => x + 3;
console.log(callback(1));
console.log(callback);

/* returnsANamedFunction function should: 
    - take no arguments
    - return a named function          */
function returnsANamedFunction () {
    return function namedFunction () {
        console.log('this is an example of a named function');
        console.log(namedFuntion());
    }
}
console.log(returnsANamedFunction);
console.log(returnsANamedFunction());

/* returnsAnAnonymousFunction function should:
    - take no arguments
    - take an anonymous function            */
function returnsAnAnonymousFunction () {
    return () => console.log('this is an anonymous function');
}
console.log(returnsAnAnonymousFunction());


// Lesson Example of a function for everday exercise routines:

/*
function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}
  
function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
  
function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}
  
function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}
  
function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}
*/


// Refactor by putting all runs, weights, & swimming excercises into their own function:
function runFiveMiles () {
    console.log("Go for a five-mile run");
}

function liftWeights () {
    console.log("Pump iron");
}

function swimFortyLaps () {
    console.log("Swim 40 laps");
}

// Monday() now looks like:
/*
function Monday () {
    runFiveMiles();
    liftWeights();
}
*/

/* Refactor even more (each day has two exercises, the 1st is always a run, which means the 2nd can be a variable)
What if we create a function that takes the 2nd activity as a parameter:                                        */
// Step 1: Create the function  vvv
/*
function exerciseRoutine (postRunActivity) {
    runFiveMiles();
    postRunActivity();
}
*/
// ^^^ DO NOT CONSOLE.LOG ! JUST USE IT AS A CALLBACK FUNCTION (EX. DOWN BELOW vvv)

/* ^^^ Note: In exerciseRoutine(), the parameter postRunActivity is a callback function
    -- we call it after we call runFiveMiles(). Use this new function we created in our Monday() function:                  */
// Step 2: This is the new refactored Monday function that takes the postRunActivity into account (as a callback function) vvv
function Monday () {
    exerciseRoutine(liftWeights);
}

function exerciseRoutine (postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

console.log(Monday());
/* Note: we aren't calling liftWeights
- When we want to pass a function as a value, we pass it by reference by omitting the parentheses at the end of the function
- We're not running the function at this point. It's up to exerciseRoutine() to call the function when it is needed       */


// DEFINE FIRST-CLASS FUNCTIONS
/* Functions in JS are first-class objects, they can be treated like any other object:
- they can be assigned to a variable
- passed as values to other functions
- returned as the value from another function, etc.
Note: in JS, functions are a special type of object!                                */


// INLINE FUNCTIONS
/* If you want a ONE-OFF day, Pilates added to the excercises, you can pass an anonymous function to exerciseRoutine()
- exerciseRoutine() function requires a function as its first (& only) parameter (doesn't need to be defined beforehand) */
exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
});
// "Go for a five-mile run"
// "Stretch! Work that core!"

// Arrow function (refactoring):
exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
});
// Arrow function (refactoring FURTHER):
exerciseRoutine(() => console.log("Stretch! Work that core!"));
/* No need to assign it to a variable or name it since we only need the function 1 time. Instead we define it INLINE as an
anonymous  function, passing it as the argument when we call exerciseRoutine()                                          */


// RETURNING FUNCTIONS
/* Functions can return other functions, which is useful when you want to package up a function & its environment, but
don't want to call it just yet
Morning routine = drinking coffee, exercising, & depending how we feel we'll eat breakfast later. What we eat depends on
what exercise we do. Lesson Example:                                                                                  */
function morningRoutine(exercise) {
    let breakfast;

    if (exercise === liftWeights) {
        breakfast = "omelette";
    } else if (exercise === swimFortyLaps) {
        breakfast = "waffles";
    } else {
        breakfast = "breakfast burrito"; 
    }

    exerciseRoutine(exercise);

    // we could give this function a name if we wanted to, but since it's only available _inside_ morningRoutine(), we don't need to
    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}
// Now when we call morningRoutine(), our exercise routine will be logged as before, but we'll also get a function back:
const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron
afterExercise;
// => f () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }
// We can call the function later with:
afterExercise();
// LOG: Nom nom nom, this protein bar is delicious!


/* HIGHER-ORDER FUNCTIONS
- a function that can accept functions as arguments AND/OR return a function */