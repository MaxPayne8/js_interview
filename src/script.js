////Classes In Js , cannot define name and rollNo directly-------------------------------->

//Two sum problem----------->

// const twoSum = (arr, target) => {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[target - arr[i]] != undefined) {
//       return [i, obj[target - arr[i]]];
//     } else {
//       obj[arr[i]] = i;
//     }
//   }
//   return null;
// };

// console.log(twoSum([2, 8, 10, 3, 5, 12], 10));

// class student  {
// constructor(name , rollNo)
// {
//   this.name = name ;
//   this.rollNo = rollNo;
// }
//This is added in es6 , previousy we had to do create a func then use .prototype to add a func to it
//actually class keyword was introduced in es6
// printFunc(){
// console.log(this.name+"'s roll number is "+this.rollNo)}

// }

// const Rohan = new student("Rohan", 21);
// Rohan.greetStudent();

//Es 5 way------------------->
// function student(name) {
//   this.name = name;
// }

// student.prototype.greetStudent = function () {
//   console.log("Hello", this.name);
// };

// const stu1 = new student("Zatin");
// stu1.greetStudent();

// function counter() {
//   var count = 0;
//   this.incCount = function () {
//     count++;
//     console.log(count);
//   };
//   this.decCount = function () {
//     count--;
//     console.log(count);
//   };
// }

// const counter1 = new counter();
// counter1.incCount();
// counter1.incCount();
// counter1.incCount();

////Objects in JS --------------------------------------------------->

////Call Method, Apply  , Bind Method ------------------------------>

// let student1 = {
//     name: "Zatin",
//     rollNo: 8,
//   }

// function printFunc(subject,level){
//         console.log(this.name+" "+this.rollNo+" "+subject+" "+level) }

// let student2 ={
//     name:"Sanju",
//     rollNo:88
// }

// printFunc.call(student1,"React.js","ADVANCE") // Function Borrowing
// printFunc.apply(student2,["Node.js","MODERATE"]) // Function Borrowing

// let newPrintFunc = printFunc.bind(student1,"React.js","ADVANCE") // Function Copying
// console.log(newPrintFunc)
// newPrintFunc()

// function printFullName(fName, lName) {
//   console.log(this.fName, this.lName);
// }

// const stu = {
//   fName: "Zatin",
//   lName: "Pandey",
// };

// Function.prototype.myBind = function (...args) {
//   const args1 = args.slice(1);
//   const obj = this;
//   return function () {
//     obj.apply(args[0], args1);
//   };
// };

// Function.prototype.myCall = function (...args) {
//   const obj = this;
//   obj.apply(args[0], args.slice(1));
// };

// Function.prototype.myApply = function (...args) {
//   //[ obj , [arr]]
//   const obj = this;
//   obj.call(args[0], ...args.slice(1));
// };
// printFullName.call(stu);
// printFullName.myApply(stu);

// printFullName.myCall(stu);

// const newFullNameFunc = printFullName.myBind(stu);
// newFullNameFunc();

//// Polyfill for bind -------------------------------------------------->

// let student = {
//     name : "Zatin",
//     rollNum: 8
// }
// let student1 = {
//     name : "Sanju",
//     rollNum: 9
// }

// function printInfo(city,level){
//     console.log(this.name, "-->", this.rollNum,"-->",city,"-->",level)
// }

// const newPrintInfo = printInfo.bind(student);
// newPrintInfo("Moderate","Haldwani");

////now i want to create a myBind function such that it has the bind functionality ------------------------>

// Function.prototype.myBind = function(...args){
//     let obj = this;
//     let params = args.slice(1)
//     return function(...args2){
//         obj.apply(args[0],[...params, ...args2] )

//     }
// }

// const newPrintInfo1 = printInfo.myBind(student1 ,"Expert")
// newPrintInfo1("Haldwani");

//// Function currying--------------------------------->

////By Bind Method ------------------------------------>

// function multiply(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(5)

// let multiplyByThree = multiply.bind(this,3);
// multiplyByThree(5)

////Using Closures ---------------------------------------------->

// function multiply(x) {
//   return function (y) {
//     return x * y;
//   };
// }
// const multiplyByTwo = multiply(2);
// console.log(multiplyByTwo(6));

// let multiply =(x)=>{
//     return (y)=>console.log(x*y);
// }

// let multiplyByTwo = multiply(2);
// multiplyByTwo(5)

// let multiplyByThree = multiply(3);
// multiplyByThree(5)

//// Prototypal Inheritance and Prototype ----------------------------------------->

//// An object containing all the properties are binded to a method by using the __proto__ object.
//// so if we say Array.prototype , its an obj , and Object.prototype is also an object conating the
//// properties for object , and Object.prototype.prototype is null which is the end of prototype chain
//// so every thing in js is basically an object

// let student ={
//     name:"Zatin",
//     rollNum: 8,
//     printInfo : function(){
//         console.log(this.name,this.rollNum)
//     }
// }

// let student1 ={
//     name: "Ranbir"
// }

////here student1 get all the properties and methods of student now by setting __proto__-------------->

// student1.__proto__ = student;

// console.log(student1.printInfo()) //(Ranbir , 8)

////Map, filter , reduce ---------------------------------------------------------------->

// const studentsArr = [
//   { name: "zatin", rollNum: 22, location: { pincode: 123 } },
//   { name: "sanju", rollNum: 23, location: { pincode: 456 } },
//   { name: "raju", rollNum: 24, location: { pincode: 123 } },
//   { name: "anuj", rollNum: 25, location: { pincode: 789 } },
// ];

// const byPinCodeObj = {};

// studentsArr.map((stu) => {
//   if (byPinCodeObj[stu.location.pincode] == undefined)
//     byPinCodeObj[stu.location.pincode] = [];
//   byPinCodeObj[stu.location.pincode].push(stu);
// });
// console.log(byPinCodeObj);

// const getByPincode =(students)=>  students.reduce((acc,student)=>{
//     const pincode = student.location.pincode;
//     if(!acc[pincode]){
//         acc[pincode]=[];
//     }
//         acc[pincode].push(student)
//     return acc;
// },{})

// console.log(getByPincode(studentsArr))

////Solving var scope problem with ifeee and Closures----------------------------->

