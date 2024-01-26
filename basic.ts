//Before we go to the depth of TypeScript we first need to know what exactly is typescript
//TS is basically JavaScript + type support
//What do i exactly mean by this
//You can put in any javascript code and add a fixed data type for it
//TypeScript is basically superset of javascript
//TypeScript can be quite useful if we want to avoid any type of errors that is related to runtime type checks
//It also supports all versions of js 
//So no matter which version of JS is used it can be converted
//Basics of JS is a must for TS

//Compilation process
//For js it is node filename.js
//However for ts it does not remain the same
//Run the following cmds
// npm install -g ts-node typescript '@types/node'
//For running the file it is 
//tsc basic.ts
//node basic.ts
//also after every compilation make sure that you delete the same named .js file to avoid troubles
//Types in typescript
//number string boolean are some of the types in ts
//This is a start so similar to js
//basic.js is the transormmed code
let n1: number = 1;
let s1: string = "Hello World";
let b1: boolean = false;

function FuncOne() {
    console.log(typeof n1 + ` n1=${n1}`);
    console.log(typeof b1 + ` b1=${b1}`);
    console.log(typeof s1 + ` s1=${s1}`);
}


//call the functon FuncOne()
FuncOne()

//Some of the key types in ts
//now another of exprlity specify types

let mynum:Number;
let myString:string;
let mybool:boolean;

//now if i assign mynum with 2
mynum=2;
myString="Hello"
mybool=true;
console.log(mynum,myString,mybool)

//now if i assign mynum with "hello" it gives me error at compile time this is beauty of TypeScript
//mynum="Hello";
//Still if i run by ignoring
// at compilation basic.ts:48:1 - error TS2322: Type 'string' is not assignable to type 'Number'.
//this is typescript's power 
//but wait hold on ..
//what about function 
//even for funtion both at returning the value and accepting the we mention the type
//For example the Date
function getDate():string{
    return new Date().toString();
}
console.log("The date now is "+getDate())
//what about  array's
//its quite simple
//one way of declaring
let myarr:number[]=[1,2,3,4,5];
//the second way
let myarr2:Array<number>=[10,20,30,40,50]
//empty array
let myarr3:Array<number>=[]
//now console.log and see this results
console.log(myarr,myarr2,myarr3)
//normal perform some basic op to myarr3
//push
//add elements to the array
for(let i=1;i<=10;i++){
myarr3.push(i)
}
console.log(myarr3)
//shift
myarr3.shift()
console.log(myarr3)
//unshift add 20 to the begin
myarr3.unshift(20)
console.log(myarr3)
//now pop an element
console.log(myarr3.pop())

//use array.map
function square(a:number):number{
    return a*a;
}
console.log("Without Squaring");
console.log(myarr3);
console.log("Squaring");
console.log(myarr3.map(square));

//use array.filter
console.log("even numbers in myarr3")
//=== use of equal to
function filter1(a:number):boolean{
    return (a&1)===0;
}
//using filter of even numbers
console.log(myarr3.filter(filter1))
//using another filter function for odd numbers
console.log("odd numbers in myarr3")
function filter2(a:number):boolean{
    return (a%2)!==0
}
console.log(myarr3.filter(filter2));
//now lets deal with strings
let mystring2="Hey!.This is a Geek who loves geeks for geeks and leetcode.I also like contributing to Open Source Projects."
//let's deal with string
//finding first occuance of geeks
console.log(mystring2.indexOf("geeks"));
//finding last occurance of geeks
console.log(mystring2.lastIndexOf("geeks"));
//replace I with The Geek
console.log(mystring2.replace("I","The Geek"));
//charAt
console.log(mystring2.charAt(1));
//now split
console.log(mystring2.split('.'))
//now slice
console.log(mystring2.slice(0,))
//now search leetcode
console.log(mystring2.search("leetcode"))
//now  upper case
console.log(mystring2.toUpperCase())
//to lower case
console.log(mystring2.toLowerCase());

//many more methods are there you can explore

//now let's look at array and object destructing and also look into interface.
//learning about destructing
//a basic way
let [...x]:number[]=myarr;
console.log(x)
//illustating if i need the first element
//again standard destructing examples
let [x1,...y]:number[]=myarr
console.log(x1,y)

// now we will dive deep into objects
//this is one of the methods but not a recommended one
let obj1:Object;
obj1={
    name:"Geek",
    prof:"web developer"
}
console.log(obj1)
//The recommmended one would be
//create an interface
interface Profile{
    name:string,
    prof:string,
}
//alternately type could also be used but i would prefer an interface
type Profile2={
    name:string,
    prof:string
}
let obj2:Profile;
obj2={
    name:"Geek2",
    prof:"App developer"
}
console.log(obj2);
//now looking at object destructuring
let {name:x3,...y3}:Profile=obj2;
console.log("Object destructing")
console.log(x3,y3)
//These are the recommended pratices
//Now we dive deep into more features offered by TypeScript
//1. in typescript if i dont know the type then i can use any or unknown
//example
let something:any
something=2
console.log("Something is of the type "+ typeof(something))
something="hi"
console.log("Something is of the type "+typeof(something))
// or we can also use unknown
let something1:unknown
something1=2
console.log("Something is of the type "+ typeof(something1))
something1="hi"
console.log("Something is of the type "+typeof(something1))
//2.Union 
//So if you feel that an input could be both an number and a string we can use union
//example
let u1:number|string;
u1=2
console.log("u1 is of the type "+ typeof(u1))
u1="hi ji"
console.log("u1 is of the type "+ typeof(u1))
//These are other key features to be known in TypeScript

//Classes and objects in Type Script
