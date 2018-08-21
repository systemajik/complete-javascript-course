// 1.1 Variables

/*

var name = 'Lloyd';
var lastName = 'Rees';
var age = 29;
console.log(name);
console.log(lastName);
console.log(age);

var fullAge = true;
console.log(fullAge);


//
//
//
//
//
// 1.1.1 Variables: Mutation & Type Coercion
//
//
//
//
//


// 1.1.2 Mutation


var name = 'Lloyd';
var lastName = 'Rees';
var age = 29;
var job, isMarried; //used when you want to declare later

job = 'Digital Marketer'; //declared variable later
isMarried = false;

console.log(name + ' ' + lastName + ' ' + 'is a' + ' ' + job + ' ' + isMarried);

job = 'Admin Assistant'; //mutation - changing the value
age = 35;

console.log(name + ' ' + lastName + ' ' + 'is a' + ' ' + job + ' ' + isMarried);


// 1.1.3 Type Coercion


var age = 29;
var name = 'Lloyd';

age == '29' ? console.log(name + 'is' + ' ' + age + ' years old.') : console.log(name + 'is not old enough'); //Equality is implicit. A string of 29 will return true, e.g. type coercion
age === '29' ? console.log(name + 'is' + ' ' + age + ' years old.') : console.log(name + 'is not old enough'); //Equality is explicity. A string of 29 will return false

// 1.1.5 Truthy and Falsy values


Falsy values: undefined, null, 0, '', NaN
Truthy values: NOT falsy values


//
//
//
//
//
// Coding Challenge 2
//
//
//
//
//




var john1 = 89;
var john2 = 120;
var john3 = 103;

var mike1 = 116;
var mike2 = 94;
var mike3 = 123;

var johnAverage = (john1 + john2 + john3) / 3;
var mikeAverage = (mike1 + mike2 + mike3) / 3;

console.log(johnAverage);
console.log(mikeAverage);

if (johnAverage >= mikeAverage) {
  console.log('John wins! His average score is' + ' ' + johnAverage);
} else {
  console.log('Mike wins! His average score is' + ' ' + mikeAverage);
}


//
//
//
//
//
// 1.2 Operators
//
//
//
//
//


var age = 29; //Assignment operator
var birthYear = 2018 - age; //Arithmetic operators + * / -
age++; //Increment operator - Increases by 1 each time
age*= 2; //Assignment operator - Multiplies by 2

console.log(age);

//When using operators, check operator precedence to understand priority and direction



//
//
//
//
//
// 1.3.1 If/Else Statements
//
//
//
//
//


var name  ='Lloyd';
var age = 29;
var isMarried = 'no';

if (isMarried ==='yes') {
  console.log(name + ' is married');
} else {
  console.log(name + ' will hopefully get married soon');
}


// 1.3.2 Boolean Logic & Switch Statements


var age = 5;
var name = 'sibbi sulu cat';

if (age <= 10) {
  console.log(name + ' is a very tiny kitten');
} else if (age >10 && age <=20) {                     // Age is greater than 10 and less than or equal to 20
  console.log(name + ' is a medium sized kitten');
} else {
  console.log(name + ' is a normal sized cat');
}


// 1.3.3. Switch statement, a more elegant way to test statements


var job = 'driver';

switch (job) {
  case 'teacher':
  console.log('John teaches kids');
  break;
  case 'driver':
  console.log('John drives a cab');
  break;
  case 'cop':
  console.log('John is an investigator');
  break;
  default:
  console.log('John does not do anything');
}


// 1.3.4. Ternary Operators


var software = 'Microsoft';
var version = 10;

version === 10 ? console.log('You are using Windows 10') : console.log('You are using a different version'); //Less code

var antivirus = version === 10 ? false : true;
console.log(antivirus);


//
//
//
//
//
// 1.4 Functions
//
//
//
//
//


// 1.4.1 Example 1: Calculating years until retirement

function yearsUntilRetirement(name, year) {     // name and year are 'Arguments', passed into the function
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(retirement);
}

yearsUntilRetirement('Lloyd', 1988);


// Example 2: Calculating loan interest costs


var loanSize = 3500; //Declaring the variable executes
var name = 'Sara';

function loanInterest(interest) {
  var totalDue = loanSize + (loanSize / 100 * interest);
  return totalDue;
}

var saraLoan = loanInterest(5.5);     //uses interest rate input to calculate loan

console.log(name + ' owes' + ' ' + saraLoan);


// Example 3: Converting kilometers into miles


var conversion, miles;

function kmToMiles(miles) {       //miles is the argument (input)
   conversion = miles * 1.6;      //arithmatic expression
  return conversion;              //conversion is the output
}

var answer = kmToMiles(10);       //functional expression - passing the output of the function into a variable
console.log(answer);              //printing the variable to the console


//
//
//
//
//
// 1.5 Statements & Expressions
//
//
//
//
//


// 1.5.1 Typical function statement

function someFunction(parameter) {
  //code
}

if (x ===5) {
  //do something
}

// 1.5.2 Typical function expression

var someFunction = function(parameter) {
  //code
}

// 1.5.3 More expressions
3 + 4;
var x = 3;


//
//
//
//
//
// 1.6 Arrays
//
//
//
//
//


// 1.6.1 Initialising the array


var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);


// 1.6.2 Mutate array data


names[0] = 'Derrick';                // To add a new item, simply update the number
names[names.length] = 'Mary';        //Adding an item to the array after final position
console.log(names);


// 1.6.3 Different data types / Array modification


var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');                  //adds to end
john.unshift('Mr.')                 //adds to beginning
john.pop();                         //removes end item
john.shift();                       //removes beginning item
console.log(john);

console.log(john.indexOf(1990));    //returns the position of the value

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'; //checks for 'designer' in the array

console.log(isDesigner);


//
//
//
//
//
// Coding Challenge 3
//
//
//
//
//


function calculateTip(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;       //make sure this retuns the answer
}
var bill = [124, 48, 268];
var tipAmount = [calculateTip(bill[0]), calculateTip(bill[1]), calculateTip(bill[2])];
var totalBill = [tipAmount[0] + bill[0], tipAmount[1] + bill[1], tipAmount[2] + bill[2]];

 console.log(totalBill[1]);


 //
 //
 //
 //
 //
 // 1.7. Objects & Properties
 //
 //
 //
 //
 //



//Object literal


var john = {
    firstName: 'John',      //key value pair of an object
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);


john.job = 'designer';      //object key value pair mutation
john['isMarried'] = true;   //object key value pair mutation
console.log(john);


// new Object syntax


var jane = new Object();
jane.firstName = 'Jane';
name.birthYear = 1989;
jane['lastName'] = 'Smith';
console.log(jane);


*/