////can be solved using let instead of var but...............>

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   (function(i){
//       btn.addEventListener('click', function() {
//     console.log(i);  // All buttons will log '5' because they refer to the same 'i' ,here we use ifee because
//   });                // the function gets executed each time and the scope of i is cretead
//   })(i)

//   document.body.appendChild(btn);
// }

// for (var i = 0; i < 5; i++) {
//   (function(i){var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);})(i)

// }

////IIFE (Immediately Invoked Function Expression): The IIFE (function(i) { ... })(i);
// creates a new scope for each iteration of the loop.

////Function Argument: The value of i is passed to the IIFE as an argument, and within the IIFE,
//// i is a new local variable, separate from the i in the outer loop.

////Event Listener: Each button’s click event handler has access to the correct i
// value due to the new scope created by the IIFE.

////This ensures that each button logs its corresponding i value when clicked.

//// reverse each word of a sentence--------------------------------------------->
//// split converts string into array and join converts array into string--------------------->

// const revSentence = (str) =>{

//     const revString = str.split(" ").map((word)=>word.split("").reverse().join(""))
//     return revString.join(" ");

// }

// console.log(revSentence("I am Zatin Pandey"))

//// How to check if an obj is an array because...---------------------------------->

////console.log(typeOf []) -------------------------> Object
////console.log(typeOf {}) -------------------------> Object

// const isObj = (element) =>{
//     return Array.isArray(element)
// }

// console.log(isObj([1,2]))
// console.log(isObj(1))
// console.log(isObj({name:"zatin"}))

//// Empty an Array ----------------------->

// const arr =[1,2,3,4,5]
// const length = arr.length;

// for(let i=0;i<length ;i++){
//     arr.pop()
// }
// console.log(arr)

// arr.splice(0,arr.length);
// console.log(arr)

// arr.length =0;
// console.log(arr)

//// Check number is Integer ----------------------->

// const isInteger = (num) =>  Number.isInteger(num);
// console.log(isInteger(10));

// const isInteger =(num) => num % 1 === 0;
// console.log(isInteger(10.5));

//// Duplicate an Array------------------------------->

// const duplicateArray = (arr) =>{
//     const dupArr = [...arr , ...arr];
//     return dupArr;
// }
// console.log(duplicateArray([1,2,3]))

// const duplicateArray = (arr) =>{
//     const dupArr = arr.concat(arr)
//     return dupArr;
// }
// console.log(duplicateArray([1,2,3]))

////Reverse a Number/check Palindrome Number----------------------------->

// const revNum = (num) =>{
//     const reversdNum = num.toString().split("").reverse().join("");
//     return +reversdNum;// converted back to num
// }
// console.log(revNum(123));//321

// const revNum = (num) =>{
//     var result =0 ;
//     while(num > 0){
//         result = result*10 + num % 10;
//         num=Math.floor(num/10);
//     }
//     return result;

// }
//  console.log(revNum(123));//321

////Check string palindrome --------------------------->

// const isStrPalindrome = (str) =>{
//     const revStr = str.split("").reverse().join("");
//     return revStr===str;
// }

// console.log(isStrPalindrome("aacaa"))

//// Passed string in alphbetical order------------------------>

// const alphaOrder = (str) =>{

//     const revStr = str.split("").sort().join("");
//     return revStr;
// }

// console.log(alphaOrder("zyx"));

//// Convert first letter to uppercase of each word of string ------------------------------>

// const convertUpperCase = (str)=> {

//     const capFirtsLetters = str.split(" ").map((word)=>
//           (word[0].toUpperCase() + word.slice(1))

//     ).join(" ");
//     return capFirtsLetters
// }

// console.log(convertUpperCase("i am zatin pandey"));// I Am Zatin Pandey

//// Write a function to find a number of occurernces of each letter in a word--------------->

// const letterOccuernces = (str) => {
//   let obj = {};

//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]] = (obj[str[i]] || 0) + 1;
//   }
//   for (key in obj) {
//     console.log(key, ":", obj[key]);
//   }
//   console.log(obj);
// };

// letterOccuernces("abcccddda");

// const letterOccuernces=(str) =>{
//     let obj ={};

//   str.split("").forEach((letter)=>{
//       if(obj.hasOwnProperty(letter)){
//           obj[letter]++;
//       }else{
//           obj[letter] =1;
//       }
//   })
//   return obj;

// }

// console.log(letterOccuernces("abcccddda"))

//// Add all elemets of array------------------------>

// const getSum = (arr) => {
//   return arr.reduce((acc, el) => acc + el, 0);
// };

// console.log(getSum([1, 2, 3, 10]));

//// In frontend getting OS---------->

// function getOS() {
//   const userAgent = window.navigator.userAgent; // Provides a string that contains details
//   //about the browser, operating system, and device.
//   const user = window.navigator.platform; // Specifies the operating system on which the browser is running.
//   let os = "Unknown OS";

//   if (userAgent.indexOf("Win") !== -1) os = "Windows";
//   else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
//   else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
//   else if (userAgent.indexOf("Android") !== -1) os = "Android";
//   else if (userAgent.indexOf("like Mac") !== -1) os = "iOS";

//   return os;
// }

// console.log("Your OS: " + getOS());

////In node--------------------------------->
// const os = require('os');

//// Get the OS type
// const osType = os.type(); // Returns 'Linux', 'Darwin' (macOS), or 'Windows_NT'

// console.log("Your OS: " + osType);

// The `window` object is one of the core components provided by the browser API,
// representing the browser window or tab in which the code is running.
// It serves as the global object for JavaScript in the browser environment,
// meaning all global variables, functions, and objects are attached to it. Here are some of its famous use cases:

// ### 1. **Global Object Access**
//   - Since `window` is the global object, all global variables and functions are
//    properties of the `window` object.
//   ```javascript
//   var myVar = "Hello";
//   console.log(window.myVar); // Outputs: "Hello"
//   ```

// ### 2. **DOM Manipulation**
//   - The `window.document` property gives access to the Document Object Model (DOM),
// allowing developers to interact with the HTML structure.
//   ```javascript
//   window.document.getElementById('myElement').innerText = 'Hello World!';
//   ```

// ### 3. **Browser Information**
//   - The `window.navigator` object provides information about the browser (e.g., name, version, OS).
//   ```javascript
//   console.log(window.navigator.userAgent); // Outputs user agent string
//   ```

// ### 4. **Control of Browser History**
//   - The `window.history` object allows navigation through the browser history programmatically.
//   ```javascript
//   window.history.back();   // Go back one page in history
//   window.history.forward(); // Go forward one page in history
//   ```

// ### 5. **Local Storage and Session Storage**
//   - The `window.localStorage` and `window.sessionStorage` properties provide storage
//  mechanisms for persisting data on the client side.
//   ```javascript
//   window.localStorage.setItem('key', 'value');
//   const value = window.localStorage.getItem('key');
//   ```

// ### 6. **Timers and Intervals**
//   - The `window.setTimeout` and `window.setInterval` methods allow scheduling code
//  execution after a delay or at regular intervals.
//   ```javascript
//   window.setTimeout(() => alert('Hello after 3 seconds!'), 3000);
//   ```

// ### 7. **Window Size and Position**
//   - The `window.innerWidth` and `window.innerHeight` properties provide the dimensions of the browser window.
//   ```javascript
//   console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
//   ```

// ### 8. **Event Handling**
//   - The `window` object can listen for events like `resize`, `scroll`, `load`, or `unload`, and act on them.
//   ```javascript
//   window.addEventListener('resize', () => {
//      console.log('Window resized!');
//   });
//   ```

// ### 9. **Opening and Closing New Windows**
//   - The `window.open` and `window.close` methods allow opening and closing browser windows or tabs.
//   ```javascript
//   const newWindow = window.open('https://example.com', '_blank');
//   newWindow.close(); // Closes the new tab
//   ```

// ### 10. **Handling Alerts, Prompts, and Confirmations**
//   - The `window.alert`, `window.prompt`, and `window.confirm` methods are used to
//interact with users via popups.
//   ```javascript
//   window.alert('This is an alert!');
//   const userInput = window.prompt('Enter something:');
//   const isConfirmed = window.confirm('Are you sure?');
//   ```

// These are just a few of the many use cases of the `window` object, which acts as
//the gateway to various browser-specific functionalities.

// Here’s a list of common falsy values in JavaScript:-------------->

// false
// 0
// "" (empty string)
// null
// undefined
// NaN (Not-a-Number)

// Let's look at an example that demonstrates how the JavaScript execution context stack works:---->

// ```javascript
// // Global Execution Context (GEC) starts here

// function firstFunction() {
//   console.log("Inside firstFunction");
//   secondFunction(); // Call secondFunction
// }

// function secondFunction() {
//   console.log("Inside secondFunction");
//   thirdFunction(); // Call thirdFunction
// }

// function thirdFunction() {
//   console.log("Inside thirdFunction");
// }

// console.log("Start of the program");

// firstFunction(); // Call firstFunction

// console.log("End of the program");

// ### Step-by-step breakdown:

// 1. **Global Execution Context (GEC) created**:
//   - The global code is executed first. Functions `firstFunction`, `secondFunction`,
//    and `thirdFunction` are defined but not yet called.
//   - The program starts with the global context, and `console.log("Start of the program")`
//  is executed. The message is printed.

// 2. **`firstFunction()` is called**:
//   - When `firstFunction()` is called, a new **function execution context** is pushed
//    onto the stack for `firstFunction`.
//   - Inside `firstFunction`, `console.log("Inside firstFunction")`
//    is executed, and the message is printed.

// 3. **`secondFunction()` is called**:
//   - Now, `secondFunction()` is called from inside `firstFunction`.
//   - A new **function execution context** for `secondFunction` is created and pushed onto the stack.
//   - Inside `secondFunction`, `console.log("Inside secondFunction")` is executed, and the message is printed.

// 4. **`thirdFunction()` is called**:
//   - From within `secondFunction`, `thirdFunction()` is called.
//   - A new **function execution context** is created for `thirdFunction`, and it is pushed onto the stack.
//   - Inside `thirdFunction`, `console.log("Inside thirdFunction")` is executed, and the message is printed.
//   - After finishing `thirdFunction`, its execution context is **popped off** the stack.

// 5. **Returning to `secondFunction`**:
//   - After `thirdFunction` finishes, control returns to `secondFunction`.
//   - The `secondFunction` context is popped off the stack.

// 6. **Returning to `firstFunction`**:
//   - Once `secondFunction` completes, control goes back to `firstFunction`.
//   - The `firstFunction` execution context is popped off the stack.

// 7. **Global context resumes**:
//   - After `firstFunction` is done, the global context resumes.
//   - `console.log("End of the program")` is executed, and the message is printed.
//   - The global context finally finishes, and the stack becomes empty.

// ### Console Output:

// ```
// Start of the program
// Inside firstFunction
// Inside secondFunction
// Inside thirdFunction
// End of the program
// ```

// This example shows how the execution context stack works, with each function's
// context being pushed onto the stack when the function is called and popped off
// once the function finishes execution.

//// Add only the non-strings elements in an array---------------------->

// const arr = [2, 4, 8, "Hell's", 16, "Kitchen"];

// const sum = arr.reduce((acc, el) => {
//   typeof el == "number" ? (acc = el + acc) : (acc += 0);
//   return acc;
// }, 0);
// console.log(sum);

// const addOnlyNumbs = (arr)=>{
//     const sum = arr.reduce((acc,num)=>{
//         if(typeof num === 'number'){
//             acc+=num;
//         }
//         return acc;

//     },0)
//     return sum;

// }

// console.log(addOnlyNumbs(arr));

// const addOnlyNumbs = (arr)=>{
//     var sum =0;
//     arr.forEach((el)=>{
//         if(typeof el === 'number') sum+=el
//     })
//     return sum;
// }
// console.log(addOnlyNumbs(arr));

// const addOnlyNumbs = (arr) => {
//   var sum = 0;
//   for (let el of arr) {
//     ////here for(el in obj) ---->Used for iterating over Obj keys
//     if (typeof el === "number") sum += el;
//   }
//   return sum;
// };

// console.log(addOnlyNumbs(arr));

////Slice and Splice--------------------------->

//const arr = [1, 2, 3, 4, 5, 6];
// const arr1 = [1,2,3,4,5,6];
// const arr2 = [1,2,3,4,5,6];

// console.log(arr.slice(1,3)); //// taking slice out , elements from index 1 to 2..
// console.log(arr.slice(1)); //// taking slice out from index 1 to end..
// console.log(arr.slice(-1)); //// taking last element out
// console.log(arr.slice(-3, -1)); //// taking out slice from -3 index(third last index) to -2
// console.log(arr1.splice(0,3));//// from index 0 remove three elements from arr1 permanently
// console.log(arr1.splice(2,3,8,9,10))//// remove 3 elements starting from index 2 and add 8,9,10 in that places
// console.log(arr2.splice(-3,2)) // remove 2 elements from index -3.

////Loop an array of objs and remove objs that dont have gender male------------->

// let arr = [{name: "Zatin" , gender :"male"},{name: "Neha" , gender :"female"},
// {name: "Nilesh" , gender :"male"},{name: "Pranjal" , gender :"male"},{name: "Arnav" , gender :"chakka"},]

// const getMales = (arr)=>{
//     const maleArr =[]
//  arr.map((obj)=>{
//      if(obj.gender==="male"){
//         maleArr.push(obj) //// id = indexOf(obj ) ; obj.splice(id,1)---->if tranforming the og array needed
//      }
//  })
//  return maleArr;
// }

// console.log(getMales(arr));
////console.log(arr.filter((obj)=>obj.gender==="male")) ---------->Using Filter🤣

//// Write a function that returns the typeOf argument passed-------------->

// const argType = (arg) =>{
//     const typeArg = typeof arg;
//     if(typeArg === 'object'){
//         if(Array.isArray(arg))
//             return ('array')

//     }
//     return typeArg;

// }

// console.log(argType(function(){}))

//// Write a function that returns the first n elements------------------------>

// const getFirstnElements =(arr ,n) =>{
//      return (arr.slice(0,n))
//     }

// console.log(getFirstnElements([1,2,3,4,5],4))

// const getLastnElements =(arr ,n) =>{
//      return (arr.slice(arr.length-n,arr.length+1))// can include a check if n > arr.length
//     }

// console.log(getLastnElements([1,2,3,4,5],2))

//// return most frequent item of array---------------->

// const mostFreqElement = (arr)=>{
//     const obj ={};
//     arr.forEach((el)=>{
//         obj[el]= (obj[el]||0) +1 // can also use obj.hasOwnProperty(el) and then store accordingly...
//      })

//      let maxFreq =0;
//      let maxFreqItem;
//      for(let key in obj){
//          if(obj[key]>maxFreq)
//             {  maxFreq = obj[key];
//                 maxFreqItem = key;
//             }
//      }
//      return maxFreqItem
// }

// console.log(mostFreqElement([1,2,1,2,1,2,9,9,9,9]))

////const , let , var ----------------------------------->
//{
//  console.log(a) // cant access let before decalartion
// console.log(b) //  cant access const before decalartion
// console.log(c) // can acess as in the memory creation phase before the execution phase,const are initialized
// with undefined stored in window obj, while let and const are stored in special memory
//     let a=10;
//     const b=10;
//     var c =10;

// {
//     let a=20;
//     const b=20;
//     var c =20;
// console.log(a) // here first it checks that a is present in this block , if not it check in its lexical scope
// console.log(b)    //----------------------------------------------------------------------------------
//  console.log(c) // ------------------------------------------------------------------------------------

//  }

//   console.log(a)// inner block a cant be accessed
//   console.log(b)// inner block b cant be accessed
//   console.log(c)// c got overshadowed here by redecalration in inner block due to functionn scope

// }

//// Gobal Variables-------------------------------------------------->

// const shuffleArr = () => {
//   x = 10;
//   console.log(x);
// };

// shuffleArr();
// console.log(x);

// The reason it got executed without error is because x was implicitly declared as a global variable.
//Here's the breakdown:

// Key Points:

// Implicit Global Declaration: In JavaScript, if you assign a value to a variable without using var,
//let, or const, the variable is automatically declared as a global variable (if it's not in strict mode).

// When you write x = 10;, since there is no let, const, or var, JavaScript treats x as a global variable.

//This is why console.log(x) outside the function works and doesn't throw a ReferenceError.

// Global Scope: Once x is assigned a value inside shuffleArr, it's available globally in your entire program,
// including outside of the function.

// No Strict Mode: In non-strict mode, JavaScript allows this behavior (implicit global variable declaration).

// If you were in strict mode ('use strict';), it would throw an error because you're
//trying to assign to an undeclared variable.

//// Shuffle Array--------------------------------------------------->

// const shuffleArray = (arr) => {

//     for(let i=0;i<arr.length ;i++){
//         let newIndex;

//         do{
//               newIndex = Math.floor(Math.random()*(arr.length))  ;
//         }while(newIndex===i);

//       // newIndex = Math.floor(Math.random()*(arr.length)); ----> Directly w/o checing if the newIndex is same

//         let temp = arr[i];
//         arr[i] = arr[newIndex];
//         arr[newIndex] = temp;

//  }
//   return arr;
// }

// console.log(shuffleArray([1,2,3,4,5]))

// var getRandomNum = Math.random();//randon num between 0,1(excluded)
//  getRandomNum = Math.floor((Math.random()*10)) // random num between 0 to 10(excluded)
//  getRandomNum = Math.floor(Math.random()*(max-min+1))+min  //3, 9// ((0.01 -> 0.99)(9-3+1)) --> [0,6] + 3 => [3,9]

//     console.log(getRandomNum)

//// Union of two arrays---------------------------------------------->

// console.log([...new Set([...[1, 2, 3, 4], ...[4, 5, 6]])]);

// const unionArray = (arr1 , arr2) =>{

//     let obj ={};
//     for(let i =0; i<arr1.length;i++)
//     {
//         obj[arr1[i]] = (obj[arr1[i]] || 0) + 1;
//     }

//     for(let i =0; i<arr2.length;i++)
//     {
//         obj[arr2[i]] = (obj[arr2[i]] || 0) + 1;
//     }
//     const uninfiedArr =[];
//     for(let key in obj){
//         uninfiedArr.push(+key);// uninfiedArr.push(Number(key));
//     }

//     return uninfiedArr;
// }

//// Using sets -------------------------->

// const unionArray=(arr1,arr2)=>{
//     const uninfiedArr = [...new Set([...arr1, ...arr2])];// [...new Set(arr1.concat(arr2))]
//     return uninfiedArr
// }

// console.log(unionArray([8,1,2,3,4],[4,5,1,6,7,10,11,12]))

//Rest Operator-------------------------->

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(4, 5));    // Output: 9

// const obj = { name: "zatin", rollNum: 8, city: "haldwani" };
// const { name, ...restProps } = obj;
// console.log(restProps);

//// Spread Operator uses------------------->

// const numbers = [1, 2, 3];
// Math.max(...numbers);  // Equivalent to Math.max(1, 2, 3)

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];  // Creates a shallow copy of arr1

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const merged = { ...obj1, ...obj2 };  // { a: 1, b: 2 }

