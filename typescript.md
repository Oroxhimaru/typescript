# info

1. typescript is the better version of javacript
2. more features than javascript.
3. typescript gives you type safety.
4. any code javascript code written in typescript file is a valide typescript code.
5. install node, npm, typescript in your system. tsc init for installing config file. and tsc filename.ts for compiling the code.
6. with tsc --watch you can compile the code in real time.
7. primitive types are number, string, boolean, null, undefined, symbol, bigint.
8. reference types are object, array, function.
9. prmitive types copy by value and reference types copy by reference.
10. prmitive types are stored in stack and reference types are stored in heap.
11. difference between array and tuple is that array can store any type of data but tuple can store only specific type of data.
12. enum / enumeration is a way to define a set of named constants. 
13. Any in typescript is a type that can be any type of data.
14. unknown is a type that can be any type of data but it is not assignable to any other type.
15. you can only  use unknown when you describe the type. while in any you can use it without describing the type.
16. void is a type that can be used as a return type of a function that does not return anything.
17. if function return it then we need to tell the type of return value.
18. null is a type that is null.
19. never is a type that returns nothing.
20. type inference is a feature that allows typescript to infer the type of a variable based on the value assigned to it.
21. type annotation is a way to tell typescript the type of a variable.
22. annotation and assertion are the same thing.
23. interface is a way to define a type of object. 
24. also in interface you can't add new properties to the object. otherwise it will throw an error. you need to describe the new properties in the interface. also we can make new  property opitional by adding ? after the property name.
25. extending interface is a way to extend the interface, means using the other interface in the current interface.
26. two interface of same  name can be merged.
27. type alias is use to give a name to a type.
28. differnce between type alias and interface is that you can't have same name type but in interface you can merge two interface of same name.
29. type alias can be used with primitive types, union types, intersection types, tuple types, and literal types. while interface use for object types.
30. intersection types are used to combine multiple types into one.
31. class is a blueprint for creating objects.
32. constructor is a special method that is called when an object is created. when class use first thing which run is constructor.
33. if you directly give value in construuctor then use public keyword.
34. in access modifier the difference between public and private is that public is accessible from outside the class and private is accessible only from inside the class.
35. in typescript we can use access modifier in constructor parameter.
36. getters and setters are used to get and set the value of a property.
37. static members are used to access the members of a class without creating an instance of the class.
38. An abstract class cannot be instantiated directly, but it can be inherited by other classes. Abstract classes can have both abstract and non-abstract methods
39. functions in tyypescript are first class citizens. meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.