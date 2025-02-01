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