// const arr = [1, 2, 3];
// const [first, second] = arr;  // first = 1, second = 2

////Objectss----------------------------------->

// // Object literal -------------------->
// const obj = { key1: 'value1', key2: 'value2' };

// // Using new Object() ----------------------->
// const obj2 = new Object();
// obj2.key1 = 'value1';

// const obj = { name: 'Zatin', age: 25 };

// console.log(obj.name);      // Dot notation: 'Zatin'
// console.log(obj['age']);    // Bracket notation: 25

// const obj = { name: 'Zatin' };

// // Add a new property ----------------->
// obj.age = 25;

// // Update an existing property----------------------->
// obj.name = 'Zatin Pandey';

// const obj = { name: "Zatin", age: 25 };
// const { age, ...remObj } = obj; //-->One way by using rest operator
// console.log(remObj);
// delete obj.age;
// console.log(obj);  // { name: 'Zatin' }

// const obj = { name: 'Zatin', age: 25 };

// console.log('name' in obj);               // true
// console.log(obj.hasOwnProperty('age'));   // true
// console.log(obj.hasOwnProperty('salary')); // false

// const obj = { name: 'Zatin', age: 25 };

// // Using for...in loop ----------------------------->
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// // Using Object.keys() -------------------------------------->
// Object.keys(obj).forEach(key => {
//   console.log(key, obj[key]);
// });

// // Using Object.values() ------------------------------------------>
// Object.values(obj).forEach(value => {
//   console.log(value);
// });

// // Using Object.entries() to get key-value pairs ------------------------------------>
// Object.entries(obj).forEach(([key, value]) => {
//   console.log(key, value);
// });

// const obj1 = { name: 'Zatin' };
// const obj2 = { age: 25 };

// // Using Object.assign() ----------------------------------------->
// const merged1 = Object.assign({}, obj1, obj2);

// // Using spread operator ------------------------------------>
// const merged2 = { ...obj1, ...obj2 };

// console.log(merged1); // { name: 'Zatin', age: 25 }
// console.log(merged2); // { name: 'Zatin', age: 25 }

// const obj = { name: 'Zatin', age: 25 };

// // Using Object.assign() --------------------------------------->
// const clone1 = Object.assign({}, obj);

// // Using spread operator --------------------------------->
// const clone2 = { ...obj };

// console.log(clone1);  // { name: 'Zatin', age: 25 }
// console.log(clone2);  // { name: 'Zatin', age: 25 }

// const obj = { name: 'Zatin', age: 25 };

// // Destructuring -------------------------------->
// const { name, age } = obj;

// console.log(name);  // 'Zatin'
// console.log(age);   // 25

// const obj = { name: 'Zatin', age: 25 };

// console.log(Object.keys(obj));    // ['name', 'age']
// console.log(Object.values(obj));  // ['Zatin', 25]
// console.log(Object.entries(obj)); // [['name', 'Zatin'], ['age', 25]]

// const obj = {};
// Object.defineProperty(obj, 'name', {
//   value: 'Zatin',
//   writable: false,    // Can't modify
//   enumerable: true,   // Shows in iteration
//   configurable: false // Can't delete or change property
// });

// console.log(obj.name); // 'Zatin'

// const getLargestThreeNumber = (arr) =>{------------------------------->
//     let max1 =-Infinity;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>max1){
//             max1= arr[i]
//         }

//     }

//     arr.splice(arr.indexOf(max1),1);

//     let max2 =-Infinity;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>max2){
//             max2= arr[i]
//         }

//     }

//     arr.splice(arr.indexOf(max2),1);

//     let max3 =-Infinity;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>max3){
//             max3= arr[i]
//         }

//     }

//     return [max1,max2,max3]
// }

// console.log(getLargestThreeNumber([1,2,3,4,5,6,10]))

////More optimized way--------------------------------->

// const getLargestThreeNumber = arr => {
//   let max1 = -Infinity;
//   let max2 = -Infinity;
//   let max3 = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max1) {
//       max3 = max2;
//       max2 = max1;
//       max1 = arr[i];
//     } else if (arr[i] > max2) {
//       max3 = max2;
//       max2 = arr[i];
//     } else if (arr[i] > max3) {
//       max3 = arr[i];
//     }
//   }
//   return [max1, max2, max3];
// };
// console.log(getLargestThreeNumber([1, 2, 3, 4, 5, 6, 10]));

//// some array methods ----------------------------------->

// let arr = [1, 2, 3];
// arr.push(4, 5); // [1, 2, 3, 4, 5]

// let arr = [1, 2, 3];
// arr.pop(); // 3

// let arr = [1, 2, 3];
// arr.shift(); // 1

// let arr = [1, 2, 3];
// arr.unshift(0); // [0, 1, 2, 3]

// let arr = [1, 2, 3];
// let hasEven = arr.some(x => x % 2 === 0); // true

// let arr = [2, 4, 6];
// let allEven = arr.every(x => x % 2 === 0); // true

// let arr = [1, 2, 3];
// let found = arr.find(x => x > 1); // 2

// let arr = [1, 2, 3];
// arr.indexOf(2); // 1

// let arr = [1, 2, 3];
// arr.includes(2); // true

// let arr = [1, 2, 3];
// arr.forEach(el => console.log(el)); // 1 2 3

// let arr = [1, 2, 3];
// let index = arr.findIndex(x => x > 1); // 1

// let arr = [1, 2, 3];
// arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

////Balanced Brackets using array in Js------------------------>

// const isBalanced = (str) => {

//     const arr =[];
//     for(let i =0 ; i<str.length ; i++){
//         if(str[i] == '[' || str[i] == '{' || str[i] == '('   ){
//             arr.push(str[i]);
//         }
//         else{
//             if(!arr.length) return false;
//             else if((str[i] == ']' && arr.slice(-1) =='[' )|| (str[i] == '}' &&arr.slice(-1)=='{' )|| (str[i] == ')' && arr.slice(-1)=='(') ){
//                 arr.pop()
//             }
//             else{
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(isBalanced('[{([])}]'));

////Event bubbling(default), capturing(trickling) and delegation

////Event Bubbling------------------------------------------------->

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent Div Clicked!!");
// });

// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child Div Clicked!!");
// });
// document.getElementById("list").addEventListener("click", () => {
//   console.log("Child Div Clicked!!");
// });

////Event capturing ------------------------------------------>
// document.getElementById("parent").addEventListener(
//   "click",
//   function (event) {
//     console.log("Parent Div Capturing");
//   },
//   true
// ); // true enables capturing phase

// Child button and child list event listener
// document.getElementById("child").addEventListener("click", function (event) {
//   console.log("Button Clicked");
// });
// document.getElementById("list").addEventListener("click", function (event) {
//   console.log("List Clicked");
// });

////Event Deligation --------------------------------------->

// document.getElementById("list").addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     console.log("List Item Clicked", e.target.textContent);
//   }
// });

//// Promies-------------------------------------->

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Ascync Operation succesfully completed!");
//   } else {
//     reject("Async op couldnt be completed");
//   }
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

////Promise.all()--------------------->

