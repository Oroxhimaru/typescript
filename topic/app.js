"use strict";
var a = 1;
function watch() {
    console.log(a);
}
watch();
//prmitive type in stack memory
var b = 1;
var c = b;
c = 2;
console.log(c);
console.log(b);
//reference type in heap memory
var d = [1, 2, 3];
var e = d;
e.pop();
console.log(d);
console.log(e);
{
    //array
    var arr = [1, 2, 3, 4, 5];
    console.log(arr);
    //tuple
    var arr1 = [1, "hello", true];
    console.log(arr1);
}
{
    //enum
    let Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    console.log(Color.Red);
}
{
    //any
    var z = 1;
    let a;
}
{
    //unknown
    let x;
    x = 1;
    x = "hello";
    if (typeof x === "string") {
        console.log(x);
    }
}
{
    //void
    function hello() {
        console.log("hello");
    }
}
{
    //return type
    function add(a, b) {
        return a + b;
    }
}
{
    //null
    let x;
    x = "hassan";
    x = null;
    //  x = 11;  error will come because either null or string
}
{
    //never
    // function abdc() : never{
    //     while (true) {
    //         console.log("hello");
    //     }
    // }
    //  abdc();
    //  console.log(abdc);  //as you can see this function is dull now because it type is never
}
{
    //type inference
    let a = 1; //now value will define by itself that it is a number. this is called type inference
}
{
    //type  anotation
    let a = 1; //we have to define the type of variable. this is called type anotation
}
//interfaces and type aliases
{
    function printUser(obj) {
        console.log(obj.name);
        //obj.age;
    }
    printUser({ name: "hassan", age: 20 }); //have to give value to all properties of interface otherwise error will come
}
//also we can make new  property opitional by adding ? after the property name.
{
    function printUser(obj) {
        console.log(obj.name);
    }
    printUser({ name: "hassan", age: 20 });
}
// extending interface
{
    function printUser(obj) {
        console.log(obj.name);
        //obj.
    }
    printUser({ name: "hassan", age: 20, role: "admin" });
}
//two interfaces of same name can be used in same file
{
    function printUser(obj) {
        console.log(obj.name);
        //obj.
    }
    printUser({ name: "hassan", age: 20, role: "admin" });
}
// type aliases
{
    let a = "hassan";
}
//type aliases another example
{
    let a = "hassan";
}
// intersection type
{
    let a = {
        name: "hassan",
        age: 20,
        role: "admin"
    };
    console.log(a);
}
//Classes & Objects
{
    class User {
        constructor() {
            this.name = "hassan";
            this.age = 20;
            this.email = "hassan@gmail.com";
        }
    }
    let user = new User();
    let user2 = new User();
}
//constructor
{
    class User {
        constructor(name, age, email) {
            this.name = name;
            this.age = age;
            this.email = email;
        }
    }
    let user = new User("hassan", 20, "hassan@gmail.com"); //hassan goes to name of constructor then got saved in this.name
    console.log(user);
    let user2 = new User("ali", 20, "ali@gmail.com");
}
//public keyword
{
    class Example {
        constructor(name) {
            this.name = name;
        }
        greet() {
            console.log(`Hello, ${this.name}`);
        }
    }
    const obj = new Example("Alice");
    console.log(obj.name); // ✅ Allowed
    obj.greet(); // ✅ Allowed
}
//this keyword
{
    class User {
        constructor(name, age, email) {
            this.name = name;
            this.age = age;
            this.email = email;
        }
        print() {
            console.log(this.name);
        }
    }
    let user = new User("hassan", 20, "hassan@gmail.com");
    user.print();
}
//access modifiers private
{
    class Example {
        constructor(secret) {
            this.secret = secret;
        }
        showSecret() {
            console.log(`Secret is: ${this.secret}`); // ✅ Allowed inside the class
        }
    }
    const obj = new Example("Hidden");
    // console.log(obj.secret); // ❌ Error: Property 'secret' is private
    obj.showSecret(); // ✅ Allowed
}
//protected
{
    class Parent {
        constructor(secret) {
            this.secret = secret;
        }
    }
    class Child extends Parent {
        showSecret() {
            console.log(`Secret from parent: ${this.secret}`); // ✅ Allowed in subclass, this not allowed in private
        }
    }
    const obj = new Child("Hidden Message");
    // console.log(obj.secret); // ❌ Error: Property 'secret' is protected
    obj.showSecret(); // ✅ Allowed (accessed inside subclass)
}
//Modifier	Inside Class	Outside Class	Subclasses (Child Classes)
// public	✅ Yes	✅ Yes	✅ Yes
// private	✅ Yes	❌ No	❌ No
// protected	✅ Yes	❌ No	✅ Yes
//readonly
{
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    let user = new User("hassan");
    // user.name = "ali"; //error ,  cannnot cchange the value of name because it is readonly
}
//optional properties 
{
    class User {
        constructor(name, age, email) {
            this.name = name;
            this.age = age;
            this.email = email;
        }
    }
    let user = new User("hassan", 20, "hassan@gmail.com");
    console.log(user);
}
//parameter properties
{
    class User {
        constructor(name, age, email) {
            this.name = name;
            this.age = age;
            this.email = email;
        }
    }
    let user = new User("hassan", 20, "hassan@gmail.com");
    console.log(user);
    //this public private this known as parameter properties
}
//getters and setters
{
    class Person {
        constructor() {
            this._name = "";
        }
        // Getter
        get name() {
            return this._name;
        }
        // Setter
        set name(newName) {
            if (newName.length < 3) {
                throw new Error("Name must be at least 3 characters long.");
            }
            this._name = newName;
        }
    }
    const person = new Person();
    person.name = "John"; // Using setter
    console.log(person.name); // Using getter
    /*Explanation:
  _name is a private property (not directly accessible outside the class).
  get name() allows reading the value of _name.
  set name(value) lets you update _name, with a validation check.
  If the name is too short, it throws an error.
  */
}
