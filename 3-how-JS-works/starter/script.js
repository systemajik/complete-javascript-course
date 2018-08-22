///////////////////////////////////////
// Lecture: Hoisting



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
// Lecture: The this keyword