// const getData1 = () => {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve("Task 1 completed!");
//     }, 2000)
//   );
// };

// const getData2 = () => {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve("Task 2 completed!");
//     }, 1000)
//   );
// };

// Promise.all([getData1(), getData2()]).then((results) => {
//   console.log(results);
// });

//// async await// Build on top of promies , make code look more synchronous and improves readability  ---------------------------->
//// so async function always returns a promise and we can use await for it get resolved
//// use try catch here for error handling

// const getData = async () => {
//   try {
//     const task1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data1 = await task1.json();
//     console.log("Data:", data1);

//     const response2 = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/2"
//     );
//     const data2 = await response2.json();
//     console.log("Next Data:", data2);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// };

// getData();

//// this keyword------------------------------>

// 1. Global Context-------------------->
// In the global context (outside of any function), this refers to the global object.

// In a browser, it refers to window.
// In Node.js, it refers to global.

// console.log(this); // In a browser, logs: Window

// 2. Function Context------------------>
// In a regular function (not an arrow function), this refers to the object that is calling the function.
// If no object is calling the function, this will refer to the global object (or undefined in strict mode).

// function show() {
//   console.log(this);
// }

// show(); // In a browser, logs: Window (or global object in Node.js)

// 3. Object Method--------------------------->
// When a function is used as a method of an object, this refers to the object itself.

// const person = {
//   name: 'Alice',
//   greet: function() {
//     console.log(this.name);
//   }
// };

// person.greet(); // Logs: Alice

// 4. Arrow Functions------------------------------>
// Arrow functions do not have their own 'this' context.
// Instead, this is inherited from the surrounding lexical context.

// const person = {
//   name: 'Bob',
//   greet: function() {
//     const innerFunc = () => {
//       console.log(this.name);
//     };
//     innerFunc();
//   }
// };

// person.greet(); // Logs: Bob

// 5. Constructor Functions---------------------->
// In a constructor function (used with the new keyword), this refers to the newly created instance of the object.

// function Person(name) {
//   this.name = name;
// }

// const person = new Person('Charlie');
// console.log(person.name); // Logs: Charlie

// 6. call and apply Methods------------------------->
// You can explicitly set the value of this using call or apply methods.
// So this in a function points to the object that is calling the function..

// function greet() {
//   console.log(this.name);
// }

// const person = { name: 'David' };

// greet.call(person); // Logs: David
// greet.apply(person); // Logs: David

// 7. bind Method----------------------------->
// You can also create a new function with a specific this value using bind.

// function greet() {
//   console.log(this.name);
// }

// const person = { name: 'Emma' };
// const boundGreet = greet.bind(person);
// boundGreet(); // Logs: Emma

// call and apply: Explicitly set the value of this.
// bind: Creates a new function with a specified this value.

//Date Object----------------------------------------------------->

// const currentDateAndTime = new Date();
// console.log(today); // gives current date and time
// console.log(today.toLocaleString()); // gives date and time in human readable form

// const randomDate = new Date("04-12-1997");
// console.log(randomDate.getTime());

// const randomDate = new Date("1997-12-04");
// console.log(randomDate.toLocaleString());
// console.log(randomDate.toDateString());
// console.log(randomDate.toLocaleDateString());
// console.log(randomDate.toLocaleTimeString());
// console.log(randomDate.getDate());
// console.log(randomDate.getDay());
// console.log(randomDate.getFullYear());
// console.log(randomDate.getHours());

// console.log(!isNaN(randomDate.getTime()) ? "Valid Date" : "Invalid Date");

// const date = new Date();
// console.log(date.getFullYear()); // Gets the year (e.g., 2024)
// console.log(date.getMonth()); // Gets the month (0-based, so 8 is September)
// console.log(date.getDate()); // Gets the day of the month (1-31)
// console.log(date.getDay()); // Gets the day of the week (0 for Sunday, 6 for Saturday)

// const date = new Date();
// date.setFullYear(2025);
// date.setMonth(11); // December (0-based index)
// date.setDate(25); // 25th of the month
// console.log(date.toString()); // Outputs: Thu Dec 25 2025
// console.log(date.toString().split(" ")[0]); // Outputs: Thu

// const date = new Date();
// console.log(date.toLocaleDateString()); // Outputs 14/9/2024
// console.log(date.toLocaleTimeString()); // Outputs 7:32:35 pm

// const date1 = new Date("2023-09-14");
// const date2 = new Date("2024-09-14");
// const diffInMilliseconds = date2 - date1;
// const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
// console.log(diffInDays); // Outputs the difference in days

// const date = new Date();
// date.setDate(date.getDate() + 7); // Adds 7 days
// console.log(date);
// date.setDate(date.getDate() - 7); // Subtracts 7 days
// console.log(date);

////HTML--------------------------------------------------------------->////

// Attributes in HTML------------------------->
// Attributes provide additional information about HTML elements and modify their default behavior or appearance.
//Here are a few key points:

// Name-Value Pair: An attribute is always written as a name-value pair, like href="https://www.example.com".
// Optional: Some attributes are optional depending on the element, while others are required.
// For example, the href attribute is required for anchor (<a>) tags to function as hyperlinks.
// Position: Attributes are placed within the opening tag of an HTML element.
// Example Breakdown

// <a href="https://www.example.com">Visit Example</a>
// <a>: The anchor tag used for creating hyperlinks.
// href="https://www.example.com": The href attribute specifies the destination URL.
// Visit Example: The text that will be clickable and visible to users.

// Common Attributes----------------->
// href: Specifies the URL for a hyperlink.
// src: Specifies the source URL for images.
// alt: Provides alternative text for images if they cannot be displayed.
// class: Assigns one or more class names to an element for styling with CSS.
// id: Provides a unique identifier for an element that can be used for styling or scripting.
// Attributes enhance the functionality and styling of HTML elements, making them crucial
// for creating interactive and well-structured web pages.

// What are void elements in HTML?---------------------------------->
// HTML elements which do not have closing tags or do not need to be closed are Void elements.
// For Example <br />(break line), <img />, <hr />(horizontal line), etc.
// <input /> – Input field  <link /> – Links external resources (like CSS files)  <embed /> – Embeds external content

// The <embed /> tag is used in HTML to embed external content, such as multimedia (like videos, audio, or documents),
// into a webpage. This tag is particularly useful when embedding plugins, flash objects, or other types of media.

// Example of the <embed /> tag:

// <embed src="your-video.mp4" width="600" height="400" />
// Common attributes for the <embed /> tag:
// src: Specifies the source file to embed.
// width: Defines the width of the embedded content.
// height: Defines the height of the embedded content.
// type: Specifies the media type (like video/mp4, application/pdf).
// autoplay: Automatically plays the embedded content (for media files).
// The <embed /> tag is less commonly used nowadays since HTML5 introduced
// more specific tags like <video>, <audio>, and <iframe>, but it is still useful in certain cases.

// <p>This    is a    sentence   with    irregular    spacing.</p>
//In the browser, this will render as:
// This is a sentence with irregular spacing.
//The advantage is that content remains clean and uniform, regardless of the number of spaces used in the code.

// HTML entities are special characters or symbols in HTML that are represented by
// specific code sequences to ensure proper display in the browser. These are useful when
// the characters you want to display are reserved in HTML (like <, >, or &),
// or when you need to display symbols that aren't on your keyboard.

// Key Points About HTML Entities:

// Purpose: HTML entities are used to display reserved characters (like &, <, >) or special symbols
// that may be interpreted differently by the browser.

// Syntax: An HTML entity starts with an &, followed by a name or number, and ends with a semicolon ;.

// Types:
// Named Entities: Use a descriptive name.
// Example: &lt; represents <, &gt; represents >, and &amp; represents &.
// Numeric Entities: Use numbers to represent the character.
// Example: &#60; represents <, &#62; represents >, and &#38; represents &.

// HTML provides different types of lists to organize and present information in a structured manner.------>
//There are three main types of lists in HTML:

// 1. Ordered List (<ol>)
// An ordered list presents items in a numbered sequence.
// Each list item is defined using the <li> (list item) element.
// The numbers can be customized (e.g., Roman numerals, alphabetical, or default numbers).

// <ol>
//   <li>First item</li>
//   <li>Second item</li>
//   <li>Third item</li>
// </ol>

// Attributes for <ol>:

// type: Defines the type of numbering (e.g., "1", "A", "a", "I", "i").
// start: Specifies the starting number.
// reversed: Reverses the order of the list.

// <ol type="A" start="5">
//   <li>Item one</li>
//   <li>Item two</li>
// </ol>

// Output:
// E. Item one
// F. Item two

// 2. Unordered List (<ul>)
// An unordered list presents items in a bullet-point format.
// Each item is also defined using <li>.
// The default marker is a bullet, but it can be changed.

// <ul>
//   <li>Milk</li>
//   <li>Bread</li>
//   <li>Butter</li>
// </ul>

// 3. Description List (<dl>)
// A description list is used to list terms and their corresponding descriptions.
// Terms are defined using the <dt> (description term) element,
// and descriptions are defined using the <dd> (description data) element.

// <dl>
//   <dt>HTML</dt>
//   <dd>Hypertext Markup Language</dd>

//   <dt>CSS</dt>
//   <dd>Cascading Style Sheets</dd>
// </dl>

// Output:
// HTML
// Hypertext Markup Language
// CSS
// Cascading Style Sheets

// class Attribute in HTML --------------------------------------->
// The class attribute is used to assign one or more class names to an HTML element.
// This allows you to group multiple elements under the same class for styling purposes
// or for applying JavaScript functionality.

// <!DOCTYPE html>
// <html>
// <head>
//   <style>
//     .highlight {
//       color: red;
//       font-weight: bold;
//     }
//   </style>
// </head>
// <body>

// <p class="highlight">This is a paragraph with a class.</p>
// <p>This paragraph has no class.</p>
// <p class="highlight">This is another paragraph with the same class.</p>

// </body>
// </html>

// The two paragraphs with the class highlight will have red, bold text, while the
// second paragraph will remain unstyled.

// <!DOCTYPE html>
// <html>
// <head>
//   <style>
//     .box {
//       padding: 10px;
//       border: 1px solid black;
//     }
//     .red {
//       background-color: red;
//     }
//   </style>
// </head>
// <body>

// <div class="box red">This box has two classes: "box" and "red".</div>

// </body>
// </html>

// You can also manipulate the class attribute with JavaScript to dynamically change styles or behavior.

// document.querySelector('.box').classList.add('highlight');

//  What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?
// Multiple elements in HTML can have the same class value, whereas a value of id
// attribute of one element cannot be associated with another HTML element.

// Multipart/form-data:---------------------------------->
// multipart/form-data is an encoding type used when submitting forms that include files, images, or other binary data.
// Unlike the default application/x-www-form-urlencoded encoding, which encodes all data into a single string,
//  multipart/form-data breaks the form data into multiple parts and sends each part separately.
// This is especially useful for handling large file uploads.