//
//
//
//
//
// 1.8. Objects & Methods
//
//
//
//
//

/*

//Methods are objects and functions combined


var john = {
    firstName: 'John',      //key value pair of an object
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {                 //function is added into object
      this.age = 2018 - this.birthYear;   //this accesses object properties
    }
};

john.calcAge();
console.log(john);

*/


//
//
//
//
//
// Coding Challenge 4
//
//
//
//
//
/*
var Ben = {
  fullName: 'Ben Smith',
  mass: 76,
  height: 177,
  calcBmi: function() {
    this.bmi = (this.mass / this.height) / this.height * 10000;
    return this.bmi;
  }
};

var Susan = {
  fullName: 'Susan Richards',
  mass: 60,
  height: 159,
  calcBmi: function() {
    this.bmi = (this.mass / this.height) / this.height * 10000;
    return this.bmi;
  }
}

if (Susan.calcBmi() > Ben.calcBmi()) {
    console.log('Susans BMI is better than Bens, her BMI is ' + Susan.bmi);
  } else if (Susan.bmi < Ben.bmi) {
      console.log('Bens BMI is better than Susans, his BMI is ' + Ben.bmi);
    } else {
      console.log('Same BMI');

    }
    console.log(Ben.bmi, Susan.bmi);


    //
    //
    //
    //
    //
    // 1.9. Loops & Iteration
    //
    //
    //
    //
    //


  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

*/
//Part 1 - initial value of counter, starting point (var i = 0)
//Part 2 - Condition, carry on looping until 10 (i < 10)
//Part 3 - What to do with each loop, add 1 (i++)

/*
var john = ['John', 'Smith', 1990, false];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

//While loop - similar functionality, only uses condition

var i = 0;
while(i < john.length) {
  console.log(john[i]);
  i++;
}
*/

/*
//continue statement

var john = ['John', 'Smith', 1990, false, 'Designer'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;      //using continue allows you to skip other data types using !== operator
  console.log(john[i]);
}

//break statement

var john = ['John', 'Smith', 1990, false, 'Designer'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;      //using break stops the loop once a difference is detected
  console.log(john[i]);
}

//Looping backwards

for (var i = john.length -1; i >= 0; i--) {
  console.log(john[i]);
}
*/

//
//
//
//
//
// Coding Challenge 5
//
//
//
//
//
/*

var john = {
  fullName: 'John Smith',
  bill: [124, 48, 268, 180, 42],
  calcTip: function() {                             //function to calculate tip (method)
    this.tip = [];                                  //declaring empty arrays in object
    this.totalBill = [];
    for (var i = 0; i < john.bill.length; i++) {
      var x = this.bill[i];                         //making a short-hand for this.bill[i]
      var p;
      if (x < 50) {
      p = 0.2;
      } else if (x >= 50 && x < 200) {
      p = 0.15;
      } else {
      p = 0.1;
      }
      this.tip[i] = x * p;                          //returns the value of the tip into array
      this.totalBill[i] = x + this.tip[i];          //returns the value of the total bill into array
    }
  }
}

var mark = {
  fullName: 'Mark Jobbs',
  bill: [77, 375, 110 , 45],
  calcTip: function() {                             //function to calculate tip (method)
    this.tip = [];                                  //declaring empty arrays in object
    this.totalBill = [];
    for (var i = 0; i < mark.bill.length; i++) {
      var x = this.bill[i];                         //making a short-hand for this.bill[i]
      var p;
      if (x < 100) {
      p = 0.2;
    } else if (x >= 100 && x < 300) {
      p = 0.1;
      } else {
      p = 0.25;
      }
      this.tip[i] = x * p;                          //returns the value of the tip into array
      this.totalBill[i] = x + this.tip[i];          //returns the value of the total bill into array
    }
  }
}

function calcAverage (tips) {                       //argument is the tips
  var sum = 0;                                      //starting with sum of 0
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];                            //loops through and adds up tips
    return sum / tips.length;                       //divides total by the length of the array
  }
}

mark.calcTip();
john.calcTip();

john.average = calcAverage(john.tip);               // creating the object property average and calculating using the tips input
mark.average = calcAverage(mark.tip);
console.log(john, mark);

*/
//
//
//
//
//
// Coding Challenge 5
//
//
//
//
//
