
// /* NOTE 1: */
// console.log("I like Pizza");
// console.log("Its really good");
// //window.alert("Pizza alert!");

/*------------------------------------------------------------------*/

// /* NOTE 2: */

// // A variable is a container for storing data
// // A variable behaves as if it was the value that it contains

// // Two steps:
// // 1. Declaration (var, let, const)
// // 2. Assignment ( = assignment operator)

// let firstName = "Amol"; //strings
// let isEmployee = true; //booleans
// let  age  = 21; //numbers

// console.log("Hello ",firstName);
// console.log("your are ",age,"years young");
// console.log("and you are employee ",isEmployee);

// //To show information in browser by id
// document.getElementById("demo1").innerHTML = "Hello "+ firstName;
// document.getElementById("demo2").innerHTML = " Your age is "+age;
// document.getElementById("demo3").innerHTML = " Employee Enrolled :"+isEmployee;

/*------------------------------------------------------------------*/

// /* NOTE 3: */

// /*
// arithmetic expression is a combination of
// operands (values, variables, etc)
// operators(+ - * / %)
// that can be evaluated to a value
// ex. y = x + 10;
// */

// let toffy = 10;

// toffy+= 1;
// toffy-=1;
// toffy*=2;
// toffy/=2;

// console.log("toffy is ",toffy);

// let extraToffy = toffy % 2;
// console.log("Extra Toffy is ",extraToffy);

// /*
//  * operator precedence
//  *  1. paranthesis ()
//  *  2. exponents
//  *  3. multiplication & division
//  *  4. addition & subtraction
//  */

// let result = (1*2)+3-(5/5);
// console.log(result);

/*------------------------------------------------------------------*/

// /* NOTE 4: */

// // --- how to accept user input

// // -- Easy way with window prompt

// let username = window.prompt("Hey, what's your name?");
// console.log(username);


// // -- Difficult Way with HTML textbox

// let myUserName;

// document.getElementById("myButton").onclick = function(){
//     myUserName = document.getElementById("userName").value;
//     console.log(myUserName);
//     document.getElementById("myLabel").innerHTML = "Hello " + myUserName;
// }

/*------------------------------------------------------------------*/

// /* NOTE 5: */

// // Type Conversion =  change the datatype of a value to another
// //                                  (strings, numbers, booleans)

// let myAge = window.prompt("How old are you?");

// console.log(typeof myAge);
// myAge = Number(myAge);
// myAge+= 1;

// console.log("Happy Birthday! You are", myAge, "Years old");


// let a;
// let b;
// let c;

// a= Number("3.14");
// b = String(3.14);
// c = Boolean("Toffy");

// console.log(a ," is now a ", typeof a);
// console.log(b ," is now a ", typeof b);
// console.log(c ," is now a ", typeof c);

/*------------------------------------------------------------------*/

// /* NOTE 6: */

// // const = a variable that can't be changed

// const pi = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);
 
// circumference = 2 * pi * radius;
// console.log("The circumferance is : ",circumference);

/*------------------------------------------------------------------*/

// /* NOTE 7: Math */

// let x = 3.14159;
// let y = 4;
// let z = 7;
// let k;

// x = Math.round(x);
// console.log(x);

// x = Math.floor(x);
// console.log(x);

// x = Math.ceil(x);
// console.log(x);

// x = Math.pow(x, 3);
// console.log(x);

// x = Math.sqrt(x);
// console.log(x);

// x = Math.abs(x);
// console.log(x);

// let maxx  = Math.max(x,y,z);
// console.log(maxx);

// let minn  = Math.min(x,y,z);
// console.log(minn);

// k = Math.PI;
// console.log(k);

/*------------------------------------------------------------------*/

// /* NOTE 8: Hypotenous calci pratice program */

// let sideA;
// let sideB;
// let sideC;

// document.getElementById("submitBtn").onclick = function()
// {

// sideA = document.getElementById("aTextBox").value;
// sideA = Number(sideA);

// sideB = document.getElementById("bTextBox").value;
// sideB = Number(sideB);

// sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

// document.getElementById("cLabel").innerHTML = "Side C: "+sideC;

// }

/*------------------------------------------------------------------*/

// /* NOTE 9: COUNTER Program */

// let count = 0;
// document.getElementById("minus").onclick = function(){
//     count-=1;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("reset").onclick = function(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("plus").onclick = function(){
//     count+=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

/*------------------------------------------------------------------*/

// NOTE 10: Random Number Generator

// let x1 , y1, z1;

// document.getElementById("rollBtn").onclick = function(){
   
//     x1 = Math.floor(Math.random() * 6 ) + 1;
//     y1 = Math.floor(Math.random() * 6 ) + 1;
//     z1 = Math.floor(Math.random() * 6 ) + 1;