// <form action="/upload" method="POST" enctype="multipart/form-data">
//   <label for="file">Choose a file:</label>
//   <input type="file" id="file" name="file">
//   <input type="submit" value="Upload">
// </form>

// The HTML layout structure defines the arrangement and organization of elements within a web page. ---------->
// Modern web development often follows a semantically meaningful structure, using specific HTML elements
// to convey the purpose of different sections of the page. These tags are essential for creating accessible,
// SEO-friendly, and well-structured web pages. Here's an overview of key layout components:

// 1. <header>:
// The <header> element represents introductory content, often containing navigation links, logos, or
// important information like a page title or branding.

// It typically appears at the top of the page but can also be used inside sections or articles.

// Example:

// <header>
//   <h1>Website Title</h1>
//   <nav>
//     <ul>
//       <li><a href="#home">Home</a></li>
//       <li><a href="#about">About</a></li>
//       <li><a href="#contact">Contact</a></li>
//     </ul>
//   </nav>
// </header>

// 2. <footer>:
// The <footer> represents the end section of a webpage or a specific section of a page.
// It typically contains information like copyrights, disclaimers, links to privacy policies, or contact details.

// Example:

// <footer>
//   <p>© 2024 Your Website. All Rights Reserved.</p>
// </footer>

// 3. <nav>:
// The <nav> element defines a block of navigation links. It is used to contain menus or lists of
// internal links that allow users to navigate different parts of the website.

// Example:

// <nav>
//   <ul>
//     <li><a href="#home">Home</a></li>
//     <li><a href="#services">Services</a></li>
//     <li><a href="#contact">Contact</a></li>
//   </ul>
// </nav>

// 4. <article>:
// The <article> element is used for self-contained content that could be independently ,
// distributed or repurposed, such as blog posts, news articles, or comments.

// Example:

// <article>
//   <h2>Breaking News: New Web Standard Released</h2>
//   <p>The latest web standards have been released, bringing a host of new features...</p>
// </article>

// 5. <section>:
// The <section> tag is used to define sections within an HTML document. It organizes content into
// thematic groupings and is often used within articles or as a standalone content block.

// Example:

// <section>
//   <h2>Our Services</h2>
//   <p>We provide a range of services including web development and design...</p>
// </section>

// 6. <aside>:
// The <aside> element is used for content that is related to the main content but placed to the side,
// such as sidebars, pull quotes, or advertisements.

// Example:

// html
// Copy code
// <aside>
//   <h3>Related Articles</h3>
//   <ul>
//     <li><a href="#">How to Improve Web Performance</a></li>
//     <li><a href="#">Latest Design Trends</a></li>
//   </ul>
// </aside>

// 7. <main>:
// The <main> element is used to identify the central content of a document.
// There should be only one <main> per document, and it should not be inside <header>, <footer>, or <nav>.

// Example:

// <main>
//   <h1>Welcome to Our Website</h1>
//   <p>We provide comprehensive web services for small and large businesses.</p>
// </main>

// HTML Layout Structure Example:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Website Layout</title>
// can have a style tag here to define styles on classes, ids and tags
// also can have  a link tag to attach a external css file to this page
// </head>
// <body>

//   <header>
//     <h1>My Website</h1>
//     <nav>
//       <ul>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   </header>

//   <main>
//     <section>
//       <h2>About Us</h2>
//       <p>We are a web development company offering a range of services...</p>
//     </section>

//     <article>
//       <h2>Latest News</h2>
//       <p>Read our latest blog post on web trends for 2024...</p>
//     </article>

//     <aside>
//       <h3>Advertisement</h3>
//       <p>Check out our latest offers!</p>
//     </aside>
//   </main>

//   <footer>
//     <p>© 2024 My Website. All Rights Reserved.</p>
//   </footer>

// </body>
// </html>
// This structure gives a clear and semantically correct layout for the content of the web page.

//  What are the various formatting tags in HTML?--------------------->
//  HTML has various formatting tags:

// <b> - makes text bold
// <i> - makes text italic
// <em> - makes text italic but with added semantics importance
// <big> - increases the font size of the text by one unit
// <small> - decreases the font size of the text by one unit
// <sub> - makes the text a subscript
// <sup> - makes the text a superscript
// <del> - displays as strike out text
// <strong> - marks the text as important
// <mark> - highlights the text
// <ins> - displays as added text

//// HTML , CSS , JS MOCK QUESTIONS...----------------->

////Semantic Tags-------------------->

// Semantic tags in HTML are tags that clearly describe their meaning both to the browser and the developer.
// These tags help define the structure and the purpose of the content, making it easier for search engines,
// screen readers, and other tools to interpret the content. Semantic tags also improve code readability,
// maintainability, and SEO (Search Engine Optimization).

// examples:
// <header></header>
// Defines the header section of a webpage or a section of a page.
// Typically contains navigational links, logos, or introductory content.

// <nav>
// Represents a section of the page intended for navigation links.

// <main>
// Defines the main content of the page, which is unique and central to the document.
// Only one <main> element should be used per page.

// <section>
// Represents a thematic grouping of content, typically with a heading.

// <article>
// Used for independent, self-contained content, such as blog posts or news articles.

// <aside>
// Contains content related to the main content, such as sidebars or additional information.

// <footer>
// Defines the footer section of a page, usually containing copyright information, links, or contact details.

// <figure> and <figcaption>
// <figure> is used to encapsulate media elements like images, videos, or diagrams.
// <figcaption> provides a caption for the media content.

// <mark>
// Highlights or marks text.

// <time>
// Represents a specific time, date, or both.
// <time datetime="2024-09-15">September 15, 2024</time>

// <address>
// Provides contact information for its nearest ancestor or the entire body.

// <address>
//     Contact us at <a href="mailto:info@example.com">info@example.com</a>.
// </address>

//// Tags and attributes --------------------------------->

// Tags are the fundamental building blocks of HTML (HyperText Markup Language). They define the structure, content,
// and elements of a webpage. Tags usually come in pairs: an opening tag and a closing tag,
// and the content goes between them.

// Example of Tags:
// Opening Tag: <p>
// Closing Tag: </p>
// Content: "This is a paragraph."

// <p>This is a paragraph.</p>

// Attributes
// Attributes provide additional information about an HTML element, specifying properties like ID, class, style, or
// behavior. Attributes are always written inside the opening tag and come in name-value pairs.
// They help control the behavior and appearance of the tag's content.

// <img src="image.jpg" alt="A sample image" width="500">
// img--tag , src, alt , width -- Attributes

{
  /* <a href="https://example.com" target="_blank">
  Visit Example
</a>;
<a> is the tag defining a link.
href and target are attributes.
href: Specifies the URL of the link.
target: Specifies where to open the link, in this case, a new tab (_blank). */
}

//// Block vs Inline vs Inline-Block------------------------->

// 1. Block Elements
// Layout Behavior: Block elements take up the full width of their parent container by default, forcing a
// new line (or "block") before and after the element.
// Can Contain: Other block elements and inline elements.
// Common Block Elements: <div>, <p>, <h1> to <h6>, <section>, <article>, <form>, <header>, <footer>, etc.

{
  /* <table> is considered a block-level element in HTML. Block-level elements typically start on a new line and take
up the full width of their parent container by default. However, tables have a unique structure that allows
them to define rows and columns, and their width can be adjusted based on content or styling rules like width
and table-layout. */
}

// Styling Block Elements: You can control width, height, padding, margin, and more.

// 2. Inline Elements
// Layout Behavior: Inline elements only take up as much width as their content, without breaking the flow of the text.
// They don't start on a new line like block elements.
// Can Contain: Other inline elements, but not block elements.
// Common Inline Elements: <span>, <a>, <strong>, <em>, <img>, <label>, etc.

// Styling Inline Elements: You cannot control the width and height directly (except for specific cases like <img>).
// You can, however, control padding, margin (only horizontally), and text properties.

// 3.Inline-Block Elements
// Layout Behavior: Inline-block elements behave like inline elements but allow you to set width and height like block
//  elements. Unlike block elements, they don't force a line break.
// Can Contain: Both block and inline elements, depending on the browser.
// Common Inline-Block Elements: <img>,<button></button> is a typical inline-block element.

////Canvas vs SVG ---------------->

// Canvas: Pixel-based, better for dynamic, real-time graphics, but harder to manipulate individual elements once drawn.
// SVG: Vector-based, better for static, scalable graphics, with direct DOM manipulation of elements.

////Cascading meaning in css--------------->

// In CSS, the term cascading refers to the way styles are applied to HTML elements by prioritizing rules
// based on multiple factors. The cascading behavior is what determines how conflicting styles are resolved
// and which rule takes precedence.

// Key Concepts in the CSS Cascade:

// Inheritance: Certain properties in CSS, like color or font-size, are inherited from parent elements by default,
// while others, like margin or border, are not.

// Specificity: CSS assigns a weight to different types of selectors. More specific selectors (like ID selectors)
// have higher priority over less specific ones (like class selectors or element selectors).

// Element selector: p (least specific)
// Class selector: .example
// ID selector: #header (most specific)
// Source Order: If two or more rules have the same specificity and importance,
// the rule that appears last in the CSS file will take precedence.

// Importance: The !important keyword can override normal specificity rules, giving a style the highest priority.
// However, overusing !important is discouraged, as it can make maintaining CSS more difficult.

// {/* <style>
//   p {
//     color: blue;  /* Least specific */
//   }

//   .highlight {
//     color: green; /* More specific */
//   }

//   #important-paragraph {
//     color: red;   /* Most specific */
//   }

//   p {
//     color: purple !important; /* Overrides everything */
//   }
// </style>

// <p id="important-paragraph" class="highlight">This is a paragraph.</p> */}

// In this case:

// The p tag has several competing styles for color.
// Due to the !important, the paragraph will display in purple regardless of the other rules.

////if we give some styling to parent will it apply on the child also---------------->

// {/* <style>
//   .parent {
//     color: red; /* This will be inherited by child elements */
//   }
// </style>

// <div class="parent">
//   <p>This text will be red.</p>
// </div> */}

// {/* <style>
//   .parent {
//     background-color: yellow; /* Parent background color */
//   }

//   .child {
//     color: blue; /* Child text color */
//   }
// </style>

// <div class="parent">
//   <p class="child">This text is blue on a yellow background.</p>
// </div> */}

// {/* <style>
//   .parent {
//     color: green; /* Parent color */
//   }

//   .child {
//     color: blue; /* Child color overrides parent color */
//   }
// </style>

// <div class="parent">
//   <p class="child">This text will be blue, not green.</p>
// </div> */}

// {/* <style>
//   .parent {
//     margin: 20px; /* Not inherited by children */
//   }

