//After a through understanding of Typescript we now head to more advanced topics that indclude OOPS with TypeScript
//So if you are new to OOP
//What exactly is OOPS
//OOPs stands for object oriented programming
//So lets start with basics 
//OOPS revolves around classes and object
//let's start
//; is a must
//This is the defination of a basic class
class Myself{
    name:string;
    profession:string;
};

//Alright so how do i use it i should create an instance so lets create an instance for the exisitng class

let myobj:Myself=new Myself();
//This creates an empty object
//now lets add the name and profession and lets console.log it
myobj.name="geek";
//You cant assign any value remember its ts and not js so a type specific value is a must
myobj.profession="Developer";
//Console logging it
console.log(myobj.name,myobj.profession);
//We can see it values are assingned

//now as a beginner it is also good to know some definitons so here are some standard definations of OOPs in general
//here goes some basic terms we will learn along in the course
//class and object

// A class in programming is a blueprint or a template for creating objects.
// It defines a set of properties (attributes) and methods (functions) that characterize any object created from that class. 
//The objects created from a class are instances of that class.

//now lets explore how to have methods in the class
//and also let us look at using constructors and using access specifers
class CalFor2Nums{
    //made this private so that only the object can access the methods
    private a:number;
    private b:number;

     //To define a consturctor just type Constructor
     //This is a default constructor
     //Note.It doesnt return any value
    // constructor(){
    //     this.a=0;
    //     this.b=0;
    // }
    //Now lets look into parameretised constructor
    constructor(a:number,b:number){
        this.a=a;
        this.b=b;
    }
    //now lets have a method
    add():number{
        return this.a+this.b
    }
    subtract():number{
        return this.a-this.b;
    }
    //now before we take into account multiply and divide lets use acces spectifers
    //so we can make a element in the class public protected or private
    //this is example for private
    //You cannot access private methods outside the class
    private mod():number{
        return this.a%this.b;
    }
    //this for protected
    //This is for restricted accccess
    protected sqa():number{
        return this.a*this.a;
    }
    //returning back to out example lets complete mul and division operators the cover getters setters inheritance and finally conclude with decorators and attributes
    mul():number{
        return this.a*this.b
    }
    div():number{
        return this.a/this.b
    }
}
//now lets create an object
let myobj2:CalFor2Nums=new CalFor2Nums(2,3)
//now lets access the method
console.log(myobj2.add(),myobj2.subtract(),myobj2.mul(),myobj2.div())

//now lets learn about basics of inhertance and learn about getters and setters
//lets move to our old example class A,B where A has property of name,salary and B have details of profession 
class A{
    name:string;
    salary:number;
}
//lets extend A to B
class B extends A{
    profession:string;
}
//now if you create object of class B it also creates an object of class A and you can set the properties
let myobj3:B=new B();
myobj3.name="Geek"
myobj3.profession="Sde"
myobj3.salary=500000
console.log(myobj3.name,myobj3.profession,myobj3.salary)
//This is one of the method of extending classes now lets learn about interfaces and abstract class and try to implement them in a very easy manner
//an absttact class need not have concrete methods
//By this i mean it doesnot need to have methods defined
//example as follows
abstract class C{
    abstract display():unknown;
}
//also we can use intefaces where we have some similar kind functionallity that can be implemented
interface D{
    show():unknown;
}
//extending class e with abstract class c and implementing d
//rememer class can only extend one class implements many interfaces
class E extends B implements D{
    show():void{
        console.log(this.name,this.profession,this.salary)
    }
}
let myobj4:E=new E();
myobj4.name="Geek"
myobj4.profession="Competetive Programmer"
myobj4.salary=1000000
myobj4.show()
//now the abstact classs
class F extends C{
    display(): void{
        console.log("abstact method implemented")
    }
}
let myobj5:F=new F()
myobj5.display();
//This is the basics of abstract class ,inhertance and intefaces implementation
//Getters,setters
class Person {
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let personObj: Person = new Person();
personObj.name = "Geek";
console.log(personObj.name);

// Decorators and Attributes are comming soon ..


//Thats it you now know typescript and are ready to work with it congrats on finishing this course.
//If You like it please follow me and star this repo so that you get more such content.
//Thank You.
//Geek signing off.

