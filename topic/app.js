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
