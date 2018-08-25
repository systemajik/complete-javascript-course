///////////////////////////////////////
// Lecture: Hoisting
/*


//only works for function declarations

calculateAge(1950);

function calculateAge(year) {
  console.log(2018 - year);
}

//function is stored as a variable in the execution context
//means it can be executed before it is declared

//doesn't work for a functional expression

var retirement = function(year) {
  console.log(65 - (2016 - year));

retirement(1990);

}

//variables

console.log(age);
var age = 23;       //store in the variable object of the global execution object
console.log(age);

function foo () {
  var age = 65;     //different value as stored in the execution object of a function
  console.log(age);
}

foo();
console.log(age);

//impotant take-away - you can use execute functions in your code before declaring them

*/



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Hoisting & Execution context

/*
How code is executed.

Execution context object consists of:
  - Variable Object (VO)
  - Scope chain
  - "This" Variable

//Creation Phase
  - Creates the VO
  - Create the scope chain
  - Determine the value of the 'this' variable

//Execution Phase
  - Code is ran line by line

  1. The argument object is created, containing all arguments that were passed to the function
  2. Code is scanned for function declarations; for each function, a property is created in the VO, pointing to the function
  3. Code is scanned for variable declarations; for each variable, a property is created in the VO, set to undefined

  Points 2 and 3 are considered 'hoisting', where the variables are created before the execution starts.
  - Functions are already defined
  - Variables are set to undefined, only defined during execution phase

*/


///////////////////////////////////////
// Scoping chain

/*
  - Answers to the question: where can we access a certain variable
  - Each new function creates a scope: A space/environment in which the variables defined are accessible
  - Lexical scoping: A function within another function gets access to the outer functions
*/


///////////////////////////////////////
// The 'This' Keyword
/*
  - Regular function call - the 'this' keyword points at the global object (window)
  - Method (function in an object) points at the same object
  - The 'this' keyword is not assigned a value until a function where it is defined is executed

calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}
*/
var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);   //points to john object
/*
    function innerFunction () {
      console.log(this);                    //points to window
    }
    innerFunction ();
    */
  }

}

john.calculateAge();


var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;      //method borrowing
mike.calculateAge();
