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
//static member example
{ //we can use static keyword to make a member static and without new keyword we can access it
    class Circle {
        static calculateArea(radius) {
            return Circle.pi * radius * radius;
        }
    }
    Circle.pi = 3.14;
}
{
    //abstract class and method
    class Animal {
        move() {
            console.log("Roaming the earth...");
        }
    }
    class Cat extends Animal {
        makeSound() {
            console.log("Meow!");
        }
    }
    const myCat = new Cat();
    myCat.makeSound(); // Output: "Meow!"
    myCat.move(); // Output: "Roaming the earth..."
}
{
    //  Named Functions in TypeScript
    //A named function is a function that is assigned a specific name and can be called by that name or using the this keyword. To declare a named function in TypeScript.
    //You can use the following syntax
    // syntax for named function
    //function functionName(parameter1: type, parameter2: type): returnType {
    // function body
}
//Here's an example that demonstrates a named function in TypeScript:
// Example: Adding two numbers using a named function
function add(x, y) {
    return x + y;
}
// calling the function
const Result = add(10, 20);
console.log(Result); // returns 30
{
    //Anonymous Function: TypeScript Anonymous Functions are functions that are not bound to an identifier i.e., anonymous functions do not have name of the function. Anonymous functions are also called as function expressions.
    // Anonymous functions are used as inline functions. These are used when the function is used only once and does not require a name. The best example is a callback function.
    // syntax for anonymous function:
    // let anonymousFunction = function ([arguments]) {
    //   // function body
    // };
    //The following example shows how to declare an anonymous function in TypeScript:
    // Example of anonymous function to multiply two numbers and return the result
    let multiply = function (x, y) {
        return x * y;
    };
    // calling the function
    const finalResult = multiply(10, 20);
    console.log(finalResult); // returns 200
    //In the example above, the add function takes two parameters (xand y) of type number and returns the sum of the two numbers. The function is then called with the arguments 10 and 20, and the returned value (30) is printed to the console.
    //Next, let's explore anonymous functions in TypeScript.
}
{
    //Arrow Functions in TypeScript
    /*In TypeScript, the arrow function is a shorthand syntax for defining anonymous functions,
     also known as function expressions.
     It was introduced in ECMAScript 6 (ES6) and provides a concise way to write function expressions.
     The arrow function is also known as a fat arrow function because it uses the => operator.
     The syntax for an arrow function in TypeScript is as follows:
    
    // syntax for arrow function
    
    (parameter1: type, parameter2: type): returnType => {
      // function body
    };
    Here's an example that demonstrates the usage of an arrow function in TypeScript:
    */
    // Example: Getting the full name using an arrow function
    let fullName = (firstName, lastName) => {
        return firstName + " " + lastName;
    };
    // calling the function
    const result = fullName("Isaiah Clifford", "Opoku");
    console.log(result); // outputs: Isaiah Clifford Opoku
}
{
    //Specifying Function Parameters and Return Types in TypeScript
    /*
      In TypeScript, you have the ability to specify the types of function parameters and the return type of the function.
      This helps in providing type safety and better understanding of the function's behavior.
      The syntax for specifying parameter types and return types in TypeScript is as follows:
  
     function functionName(parameter1: type, parameter2: type): returnType {
    // function body
      }
  Let's take a look at an example that demonstrates the usage of parameter types and return types in TypeScript:
       */
    // Example: Adding two numbers and returning the result
    function padd(x, y) {
        return x + y;
    }
    // calling the function
    const pResult = add(100, 20);
    console.log(pResult); // returns 30
    /*In the example above, the padd function takes two parameters (x and y), both of which are of type number. The return type of the function is specified as number as well. The function adds the values ofx and y and returns the result.
    
    By explicitly specifying the types for function parameters and the return type, TypeScript ensures that the function is used correctly and provides helpful type checking during development. */
}
{
    /*Optional Parameters

In TypeScript, you have the ability to make function parameters optional by adding a question mark ? after the parameter name. This allows you to call the function with or without providing a value for the optional parameter. Here's an example: */
    function OptionalAdd(x, y) {
        return x + (y || 0);
    }
    // Calling the function
    const result = OptionalAdd(10);
    console.log(result); // Output: 10
}
{
    /*  Default Parameters
  In TypeScript, you can specify default values for function parameters by using the = operator. This allows you to provide a fallback value if a parameter is not explicitly passed when calling the function.
  
  Here's an example: */
    // Example of function to add two numbers and return the result
    function DefaultAdd(x, y = 10) {
        return x + y;
    }
    // calling the function
    const DefaultResult = DefaultAdd(10);
    console.log(DefaultResult); // returns 20
}
{
    /*Rest Parameters
In TypeScript, the rest parameter allows you to pass an indefinite number of arguments to a function. It is denoted by three dots... followed by the name of the parameter. The rest parameter collects the remaining arguments into an array of the specified type.
Here's an example */
    //// Example: Dividing two numbers and returning the result using rest parameter
    function divide(...numbers) {
        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result /= numbers[i];
        }
        return result;
    }
    // calling the function
    const restResult = divide(100, 2, 5);
    console.log(restResult); // returns 10
    /*Step-by-Step Execution:
    ...numbers collects all arguments into an array:
    numbers = [100, 2, 5]
    
    let result = numbers[0];
    result = 100
    
    Loop starts from index 1:
    
    First iteration (i = 1):
    
    result = result / numbers[1]
           = 100 / 2
           = 50
    Second iteration (i = 2):
    
    result = result / numbers[2]
           = 50 / 5
           = 10
    Loop ends (no more elements). The function returns result, which is 10.
    
     */
}
{
    /*
Let look at another example of rest parameter: */
    function RestAdd(...numbers) {
        return numbers.reduce((x, y) => x + y);
    }
    // calling the function
    const RestResult = RestAdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log(RestResult); // returns 55
    /*1 + 2 = 3
    3 + 3 = 6
    6 + 4 = 10
    10 + 5 = 15
    15 + 6 = 21
    21 + 7 = 28
    28 + 8 = 36
    36 + 9 = 45
    45 + 10 = 55
     */
}
{
    // Spread Operator Example
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(...numbers); // Output: 1 2 3 4 5 6 7 8 9 10
    // Rest Parameter Example
    function RestAdd(...numbers) {
        return numbers.reduce((x, y) => x + y);
    }
    const RestResult = RestAdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log(RestResult); // Output: 55
    /*In the spread operator example, the ...numberssyntax is used to spread the elements of the numbers array. It expands the array into individual elements.
    
    In the rest parameter example, the ...numbers syntax is used to collect the individual arguments into an array called numbers. The rest parameter allows you to pass any number of arguments, and they will be collected into the array.
    
    It's important to remember the difference between spreading and collecting elements when using the spread operator and rest parameter.*/
}
{
    function addOverload(x, y) {
        return x + y;
    }
    // calling the function
    const addOverloadResult1 = addOverload(10, 20);
    console.log(addOverloadResult1); // returns 30
    const addOverloadResult2 = addOverload("Isaiah", "Opoku");
    console.log(addOverloadResult2); // returns Isaiah Opoku
}
{
    //generics
    /*Sure! Let’s understand **generics in TypeScript** in **easy words** with **simple examples**.

---

## 🧠 What are Generics?

Generics = **Reusable code that works with any type**.

You can think of generics as **placeholders for types**.
Instead of hardcoding a specific type (like `number` or `string`), we use a **generic type** (like `<T>`) that can be **any type** the user provides.

---

## 🔧 Why Use Generics?

Without generics:

* Your code is either **repeated** or **less type-safe**.

With generics:

* You write **one function/class/interface** that works for **many types**.

---

## ✅ Simple Example

### 🎯 Without Generics

```ts
function printNumber(value: number) {
  console.log(value);
}

function printString(value: string) {
  console.log(value);
}
```

You're writing 2 functions for 2 types — repeated code!

---

### 🎯 With Generics

```ts
function printValue<T>(value: T) {
  console.log(value);
}
```

Now you can call:

```ts
printValue<number>(123);     // prints 123
printValue<string>("Hello"); // prints Hello
printValue<boolean>(true);   // prints true
```

`<T>` is a placeholder for **any type**.
You can name it whatever you want (`T`, `U`, etc.), but `T` is common (stands for "Type").

---

## 📦 Another Example: Generic Array Function

```ts
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstItem([1, 2, 3]);         // number
const firstString = getFirstItem(["a", "b", "c"]);   // string
```

* The function works with any array type.
* TypeScript automatically knows the return type.

---

## 🧰 Generic Interface Example

```ts
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "hello" };
```

---

## 🪄 Real-Life Analogy

Think of generics like a **template** or **mold**:

> You create a cup mold (generic) — and later decide whether to pour tea, coffee, or juice (type).

---

## 🧾 Summary

| Term             | Meaning                                |
| ---------------- | -------------------------------------- |
| `<T>`            | Placeholder for a type                 |
| Generic Function | Function that works with any type      |
| Benefit          | Reusable, flexible, and type-safe code |

---

Let me know if you want generics in classes or a real-world example like a generic API response handler.
 */
}
{
    //modules
    /*What Are Modules in TypeScript?
Modules are like separate files of code that you can import and reuse in other files.

Each file in TypeScript (or JavaScript) is treated as a module if it uses export or import.
Why Use Modules?
To organize code (e.g. separate logic, functions, types)

To reuse code (no need to write again and again)

To keep code clean and easy to maintain
 Basic Example
👉 math.ts (This is a module)
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14;
main.ts (Another module using math.ts)
import { add, PI } from './math';

console.log(add(5, 3)); // 8
console.log(PI);        // 3.14
How to Export
There are two ways to export:

1. Named Export
You export multiple things with a name.
export const name = 'Ali';
export function greet() { }
You import like:
import { name, greet } from './file';

 Default Export
You export one main thing from a file.
export default function hello() {
  console.log('Hello!');
}
You import like:

import hello from './file';
 */
}
{
    /*Type assertion means telling TypeScript:

"I know the type of this value better than you."

You use it when you’re sure about a value’s type, but TypeScript is not sure.
🛠️ Syntax of Type Assertion
There are two ways to write it:

1. Angle Bracket syntax
let value: any = "Hello";
let length = (<string>value).length;
2. as syntax (preferred in React and modern code)
let value: any = "Hello";
let length = (value as string).length;

📦 Why Use Type Assertion?
TypeScript may not always know the type, like:

when you're using any

when working with DOM

when fetching data from an API

You use assertion to force TypeScript to treat a value as a specific type.
*/
}
{
    /*
    🧠 What Are Type Guards?
Type Guards are checks you add to your code that help TypeScript understand the type of a variable at runtime.

They are used when you have multiple possible types (e.g. union types like string | number) and you want to narrow it down to one specific type.

💡 Why Use Type Guards?
When you’re not sure what type a value is (like from user input or an API), a type guard helps TypeScript (and you!) know what to safely do with it.
✅ Example 1: typeof Type Guard
 */
    function printValue(value) {
        if (typeof value === 'string') {
            console.log("It's a string:", value.toUpperCase());
        }
        else {
            console.log("It's a number:", value.toFixed(2));
        }
    }
    printValue("hello"); // Output: It's a string: HELLO
    printValue(123.456); // Output: It's a number: 123.46
}
{
    function showInfo(person) {
        if ("role" in person) {
            console.log("Admin Role:", person.role);
        }
        else {
            console.log("User Age:", person.age);
        }
    }
    showInfo({ name: "John", role: "Admin" });
}
{
    /*✅ Example 3: instanceof Type Guard (for classes) */
    class Dog {
        bark() {
            console.log("Woof!");
        }
    }
    class Cat {
        meow() {
            console.log("Meow!");
        }
    }
    function speak(animal) {
        if (animal instanceof Dog) {
            animal.bark();
        }
        else {
            animal.meow();
        }
    }
}
{
    function isCar(vehicle) {
        return vehicle.type === "car";
    }
    function handle(vehicle) {
        if (isCar(vehicle)) {
            console.log("Car speed:", vehicle.speed);
        }
        else {
            console.log("Bike gear:", vehicle.gear);
        }
    }
}
