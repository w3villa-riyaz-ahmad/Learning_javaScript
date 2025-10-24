

let s1 = "Ajay"
let s2 = new String("Ajay");

// console.log(s1 == s2); 
// console.log(s1 === s2);
// console.log(s1.localeCompare(s2)); //.means they are equal lexicographically 


// let name1="riyaz";
// let name2 ="ahmad";
// let name3 =`hello ${name1+name2}`;
// console.log(name3);



// let str ="javaScript is the best language is ";
// console.log(str.slice(0,5)); // it give 0to 4 not include the 5th element
// console.log(str.slice(4));// it give me  4to all the elemet  including 4th element

// console.log(str.replace("is" , "of"));  // it replace the  first occurence of that match
// console.log(str.replace(/is/g ,"of")); // it replace all the element available in the String


// console.log(str.split(" "));


// let str1 = "riyaz";
// let str2 = "DELHI";
 
// console.log(str1.toUpperCase());
// console.log(str2.toLowerCase());
 
// let msg = "   Hello JS   ";
// console.log(msg.trim()); 

// console.log(msg.includes(" JS ")); // it means  the JS is available in  String or not 
// console.log(msg.includes("llo")); // i can search half word it shows true 



// let str = "banana";
// console.log(str.lastIndexOf('a'));
// console.log(str.indexOf('a'));
// console.log(str.length);


// const arr=[21 ,4,6,6,7,76,5];
// console.log(arr.length);

// let uname = "Riyaz";
// console.log(uname[0]); // R
// console.log(uname.charAt(2)); // y


// let first = "Hello";
// let second = "World";
// console.log(first.concat(" my " , second)); // "Hello World"


// let paragraph = `
// This is line 1
// This is line 2
// This is line 3
// `;
// console.log(paragraph);  // by `` backtick we can write multi line string and outpur will come in multiline 


// let fullName = "Riyaz Ahmad";
// let firstName = fullName.slice(0,5);
// let part = fullName.substring(7,9); // it include the 7 but exclude the 9 index ;


// console.log(firstName);
// console.log(part);



// let sentence = "I am learning Java";
// let changed = sentence.replace("Java", "JavaScript");
// console.log(changed); 



// let greet = "Good morning";
// let someone="riyaz";
// let full = `${greet},${someone} how are you today`;
// console.log(full);


//  console.log(greet.at(2));
//  console.log(greet[2]);



//  let sentence = "   JavaScript is amazing and powerful!   ";

// console.log(sentence.trim());               // remove spaces
// console.log(sentence.toUpperCase());        // all caps
// console.log(sentence.slice(3, 13));         // "JavaScript"
// console.log(sentence.replace("amazing", "awesome")); // replace
// console.log(sentence.includes("powerful")); // true
// console.log(sentence.split(" "));           // convert to array

// let name1 = "Riyaz";
// console.log(`Hey ${name1}, i am learning JavaScript!`);

// let student = {
//   name: "Riyaz",
//   age: 23,
//   grade: "A"
// };


// let s={
//     l : "you are  arrest",
//     m: "message",
//     n: "nahi"
// }
// console.log(s);


// let car = new Object();
// car.brand = "Maruti";
// car.model = "Model S";
// car.price = 80000;


// let abc =new Object();

// abc.brand ="my brand";
// abc.age="dont ask age";
// abc.text =" this is message";

// console.log(abc);



// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let s3 = new Student("Riyaz", 21);
// console.log(s3);


// function  bus( model, type){
//     this.model= model;
//     this.type=type;

// }
// let b = new bus(101, "luxury");
// console.log(b);

// console.log(b.type);
// console.log(b["model"]);



// let obj = {
//     myid:101,
//     bookName: "Nothing",
//     BookPrice: 300,
//     barcode: 345
// }

// console.log(obj)
// delete obj.barcode;

// console.log(obj)

// let student = {
//   name: "Riyaz",
//   marks: {
//     math: 90,
//     java: 85,
//     javaScript: 80
//   }
// };

// console.log(student.marks.math);


// // object Loop 
// for (let key in student) {
//   console.log(key + ": " + student[key]);
// }

// how ot iterate inner  object inside the  object

// for (let key in student) {
//   if (typeof student[key] === "object") {
//     console.log(key + ":");
//     for (let subKey in student[key]) {
//       console.log("  " + subKey + ": " + student[key][subKey]);
//     }
//   } else {
//     console.log(key + ": " + student[key]);
//   }
// }



// let keys = Object.keys(student);
// let values = Object.values(student); 
// let entries = Object.entries(student);

// console.log(keys);
// console.log(values);
// console.log(entries);


let s= {
    a:"A",
    b: "B",
       c: "C"
}



// let obj = {
//     myid:101,
//     bookName: "Nothing",
//     BookPrice: 300,
//     barcode: 345
// }

// console.log(obj)
// delete obj.barcode;

// console.log(obj)

// let student = {
//   name: "Riyaz",
//   marks: {
//     math: 90,
//     java: 85,
//     javaScript: 80
//   }
// };

// console.log(student.marks.math);

 
// let s5 ={...s};
// //console.log(s5);


let extra = { city: "Delhi", grade: "A" };
let merged = { ...s, ...extra };
//console.log(merged);


// let a= {...s, merged}
// console.log(a);



// console.log("name" in student); 
// console.log(student.hasOwnProperty("grade")); 



// let user = {
//   name: "Riyaz",
//   age: 22,
//   school:"SBV",
//   greet: function () {
//     console.log(`Hello ${this.name}, welcome!`);
//   }
// };

// user.greet();

// console.log(Object.keys(user));
// console.log(Object.values(user));
// Object.entries(Object.entries(user));


// console.log(user);
// delete user.school;
// console.log(user);


let student = {
  uname: "Riyaz",
  age: 21,
  grade: "A"
};
console.log(student);


student.isPassed = true;

delete student.grade;

console.log(student);

console.log(student.age);
console.log(student["uname"]);
 


let obj1 = {name: "Riyaz" , hobbies :"nothing", game: "cricket"};
let obj2 = obj1;
obj2.name = "Ahmad";
console.log(obj1.name); // Ahmad

for( let ab in obj1){
    console.log( ab +":"+ obj1[ab]);
    
}

console.log(obj1["hobbies"]);
