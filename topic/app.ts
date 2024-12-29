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
