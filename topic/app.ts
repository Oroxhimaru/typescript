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