let age = 17;
let text = "You can Not drive";

if(age<18){

    console.log(text);
}
else{
    text =" you can drive";
    console.log(text);
}

let hour =18;
if(hour>21){
    console.log("good day");
}
else{
    console.log("bad day");
}


let x =10 
let text1 =(x>11)? console.log("hello"): console.log("good");




let myval;

switch( myval){

    case 0: {  console.log("this is sunday"); }
          break;

    case 1: {console.log ("this is monday")
            break;
    }
 
      case 2: {console.log ("this is Tuesday")}
            break;



      case 3: {console.log("this is wednesday")}

      case 4: {console.log("this is  thursday")}

      case 5: {console.log("this is   friday")}
      case 6: {console.log("this is  saturday")}

      default : {console.log("this is default case")}
    }



//  5th exercise 

let Number =5;

if(Number>0){
    console.log("number is positive ");
}
else if(Number<0){
    console.log("number is negetive ");
}
else{
    console.log("number is zero");
}



///////////////
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
  console.log(num);
});


for(let i=0; i<10; i++){
    console.log(i);
}

let i=0;
while(i>10){
console.log(i)
i++;
}

let j=0;
do{
    console.log(j);
      j++;
} 
while(j>10);


let ob ={ age: 10, address:"janak puri" , type: "student"};

for(let item in ob){

 console.log(ob[item])
}

let dayNumber = 5;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}



let fruits = ["apple", "banana", "mango"];

// for(let item of fruits){
//     console.log(item);
// }

// fruits.forEach(element => {
    
//     console.log(element)
// });



// fruits.forEach(function(element){
//     console.log(element)
// });




// how we create  the normal function
function greet() {
  console.log("Hello Riyaz!");
}
greet();



/// function storing in variable 
let sum =  function( num1 ,num2){

    return num1+num2;
}

console.log(sum(5,6));



const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 5));


// one line function

const square = n => n * n;
console.log(square(4)); 



function greetUser(name) {
  return "Hello, " + name + "!";
}

console.log(greetUser("Riyaz")); // "Hello, Riyaz!"


///  clouser is created  there is code of clouser 

function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log("Current count:", count);
  };
}

const counter = createCounter();
counter(); 
counter(); 
counter(); 