//   .child {
//     background-color: lightblue; /* Child will have its own background */
//   }
// </style>

// <div class="parent">
//   <div class="child">This child has its own background color and margin.</div>
// </div> */}

////Postion properties in css --------------------------------------->

// The position property in CSS determines how an element is positioned in the document and how it
// interacts with other elements. Here are the key values you can use with the position property:

// 1. static
// Default Value: All elements are static by default.
// Behavior: Elements are positioned according to the normal flow of the document.
// Top, right, bottom, and left properties have no effect.
// Example:

// .static-element {
//   position: static;
// }

// 2. relative
// Behavior: The element is positioned relative to its normal position in the document flow.
// This means you can adjust its position with top, right, bottom, and left properties,
//  and it still occupies space in the layout.
// Example:

// .relative-element {
//   position: relative;
//   top: 10px;
//   left: 20px;
// }
// Here, the .relative-element will be offset by 10px from the top and 20px from the left
//of where it would normally be positioned.

// 3. absolute
// Behavior: The element is positioned relative to its nearest positioned ancestor
// (i.e., the closest ancestor with a position other than static). If no such ancestor exists,
// it is positioned relative to the initial containing block (usually the viewport).
// It is removed from the document flow and does not occupy space.
// Example:

// .absolute-element {
//   position: absolute;
//   top: 50px;
//   right: 30px;
// }
// Here, the .absolute-element will be positioned 50px from the top and 30px from the right of its containing element.

// 4. fixed
// Behavior: The element is positioned relative to the viewport, meaning it remains in
// the same position even when the page is scrolled. It is removed from the document flow and does not occupy space.
// Example:

// .fixed-element {
//   position: fixed;
//   bottom: 0;
//   right: 0;
// }
// In this example, the .fixed-element will stick to the bottom-right corner of the viewport regardless of scrolling.

// 5. sticky
// Behavior: The element switches between relative and fixed positioning depending on the scroll position.
// It behaves like relative until it reaches a defined scroll position, at which point it becomes fixed.
// Example:

// .sticky-element {
//   position: sticky;
//   top: 0;
// }
// Here, the .sticky-element will stick to the top of the viewport once it scrolls into view,
// and will remain there until its containing block is scrolled out of view.

// What is Flexbox?------------------------------------------------>
// Flexbox, or the Flexible Box Layout, is a CSS layout module designed to help create complex layouts with ease.
//  It provides a more efficient way to lay out, align, and distribute space among
// items in a container, even when their sizes are unknown or dynamic.

//  What is the Box Model in CSS?------------------------------>

//  |---------------------|
// |       Margin        |
// |  |--------------|   |
// |  |   Border     |   |
// |  |  |--------|  |   |
// |  |  | Padding|  |   |
// |  |  |        |  |   |
// |  |  | Content|  |   |
// |  |  |--------|  |   |
// |  |--------------|   |
// |---------------------|

// 20. Default Value of box-sizing
// The default value of the box-sizing property is content-box. This means that the width and height
//  properties only apply to the content area, and any padding and border are added outside of these dimensions.

// 21. Difference Between content-box and border-box
// content-box (default):---------------------------------->

// Width/Height: Only applies to the content area.
// Padding/Border: Adds padding and border to the width and height, increasing the total size of the element.
// Calculation: width + padding + border = total width, and height + padding + border = total height.
// Example:

// .element {
//   box-sizing: content-box; /* Default */
//   width: 200px;
//   padding: 20px;
//   border: 5px solid black;
// }
// Total width: 200px (content) + 20px (padding-left) + 20px (padding-right) + 5px (border-left)
// + 5px (border-right) = 250px
// Total height: Similar calculation applies for height.

// border-box:--------------------------------------------------------------------->

// Width/Height: Includes content, padding, and border.
// Padding/Border: Padding and border are included within the specified width and height, so
// they do not increase the total size of the element.
// Calculation: width = content + padding + border, and height = content + padding + border.
// Example:

// .element {
//   box-sizing: border-box;
//   width: 200px;
//   padding: 20px;
//   border: 5px solid black;
// }
// Total width: 200px (includes content, padding, and border within this width)
// Total height: Similar calculation applies for height.
// Using border-box often simplifies layout design because padding and borders do not affect
// the overall width and height of the element.

// Why Do We Need JavaScript?--------------------------------->
// JavaScript is essential for the following reasons:

// Interactivity: JavaScript enables interactive features on websites, such as form validation,
//  dynamic content updates, and user interactions (e.g., buttons, sliders).

// Client-Side Scripting: It allows scripts to run in the browser, making web pages more
// responsive and interactive without requiring server-side processing.

// Asynchronous Operations: JavaScript facilitates asynchronous operations using features like fetch,
// XMLHttpRequest, and Promise. This allows for tasks like loading data from a server without reloading the page.

// DOM Manipulation: JavaScript provides methods to interact with and modify the Document Object Model (DOM),
//  allowing for dynamic changes to the HTML structure and content.

// Event Handling: It allows developers to handle various user events (clicks, keystrokes, etc.),
//  making web applications more engaging and user-friendly.

// Animations: JavaScript can be used to create animations and transitions on web pages,
// enhancing visual appeal and user experience.

// Single-Page Applications (SPAs): JavaScript frameworks and libraries (like React, Angular, Vue.js)
// enable the development of SPAs, where the entire application runs on a single web page.

// 23. What Are the Different Data Types in JavaScript?--------------------------->
// JavaScript has two main categories of data types:

// Primitive Data Types:
// Number: Represents numeric values (e.g., 42, 3.14).
// String: Represents a sequence of characters (e.g., "hello", 'world').
// Boolean: Represents a true or false value (true or false).
// Undefined: Indicates a variable that has been declared but not assigned a value.
// Null: Represents the intentional absence of any object value.
// Symbol: A unique and immutable primitive value often used as object property keys (introduced in ECMAScript 6).
// BigInt: Represents integers with arbitrary precision (introduced in ECMAScript 2020).

// Non-Primitive (Reference) Data Types:
// Object: A collection of properties and methods (e.g., { name: "Alice", age: 25 }).
// Array: A special type of object for storing ordered collections of values (e.g., [1, 2, 3]).
// Function: A callable object that represents a block of code (e.g., function() { ... }).
// Date: An object for working with dates and times (e.g., new Date()).
// RegExp: An object for working with regular expressions (e.g., /^\d+$/).

// 24. Why Do We Have Categories Like Primitive and Non-Primitive in JavaScript?---------------->

// Primitive Data Types:

// Immutability: Primitive values are immutable, meaning their values cannot be changed once they are created.
// For example, if you change a string, you are creating a new string rather than modifying the original.
// Efficiency: Primitives are more efficient in terms of memory and performance because
// they are stored directly in the stack.

// Non-Primitive (Reference) Data Types:

// Mutability: Non-primitive values (objects, arrays, functions) are mutable,
// meaning their contents can be changed. For example, you can add, remove, or modify properties in an object.
// Reference: Non-primitives are stored as references in memory,
//  which allows for complex structures and relationships between data.
// Complexity: They provide the ability to create complex data structures and
// functions, enabling more sophisticated operations and interactions.

// The distinction between primitive and non-primitive data types helps developers
// understand how values are stored and manipulated in memory, and how different types behave
// when assigned to variables or passed around in code.

// In JavaScript, the way primitive and non-primitive data types are stored and managed is an------------->
// important concept for understanding memory allocation and variable management.
//  Here’s an explanation of how primitive and non-primitive data types are stored:

// Primitive Data Types -------------->

// Storage:

// Stack Memory: Primitive data types are stored directly in stack memory.
// The stack is a region of memory that stores primitive values and is managed in a last-in, first-out (LIFO) manner.

// Value Assignment: When you assign a primitive value to a variable,
// the value is directly placed into the stack. For example, in the case of numbers or strings,
// the actual value is stored in the stack.

// Non-Primitive Data Types---------------->
// Storage:

// Heap Memory: Non-primitive data types (objects, arrays, functions, etc.) are stored in heap memory.
// The heap is a larger, more flexible region of memory used for dynamic allocation.

// Reference Assignment: When you create a non-primitive data type, it is stored in the heap, and
// a reference (or pointer) to that memory location is stored in the stack.
// The variable holds the reference, not the actual object.

////The Document Object Model (DOM) is a programming interface provided by web browsers that---------->
// represents the structure of an HTML or XML document. It allows programs and scripts to dynamically access,
// manipulate, and modify the content, structure, and style of web documents.

// The DOM represents a document as a tree of nodes, where each node corresponds to a part of the document,
//  such as an element, attribute, or text.

// <!DOCTYPE html>
// <html>
// <head>
//     <title>DOM Example</title>
// </head>
// <body>
//     <h1 id="header">Hello, World!</h1>
//     <button id="changeText">Change Text</button>
//     <script src="script.js"></script>
// </body>
// </html>

// // Access the DOM elements
// const header = document.getElementById('header');
// const button = document.getElementById('changeText');

// // Define a function to change the text of the header
// function changeHeaderText() {
//     header.textContent = 'Text Changed!';
// }

// // Attach the function to the button click event
// button.addEventListener('click', changeHeaderText);

// Why Do We Need React?-------------------------------------->

// React is a popular JavaScript library for building user interfaces, particularly single-page
// applications where data changes over time. Here’s why React is widely used and needed:

// Component-Based Architecture:
// React allows developers to build UIs using reusable and self-contained components.
// This modular approach helps in maintaining and scaling large applications.

// Declarative Syntax:
// React uses a declarative syntax to describe the UI. This means you describe what the UI should look like
// based on the current state, and React takes care of updating the actual DOM to reflect those changes.
// This simplifies the process of building complex UIs.

// Virtual DOM:
// React uses a Virtual DOM to optimize updates. Instead of manipulating the actual DOM directly,
// React creates a lightweight copy (Virtual DOM) and compares it with the previous version.
// It then updates only the parts of the actual DOM that have changed, leading to better performance.

// Efficient Updates:
// React's reconciliation algorithm ensures that only the necessary parts of the DOM are updated,
// which improves the performance and responsiveness of applications.

// State Management:
// React provides mechanisms for managing component state and props,
//  which helps in handling dynamic data and user interactions effectively.

// Ecosystem and Tools:
// React has a rich ecosystem of libraries and tools, such as React Router for routing,
// Redux for state management, and various development tools, which streamline the development process.

// Community and Support:
// React has a large community and strong support, providing ample resources, tutorials,
// and third-party libraries that make development faster and easier.

// Server-Side Rendering:
// React supports server-side rendering (SSR) to improve the performance and SEO of web applications.

// Difference Between Imperative and Declarative Programming------------------------>

// Imperative Programming:---------------------------------->

// Definition: Imperative programming focuses on how to achieve a result by providing a sequence of steps or instructions that modify the program’s state.
// Approach: Developers specify the exact steps to perform and the order in which they should be executed.
// Example: Manipulating the DOM directly using JavaScript.

