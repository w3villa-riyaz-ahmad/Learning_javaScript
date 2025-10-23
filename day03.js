let result = function(x,y){
    return x+y;
}
console.log(result(4,6));



let result1= (a, b) =>  a*b;


console.log(result1(6,5));


// function greet(name, age){
//     console.log(`Welocom ${name} your age is ${age}`);
// }
// greet("riyaz" ,10);


// console.log("the  multiplication of two no. is "+ result1(2,8) + " and you can  use this");

// const person ={};

// person.firstName= "riyaz";
// person.lastName ="ahmad";
// person.age= 23;

// console.log(person);

// // how we access the object

// console.log(person.lastName);
// console.log(person["lastName"]);


// const person1 = new Object({
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// });




const person = {
  firstName: "Riyaz",
  lastName : "Ahmad",
  id       : 56,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());  // calling  object properties as fuction

///// array practicing


// let arr= [1,2,3,4,5, "riyaz" ,"bholu", " dholu", 56.7, 44.5];

// console.log(arr[0] , arr[3], arr[9] );
// console.log(arr.length);


// let arr1 =[ ];
// arr1[0]=2;
// arr1[1]=9;
// arr1[2]=8;
// arr1[3]=6;
// arr1[4]=4;

// console.log(arr1.length);

// // how we can define the array 
// const points = new Array(40, 100, 1, 5, 25, 10);
// const points1 = [40, 100, 1, 5, 25, 10];

// let n=points.length;
// for(let i=0; i<n; i++){
//     // console.log(points[i]);
// }


// const myarr= new Array(3,4,5,6,766,);
// console.log(myarr);

// const myarr1 =new Array(40);// it does not meant that array has one element it means 
//                                // array is created with 40 undifined element you can add  element;

// const myarr2 =[40]; // it means that array has 1 element 40


// const ri=["name", "riyaz" , "ahmad", "name"];
// console.log(ri.toString());

//   ri.pop(); // it rempve last element  of array

// console.log(ri.toString());

// ri.push("gajal"); // push is use to add element in the last
// console.log(ri.toString());

// ri.shift(); // remove the first  element and  shift all element from starting 
// console.log(ri.toString());

// ri.unshift("bholu"); // unshift method add the element in begning and shift all element after that elelment
// console.log(ri.toString());



const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);



const unmae=[" riyaz " , "ahmad", "bholu" , "lala","lal"];
const age=[12,14,15,16,17,18];
const res= unmae.concat(age);
console.log(res);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3, unmae ,age); // i can contact multiple array using concat

console.log(myChildren);


const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // it combine the multidimentional array to 1D aray
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(0, 1); // it means 0 se 1 tk ki value hata do baki rehne do 


let nums = [2, 4, 6, 8];
let doubleNums = nums.map(num => num * 2);
console.log(doubleNums); // [4, 8, 12, 16]   //   it return new array  based on our condition 
                                          

let nums1 = [1, 2, 3, 4, 5, 6];
let evens = nums1.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]   it  filter and give specific condition  value 

console.log(nums1.indexOf(3));
console.log(nums1.includes(1));