//     document.getElementById("x1Label").innerHTML = x1;
//     document.getElementById("y1Label").innerHTML = y1;
//     document.getElementById("z1Label").innerHTML = z1;

// }

/*------------------------------------------------------------------*/

// NOTE 11: USEFUL STRING METHODS

// let myName = "Amol Gahane";
// let empId = "1 5 4 8 1 6";
// console.log(myName.length);
// console.log(myName.charAt(0));
// console.log(myName.indexOf('G'));
// console.log(myName.lastIndexOf("G"));

// myName = myName.trim();
// myName = myName.toUpperCase();
// myName = myName.toLowerCase();
// console.log(myName);

// empId = empId.replaceAll(" ", "");
// console.log(empId);

/*------------------------------------------------------------------*/

// NOTE 12: STRING SLICING

// let companyName = "Birlasoft";
// let prefix;
// let suffix;

// prefix = companyName.slice(0, 5);
// console.log(prefix);

// suffix = companyName.slice(5);
// console.log(suffix);

// let otherCompanyName = "Micro Soft";
//  // --- using indexOf() method
// prefix = otherCompanyName.slice(0, otherCompanyName.indexOf(" "));
// suffix = otherCompanyName.slice(otherCompanyName.indexOf(" ") + 1);
// console.log(prefix);
// console.log(suffix);

/*------------------------------------------------------------------*/

// NOTE 13: METHOD CHAINING
 
// -- method chaining = calling one method after another 
//                      in one continuous line of code

// let courseName  = "JavaScript";

// let letter = courseName.charAt(4).toLowerCase().trim();

// console.log(letter);

/*------------------------------------------------------------------*/

// NOTE 14: IF STATEMENT

/// -- if statement = a basic form of decision making
///                     if a condition is true, then do something
///                      if not, then don't do it!

// let online = false;

// if(online){
//     console.log("Your are online!");
// }
// else{
//     console.log("Your are offline!");
// }

/*------------------------------------------------------------------*/

// NOTE 15: CHECKED PROPERTY
// document.getElementById("myBtn").onclick = function (){

//     const myCheckBox = document.getElementById("myCheckBox");
//     const visaBtn = document.getElementById("visaBtn");
//     const masterBtn = document.getElementById("masterBtn");
//     const paypalBtn = document.getElementById("paypalBtn");

//     if(document.getElementById("myCheckBox").checked ){
//         console.log("Hurry! You Enrolled the course..");
//     }
//     else{
//         console.log("You not enrolled the course");
//     }

//     if(visaBtn.checked){
//         console.log("You are paying with Visa  Card!");
//     }
//     else if(masterBtn.checked){
//         console.log("You are paying with Master Card..");
//     }
//     else if(paypalBtn.checked){
//         console.log("You are paying with PayPal Card..");
//     }
//     else{
//         console.log("You must select a payment type!");
//     }
// }

/*------------------------------------------------------------------*/

//  NOTE 16: Switches
// switch = statement that examines a value
//          for a match against many case clauses.
//          more efficient that many "else if" statements

// let grade = "A";
// switch(grade){

//     case 'A':
//         console.log("You did great!");
//         break;
//     case 'B':
//         console.log("You did good!");
//         break;
//     case 'C':
//         console.log("You did Okay!");
//         break;
//     case 'D':
//         console.log("You passed... barely!");
//         break;
//     default:
//         console.log(grade," is not a letter grade!");

// }

/*------------------------------------------------------------------*/

// NOTE 17: AND OR Logical operators


// Gives us the ability to check more than 1 condition concurrently
// && AND (Both conditions must be true)
// || OR (Either condition can be true)

// let temp = -19;
// let sunny = true;
// if(temp>=0 || temp<= 35 && sunny){
//     console.log("The weather is good!");
// }
// else{
//     console.log("Thee weather is bad!");
// }

/*------------------------------------------------------------------*/

// NOTE 18: NOT Logical operator
// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false , false -> true

// let  temp = -16;
// let sunny = true;
// if(!(temp > 0)){
//     console.log("Its warm outside");
// }
// else{
//     console.log("Its cold outside");
// }

// if(!sunny){
//     console.log("Its cloudy outside");
// }
// else{
//     console.log("Its sunny outside");
// }

/*------------------------------------------------------------------*/

// NOTE 19: While Loop
// while loop: repeat some code
//              while some condition is true
//              potentially infinite
//  let userName = "";

//  while(userName == "" || userName == null){
//     userName = window.prompt("Enter your name");
//  }

//  console.log("Hello", userName);

/*------------------------------------------------------------------*/

// NOTE 20: Do While Loop
// do while loop = do something,
//                  then check the condition,
//                  repeat if condition is true

// let userName = "";

// do{

// userName = window.prompt("Enter your name");

// }while(userName == "" || userName == null);

// console.log("Hello", userName);

/*------------------------------------------------------------------*/