// const elements = document.querySelectorAll('p');
// for (let i = 0; i < elements.length; i++) {
//   elements[i].style.color = 'blue';
// }

// Characteristics:
// More control over the execution flow.
// Often involves managing state and handling side effects manually.

// Declarative Programming:----------------------->

// Definition: Declarative programming focuses on what the result should be without specifying the exact steps to achieve it. The system takes care of how to achieve the result.
// Approach: Developers describe the desired outcome, and the system abstracts away the implementation details.
// Example: Using React to describe the UI.

// const MyComponent = () => {
//   return (
//     <div>
//       <p style={{ color: 'blue' }}>Hello, World!</p>
//     </div>
//   );
// };

// Characteristics:
// Simpler and more readable code, as developers focus on the end result.
// Less control over the execution flow, but more abstract and often easier to reason about.

// Imperative Programming: Focuses on the "how" and involves detailed steps for achieving a result.
// Declarative Programming: Focuses on the "what" and abstracts the "how," making code more concise and easier to manage.

// What is the Concept of State in React?----------------------------------->

// State in React is an object that represents the parts of a component that can change over time.
// It's a core concept for managing dynamic data and handling user interactions in React applications.

// State vs. Normal Variables:----------->

// Reactivity:------------->

// State: React components automatically re-render when state changes,
// ensuring the UI is always up-to-date. This reactivity is crucial for reflecting dynamic data and user interactions.

// Normal Variables: Normal variables don’t trigger re-renders when their values change.
// Using them for dynamic content would require manual DOM manipulation, which React abstracts away.

// Persistence:------------------>

// State: State persists between renders, meaning the data remains available even after re-rendering.
// This persistence is crucial for managing user inputs, API responses, and other dynamic data.

// Normal Variables: Normal variables are re-initialized on each render, losing their previous values,
// which is problematic for maintaining consistent data.

// import React, { useState } from "react";

// const ExampleComponent = () => {
//   const [value, setValue] = useState("Hello");

//   return (
//     <div>
//       <p>{value}</p>
//       <button onClick={() => setValue("World")}>Change Text</button>
//     </div>
//   );
// };

// In this example, clicking the button updates the state, causing the component to re-render and display the new text.

// import React from 'react';

// const ExampleComponent = () => {
//   let value = 'Hello';

//   const handleChange = () => {
//     value = 'World';
//     // No way to trigger a re-render
//   };

//   return (
//     <div>
//       <p>{value}</p>
//       <button onClick={handleChange}>Change Text</button>
//     </div>
//   );
// };
// In this case, the text won’t update on button click because React doesn’t
// re-render the component when the normal variable value changes.

// In summary, React’s state management system is designed to handle dynamic and interactive data efficiently,
// ensuring that components stay in sync with their data and re-render automatically when necessary.

////GUESS OUTPUT::---------------->

// var x = 20; //-------------->
// function foo() {
//   console.log(x);
//   var x = 10;
// }
// foo(); //undefined------------->

// console.log("Start");//----------------->
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// console.log("End");
// //the order in which it will run?

// Execution Order------------->

// Synchronous Code:

// All synchronous code is executed sequentially, from top to bottom.
// This includes functions, console.log statements, and other non-async operations.
// The synchronous code will run in the order it appears in the script.
// Even if there are a thousand console.log statements or other synchronous operations,
// they will all execute before any asynchronous code is handled.

// Asynchronous Code:

// Once the synchronous code has finished executing and the call stack is empty,
// the event loop will pick up tasks from the task queue and execute them.
// This includes callbacks from functions like setTimeout, setInterval(callback queue),
// and promises(in microtesk queue) that have been resolved.

// setTimeout(() => {
//   //------------------------->
//   console.log("timeout");
// }, 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

//Execution phase : Sync Code (End) --->Microtask Queue (Promise) --------> Callback Queue(timeout)

// async function foo() {
//   //--------------------->
//   return "Hello World";
// }

// const result = foo();
// console.log(result); // returns hello world wrapped in a promise object

// Explanation:------------------>

// async Function:------------->

// An async function always returns a promise. If you return a value from an async function,
// it is wrapped in a promise automatically.

// Handling Promises:----------->
// To access the resolved value of a promise, use .then() or await.

// foo().then((data) => console.log(data));

// Alternative with await: ----------------->

// async function main() {
//   const result = await foo();// awaiting for promise
//   console.log(result); // This will log "Hello World"
// }

// main();

// console.log([1, 2] == [1, 2]);------------------>

// The expression console.log([1, 2] == [1, 2]);
// returns false because arrays and objs are compared by reference, not by value in JavaScript.

// const user1 = {--------------->
//   name: "john",
//   age: 25,
//   address: {
//     city: "Mumbai",
//     state: "Mahrashtra",
//   },
// };
// const user2 = user1;
// user2.name = "Ramesh";
// user2.address.city = "Pune";

// console.log(user1);
// console.log(user2);

// here when we make changes to user2 , the user1 also gets changed as they both refrence to the same object

//// EVENT LOOP-------------------->

// so when event loops gets a js code,

// it pushes all the sync code to call stack,

// then the async code is given to os and libuv , when the async task is completed ,
// callback func related to that operation is pushed to callback queue or microtask queue,

// then eventloop checks if the stack is empty and then pops the callback function
// from queue and pushes it into stack to be executed ,

// CSS can be applied to HTML in several ways, each with its own use case. Here are the primary methods:------>

// Inline CSS: Applied directly within an HTML element using the style attribute. This is useful for quick,
// one-off styles but is generally not  recommended for larger projects due to its lack of reusability
// and separation of concerns.

// <p style="color: blue; font-size: 14px;">This is a paragraph.</p>

// Internal CSS: Defined within the <style> tag in the <head> section of an HTML document.
// This is useful for styles that apply to a single document.

// <head>
//   <style>
//     p {
//       color: blue;
//       font-size: 14px;
//     }
//   </style>
// </head>

// External CSS: Defined in a separate CSS file and linked to the HTML document using the <link> tag.
// This method is ideal for larger websites as it keeps
// styles separate from the HTML and allows for easy maintenance and reusability.

// <!-- HTML file -->
// <head>
//   <link rel="stylesheet" href="styles.css">
// </head>

// /* styles.css */
// p {
//   color: blue;
//   font-size: 14px;
// }

// CSS Modules: A technique where CSS is scoped to a specific component or module, usually in a React application.
// This helps prevent global scope issues by generating unique class names.

// // styles.module.css
// .paragraph {
//   color: blue;
//   font-size: 14px;
// }

// // Component.jsx
// import styles from './styles.module.css';

// function Component() {
//   return <p className={styles.paragraph}>This is a paragraph.</p>;
// }

// Inline elements like <span> normally cannot have explicit width or height when outside of Flexbox.----------->
// Flexbox changes this behavior, making all child elements (flex items) respect width and height, regardless
// of whether they are normally block-level or inline-level elements.

//ES6----------------------------------------------------------------------------->

// ES5 (ECMAScript 5) and ES6 (ECMAScript 6, also known as ECMAScript 2015) are
// different versions of the JavaScript language, with ES6 introducing significant new features and
// syntax improvements over ES5. Here's a comparison of key differences between ES5 and ES6:

// 1. Variable Declaration

// ES5:
// Uses var to declare variables, which has function-scoping.

// ES6:
// Introduces let and const for block-scoping.
// let allows re-assignment, while const is used for variables that shouldn't change.

// // ES5
// var x = 10;

// // ES6
// let y = 20;
// const z = 30;  // Cannot be re-assigned

// 2. Arrow Functions
// ES5:
// Uses traditional function expressions.

// ES6:
// Introduces arrow functions which provide a more concise syntax and also lexically bind this.

// // ES5
// var add = function(a, b) {
//   return a + b;
// };

// // ES6
// const add = (a, b) => a + b;

// 3. Template Literals
// ES5:
// String concatenation is done using the + operator.
// ES6:
// Introduces template literals, which allow embedded expressions and multi-line strings using backticks (`).

// // ES5
// var message = "Hello, " + name + "!";

// // ES6
// const message = `Hello, ${name}!`;

// 4. Classes
// ES5:
// Simulates inheritance using constructor functions and prototypes.

// ES6:
// Introduces class syntax, which simplifies the creation of objects and inheritance.

