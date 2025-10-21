console.log("Hello world"); 

let num=8;
console.log(typeof(num));
console.log(typeof num);

let Name="riyaz";
console.log(typeof Name );

console.log(Number.MAX_SAFE_INTEGER);

// alert("Welcome to javaScript");

let uname= "riyaz";
let x =10;
console.log( typeof (x+uname));


let  a =true;
let b = true;
let c =true;

console.log(a+b+c);


 let z=!0;

 console.log(a);

 console.log(typeof z);



 let a = 10;
let b = "JavaScript";
let c = true;
let d = null;
let e;

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean
console.log(typeof d); // object (special case)
console.log(typeof e); // undefined




 

 var name = "Riyaz";
let age = 22;
const country = "India";



let name = "Riyaz";        // string
let age = 25;              // number
let isStudent = true;      // boolean
let car = null;            // null
let address;               // undefined




let person = { name: "Riyaz", age: 22, city: "Delhi" };
console.log(person.name);


let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); 


function greet() {
  console.log("Hello JavaScript");
}
greet();



let str = "42";
let num = parseInt(str);
let result = num + 8;
console.log(result);  


// calculator 
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Modulus:", a % b);


let age = 20;
if (age >= 18 && age <= 60) {
  console.log("Eligible to work");
} else if (age < 18 || age > 60) {
  console.log("Not eligible");
}