//### NOTE 21: for loops
// for loop = repeat some code a 
//              certain amount of times

// for(let counter = 1; counter<=10; counter+=2){
//     console.log(counter);
// }
// console.log("After Exit for loop");
/*------------------------------------------------------------------*/

//### NOTE 22: BREAK and Continue

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

// for(let i=0 ; i<=100; i+=2){
//     if(i===50){
//         console.log(i);
//         break;
//     }
//     else if(i==2){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
   
// }

/*------------------------------------------------------------------*/

//### NOTE 23: NESTED LOOPS

// nested loop = a loop inside of another loop

// let symbol = window.prompt("Enter the symbol");
// let rows = window.prompt("Enter number of rows");
// let cols = window.prompt("Enter number of columns");

// for(let i = 1; i<=rows; i+=1){
//     for(let j=0; j<cols; j++){
//         document.getElementById("myPattern").innerHTML += symbol;
//     }
//     document.getElementById("myPattern").innerHTML += "<br>";
// }

/*------------------------------------------------------------------*/
//### NOTE24: FUNCTIONS

//function = Define code once, and use it many times.
//          To perform some code, call the function name.

// myFuction();
// function myFuction(){
//     let userName = "Amol";
//     let age  = 21;

//     happyBday(userName, age);
// }

// function happyBday(userName, age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday dear ",userName);
//     console.log("Happy birthday to you!");
//     console.log("You're ",age,"years old now!");
//     console.log("Happy birthday to you!");
// }

/*------------------------------------------------------------------*/
//### NOTE25: RETURN STATEMENTS

// return = returns a value back to the place
//          where you invoked a function

// let area, width, height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is : ",area);

// function getArea(width, height){
//     return width*height;
// }

/*------------------------------------------------------------------*/

//### NOTE26: TERNARY OPRATOR

// ternary operator = shortcut for an 'if/else statement'
//                      takes 3 oprands
//                      1. a condition with ?
//                      2. expression if True :
//                      3. expression if False

// condition ? exprIfTrue : exprIfFalse

// let adult = checkAge(19);
// console.log(adult);

// function checkAge(age){
//     return age>=18 ? "youre adult" : "youre not adult" ;
// }

/*------------------------------------------------------------------*/
//### NOTE 27:  var vs let

// variable scope: where a variable is accessible

// let = variables are limited to bloack scope {}
// var = variables are limited to a fucntion() {}
// global variable = is declared outside any function
// (if globle, var will CHANGE browser's window properties)
/*------------------------------------------------------------------*/

//### NOTE 28:  template  literals

// Template literals = delimited with (`)
//                      instead of double or single quotes
//                      allows embedded variables are expressions

// let userName = "Amol";
// let items = 5;
// let total = 100;

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);

/*------------------------------------------------------------------*/

//### NOTE 29:  format currency  

// toLocaleString() = returns a string with a language
//                      sensitive representation of this

// number, toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in broswer)
// 'options = objects with formatting options

//let myCurrency = 342737.89;

//myCurrency = myCurrency.toLocaleString("en-US"); // US English
//myCurrency = myCurrency.toLocaleString("hi-IN"); // Hindi
//myCurrency = myCurrency.toLocaleString("de-DE"); // standard German

//myCurrency = myCurrency.toLocaleString("en-US", {style: "currency", currency:"USD"});

//myCurrency = myCurrency.toLocaleString("hi-IN", {style: "currency", currency:"INR"});

//myCurrency = myCurrency.toLocaleString("de-DE", {style: "currency", currency:"EUR"});

//let myNum = 110;

//myNum = myNum.toLocaleString(undefined, {style: "percent"});
//myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
//console.log(myNum);

/*------------------------------------------------------------------*/

// NOTE 30: NUMBER GUESSING PROGRAM
// const answer = Math.floor(Math.random() * 10 + 1);
// let guessCount = 0;

// document.getElementById("submitBtn"),onclick = function(){

//  let guess = document.getElementById("guessField").value;
//  guessCount+=1;

//  if(guess == answer ){
//     alert(`${answer} is the Answer. Its  took you ${guessCount} guesses`)
//  }
//  else if(guess < answer){
//     alert("Too small!");
//  }
//  else{
//     alert("Too large!");
//  }
// }
/*------------------------------------------------------------------*/

// -- for Note 31: Temperature conversion program

document.getElementById("submitBtn").onclick = function(){
    let temp;

    if (document.getElementById("cBtn").checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = toCelsius(temp);
            document.getElementById("tempLabel").innerHTML = temp + "&#176;C";
    }
    else if(document.getElementById("fBtn").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFehrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "&#176;F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "select a unit";
    }

}



let temp = 32;
temp = toFehrenheit(temp);
console.log(temp);

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFehrenheit(temp){
    return temp * 9 / 5 + 32;
}

// by Amol Gahane