// // ES5
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHello = function () {
//   return "Hello " + this.name;
// };

// const zatin = new Person("Zatin");
// console.log(zatin.sayHello());

// // ES6
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello() {
//     return `Hello ${this.name}`;
//   }
// }

// 5. Modules
// ES5:
// No native module support, typically used external tools like CommonJS (in Node.js) or RequireJS.
// ES6:
// Introduces native support for modules using import and export.

// // ES5 (using CommonJS in Node.js)
// var myModule = require('myModule');

// // ES6
// import myModule from './myModule.js';
// export const myFunction = () => {};

// 6. Destructuring
// ES5:
// Manually extract values from objects and arrays.
// ES6:
// Introduces destructuring for easy extraction of properties from arrays and objects.

// // ES5
// var person = { name: 'John', age: 25 };
// var name = person.name;
// var age = person.age;

// // ES6
// const { name, age } = person;

// 7. Default Parameters
// ES5:
// Manually check if a parameter is undefined to set default values.
// ES6:
// Introduces default parameters, allowing you to set default values directly in the function signature.

// // ES5
// function greet(name) {
//   name = name || 'Guest';
//   return 'Hello ' + name;
// }

// // ES6
// const greet = (name = 'Guest') => `Hello ${name}`;

// 8. Spread and Rest Operators
// ES5:
// Does not have spread or rest operators. Typically uses apply or manual array manipulations.
// ES6:
// Introduces the spread (...) and rest (...) operators for arrays and objects.

// // Spread (ES6)
// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5];  // [1, 2, 3, 4, 5]

// // Rest (ES6)
// function sum(...args) {
//   return args.reduce((a, b) => a + b, 0);
// }

// 9. Promises
// ES5:
// Asynchronous operations were handled using callbacks, often leading to callback hell.
// ES6:
// Introduces Promises for better handling of asynchronous operations.

// // ES5 (Callback)
// function fetchData(callback) {
//   setTimeout(function() {
//     callback('Data loaded');
//   }, 1000);
// }

// // ES6 (Promise)
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Data loaded'), 1000);
//   });
// };

// 10. for...of Loop
// ES5:
// Uses for, for...in, and forEach to loop over arrays.
// ES6:
// Introduces the for...of loop for simpler iteration over iterable objects (like arrays, strings, etc.).

// // ES5
// var arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // ES6
// const arr = [1, 2, 3];
// for (const value of arr) {
//   console.log(value);
// }

// 12. Map and Set
// ES5:
// Used objects and arrays for collections.
// ES6:
// Introduces Map and Set for more advanced data structures.

// // Map (ES6)
// const map = new Map();
// map.set('key', 'value');
// console.log(map.get('key'));  // 'value'

// // Set (ES6)
// const set = new Set([1, 2, 2, 3]);
// console.log(set);  // Set { 1, 2, 3 }
// console.log([...set]);  // Array [1,2,3]

// 1. Webpack------------------------------------->
// Webpack is a module bundler that takes modules with dependencies
// (such as JavaScript files, CSS, images, etc.) and bundles them into a single file or smaller files (chunks).
// It helps manage dependencies, optimize assets, and improve performance.

// 2. Babel----------------------------------->
// Babel is a JavaScript compiler that allows you to write modern JavaScript (ES6, ES7, etc.)
// and transpile it to a version that is compatible with older browsers (usually ES5).
// Babel doesn’t bundle files like Webpack
// but instead focuses on transforming code so it can be run in any environment.

////Implementing inc and decrement counters using constrcutor and closures--->

// function counter() {
//   var count = 0;
//   this.incCounter = () => {
//     count++;
//     console.log(count);
//   };
//   this.decCounter = () => {
//     count--;
//     console.log(count);
//   };
// }

// var counter1 = new counter();
// counter1.incCounter();
// counter1.incCounter();
// counter1.decCounter();

// const printJson = (jsonObj) => {
//   const obj1 = typeof jsonObj === "string" ? JSON.parse(jsonObj) : jsonObj;
//   for (let key in obj1) {
//     if (typeof obj1[key] === "object" && obj1[key] !== null) {
//       printJson(obj1[key]);
//     } else {
//       console.log(obj1[key]);
//     }
//   }
// };

// const jsonString =
//   '{"name": "John", "age": 30, "address": {"city": "New York", "zip": "10001", "cars":["BMW","FORD"]}}';
// printJson(jsonString);
// console.log(JSON.parse(jsonString));

//{
//   name: 'John',
//   age: 30,
//   address: { city: 'New York', zip: '10001', cars: [ 'BMW', 'FORD' ] }
// }

//Deep copy vs Shallow Copy----------------->

// Shallow Copy:--------------------------------------------->

// In a shallow copy, only the top-level properties are copied, and if a property is an object
// (or array), only the reference to that object is copied, not the object itself. This means the nested
// objects or arrays in the copy and the original are shared by reference. If you modify a nested object or
// array in the shallow copy, it will also affect the original object because both the copy and the
// original point to the same memory reference for those nested structures.

// let shallowObj = { ...obj }; // Shallow Copy, the ref to address is same in both objs and new copies for name and age
// shallowObj.name = "Johnson";
// shallowObj.address.city = "New Jersey";
// console.log(obj);

// Deep Copy:----------------------------------------->
// In a deep copy, the copying process recursively creates new instances of all nested objects or
// arrays. This means that the references to all objects (top-level and nested) in the copied object
// are different from the original. Modifications made to any part of the deep copy do
// not affect the original object.

// let obj = {
//   name: "John",
//   age: 30,
//   address: { city: "New York", zip: "10001", cars: ["BMW", "FORD"] },
// };

// const deepCopy = JSON.parse(JSON.stringify(obj)); // Deep Copy------->

// deepCopy.name = "Johnson";
// deepCopy.address.city = "New Jersey";
// console.log(obj);

//Questions------------------->

// const fun1 = () => {--------------------------------->
//   return 2;
// };

// const fun2 = () => {
//   return 4;
// };

// const a = (fun1(), fun2());
// console.log(a); //4

// console.log(true == "");--------------->
// console.log(1 == "1");

// const a = 10;--------------------------->
// const b = new Number(10);
// console.log(a, b);
// console.log(a === b);

// const mergeTwoStrings = (str1, str2) => {
//   let strLength;
//   let remString;
//   if (str1.length < str2.length) {
//     strLength = str1.length;
//     const diff = str2.length - str1.length;
//     remString = str2.slice(diff);
//     console.log(remString);
//   } else {
//     strLength = str2.length;
//     const diff = str1.length - str2.length;
//     remString = str1.slice(diff);
//     console.log(remString);
//   }

//   let mergedString = "";
//   for (let i = 0; i < strLength; i++) {
//     mergedString += str1[i] + str2[i];
//   }
//   console.log(mergedString + remString);
// };

// mergeTwoStrings("1234", "56789101112");

// const mergeTwoStrings = (str1, str2) => {
//   let strLen1 = str1.length;
//   let strLen2 = str2.length;
//   let i = 0;
//   let j = 0;
//   let mergedString = "";
//   while (i < strLen1 || j < strLen2) {
//     if (strLen1 > i) {
//       mergedString += str1[i];
//       i++;
//     }
//     if (strLen2 > j) {
//       mergedString += str2[j];
//       j++;
//     }
//   }
//   console.log(mergedString);
// };

// mergeTwoStrings("1234", "56789101112");

// const sum = (a, b) => {
//   // Check if the second argument is undefined (implies curried function call)
//   if (b === undefined) {
//     // Return a function that expects the second argument
//     return (c) => a + c;
//   }

//   // If both arguments are provided, sum them directly
//   return a + b;
// };

// // Usage examples:
// console.log(sum(2, 4)); // Output: 6
// console.log(sum(2)(4)); // Output: 6

// const arr = [[1, 2], [3, 4], [5, 6], 7];

// console.log(arr.flat());

// const flattenArr = (arr) => {
//   let flatArr = [];
//   arr.map((arr1) => {
//     if (Array.isArray(arr1)) {
//       arr1.map((arr2) => flatArr.push(arr2));
//     } else {
//       flatArr.push(arr1);
//     }
//   });
//   console.log(flatArr);
// };
// flattenArr(arr);

/////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
///////

// function (...promises){
//   let count =0;
//   let batch = promises.slice(0,3);

//   promise1.then((data)=>console.log(data))
//   .catch((err)=console.log(err))

// }

// let today = new Date();
// today.setDate(today.getDate() + 7);
// console.log(today.toLocaleDateString());

// const isPalindrome = (str) => {
//   const revString = str.split("").reverse().join("");
//   if (str === revString) {
//     return true;
//   } else return false;
// };

// console.log(isPalindrome("aaba"));

// How to Execute Promises in Batches:-------------->
// Here’s an implementation that executes an array of promises in batches:

// async function executeInBatches(promises, batchSize) {
//   const results = [];

//   //   // Break the array of promises into batches
//   for (let i = 0; i < promises.length; i += batchSize) {
//     try {
//       // Wait for all promises in the batch to resolve
//       const batchResults = await Promise.all(batch);
//       console.log("Batch Resolved:", batchResults); // Log resolved values
//       // Add results to the final results array
//       results.push(...batchResults);
//     } catch (err) {
//       console.error("Batch Error:", err); // Handle any errors from the batch
//     }
//   }

//   return results;
// }

// // Example usage:
// const asyncTask = (n) => new Promise((resolve) => setTimeout(() => resolve(n), 1000));

// const tasks = [
//   asyncTask(1),
//   asyncTask(2),
//   asyncTask(3),
//   asyncTask(4),
//   asyncTask(5),
//   asyncTask(6)
// ];

// // Run with a batch size of 2
// executeInBatches(tasks, 2).then((results) => console.log(results));

//Max numbers of consecutive 1's in a binary array with k 0 swaps----------->

// const maxNumOnes = (arr, k) => {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let replacers = k;
//     let count = 0;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] === 1) {
//         count++;
//       } else if (arr[j] === 0 && replacers > 0) {
//         count++;
//         replacers--;
//       } else {
//         break;
//       }
//     }
//     if (count > max) {
//       max = count;
//     }
//   }
//   return max;
// };
// console.log(maxNumOnes([1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1], 2));

//Deboncing vs Throttling------>

//Debouncing---> Making an api call only when the user stops typing for 200ms
// const makeCall = async () => {
//   const getData = await "API_CALL";
// };
// const [inputString, setInputString] = useState("");

// useEffect(() => {
//   let timeout = null;

//   timeout = setTimeout(() => {
//     makeCall();
//   }, 200);

//   return () => {
//     clearTimeout(timeout);
//   };
// }, [inputString]);

// <input value={inputString} onChange={(e) => setInputString(e.target.value)} />;

//Throtolling-------------->

// Comparing two objects---------------------->
// const objA = { name: "John", details: { age: 25, city: "New York" } };
// const objB = { name: "John", details: { age: 25, city: "New York" } };

//Deep Comp--->

//Using JSON.stringify will fail when the order of keys are diffrent
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 2, a: 1 };

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // false

// const obj1 = { a: 1, b: undefined };
// const obj2 = { a: 1 };

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true (because `undefined` is ignored)

// const obj1 = {
//   name: "Zatin",
//   location: { address: "21,Baker's Street", city: "Delhi" },
// };
// const obj2 = {
//   name: "Zatin",
//   location: { address: "21,Baker's Street", city: "Delhi" },
// };

// const deepCheck = (obj1, obj2) => {----------------->
//   if (obj1 === obj2) return true;
//   if (
//     typeof obj1 !== "object" ||
//     typeof obj2 !== "object" ||
//     obj1 === null ||
//     obj2 === null
//   ) {
//     return false;
//   }

//   const objKeys1 = Object.keys(obj1);
//   const objKeys2 = Object.keys(obj2);
//   if (objKeys1.length !== objKeys2.length) {
//     return false;
//   }
//   for (let key of objKeys1) {
//     if (!deepCheck(obj1[key], obj2[key])) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(deepCheck(obj1, obj2));

//Or use Library like Load Lash

// Promises chaining example why better than callbacks-------------->

// const firstTask = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("First task done");
//       resolve(10);
//     }, 1000);
//   });
// };

// const secondTask = (resultFromFirst) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Second task done, got ${resultFromFirst}`);
//       resolve(resultFromFirst * 2);
//     }, 1000);
//   });
// };

// const thirdTask = (resultFromSecond) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Third task done, got ${resultFromSecond}`);
//       resolve(resultFromSecond + 5);
//     }, 1000);
//   });
// };

// // Start the promise chain
// firstTask() //10
//   .then((result) => secondTask(result)) //20
//   .then((result) => thirdTask(result)) //25
//   .then((finalResult) => console.log(`Final result: ${finalResult}`))
//   .catch((error) => console.error(error)); // thrws error if any promise in chain resolve to solve

// Why Promises Are Better----------------->

// Readability: Promises provide cleaner, more readable code with proper chaining and linear flow.

// Error Handling: Centralized error handling with .catch() instead of manual error propagation.

// Control: Promises avoid "inversion of control," giving you control over how and when asynchronous operations resolve.
//         The calling func dont know the callback will get exectued how many times or even once

// Chaining: Built-in support for chaining and combining multiple promises using Promise.all,
//         Promise.race, and others.

// Modern Syntax: Compatible with modern async/await syntax for even better readability.
