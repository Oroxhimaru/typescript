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
    var arr1:  [number, string, boolean] = [1, "hello", true];
    console.log(arr1);
}


{
    //enum
    enum Color {
        Red = 1,
        Green = 2,
        Blue = 3
    }
    console.log(Color.Red);
}


{
    //any
    var z: any = 1;
    let a;
}


{
    //unknown
    let x: unknown;
    x = 1;
    x = "hello";
    if (typeof x === "string") {
        console.log(x);
    }
}

{
    //void
    function hello(): void {
        console.log("hello");
    }
}

{
    //return type
    function add(a: number, b: number): number {
        return a + b;
    }
}

{
    //null
    let x: null | string;
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
    let a: number = 1; //we have to define the type of variable. this is called type anotation
}


//interfaces and type aliases
{
    interface User{
        name: string;
        age: number;
    }
    function printUser(obj: User){
        console.log(obj.name);
        //obj.age;
    }
    printUser({name: "hassan", age: 20}); //have to give value to all properties of interface otherwise error will come
}

//also we can make new  property opitional by adding ? after the property name.
{
    interface User{
        name: string;
        age: number;
        email?: string; //it is optional
    }
    function printUser(obj: User){
        console.log(obj.name);
    }
    printUser({name: "hassan", age: 20});
}

// extending interface
{
    interface User{
        name: string;
        age: number;
        email?: string;
    }
    interface Admin extends User{ //admin can have all properties of user plus his own properties
        role: string;
    }
    function printUser(obj: Admin){
        console.log(obj.name);
         //obj.
    }
    printUser({name: "hassan", age: 20, role: "admin"});
}


//two interfaces of same name can be used in same file
{
    interface User{
        name: string;
        age: number;
        email?: string;
    }
    interface User{
        role: string;
    }
    function printUser(obj: User){
        console.log(obj.name);
        //obj.
    }
    printUser({name: "hassan", age: 20, role: "admin"});
}


// type aliases
{
    type Human = string;
    let a: Human = "hassan";
}

//type aliases another example
{
    type value = string | number;
    let a: value = "hassan";
}

// intersection type
{
  type User = {
        name: string;
        age: number;
    }
    type Admin = {
        role: string;
    }
    type UserAdmin = User & Admin; //UserAdmin will have all properties of User and Admin
    let a: UserAdmin = {
        name: "hassan",
        age: 20,
        role: "admin"
    }
    console.log(a);
}

//Classes & Objects
{
    class User {
        name = "hassan";
        age = 20;
        email = "hassan@gmail.com";
    }
    let user = new User();
    let user2 = new User();
}

//constructor
{
    class User {
        name: string;
        age: number;
        email: string;
        constructor(name: string, age: number, email: string) {
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
        public name: string;  // Can be accessed anywhere
    
        constructor(name: string) {
            this.name = name;
        }
    
        public greet() {
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
        constructor(public name: string, public age: number, public email: string) {
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
        private secret: string;
    
        constructor(secret: string) {
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
        protected secret: string;
    
        constructor(secret: string) {
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
        readonly name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
    let user = new User("hassan");
   // user.name = "ali"; //error ,  cannnot cchange the value of name because it is readonly
}

//optional properties 
{
    class User {
        name: string;
        age: number;
        email?: string; //optional property
        constructor(name: string, age: number, email?: string) {
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
        constructor(public name: string, public age: number, public email?: string) {
        }
    }
    let user = new User("hassan", 20, "hassan@gmail.com");
    console.log(user);
    //this public private this known as parameter properties
}

//getters and setters
{
  class Person {
    private _name: string = "";

    // Getter
    get name(): string {
      return this._name;
    }

    // Setter
    set name(newName: string) {
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