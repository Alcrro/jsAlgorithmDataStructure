/*
? 1. Is a scripting or programming language that allows you to implement complex features on web page.

?	2.	a. JS Objects are prototype-based.
?			b. JS file has the file extension ".js" and it is interpreted but not compiled, every browser has the js interpreter to execute JS code.
?			c. JS does not support multithreading, although it can simulate it through the use of web workers
?			d. JS is dynamically typed, which means that data type are determined at runtime
?			e. JS uses less memory.

?	3.	-	boolean,
?			-	number
?			-	string
?			-	null
?			-	undefined


? 4. 	

?			(==)  is often referred to as 'loose equality' because it performs type coercion before making any comparison.
?			So, here are the rules for type coercion in JavaScript :

?			If either operand is a string, the other operand will be converted to a string.
?			If either operand is a number, the other operand will be converted to a number.
?			If either operand is a boolean, it will be converted to a number (true becomes 1 and false becomes 0).
?			If one operand is an object and the other is a primitive value, the object will be converted to a primitive value before the comparison is made.
?			If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise it will return false.


? 		(===) also referred to as "strict equality", works similarly to how double equals (==) works, with one important difference: it does not convert the types of the operands before comparing.


?		The == and === operators in JavaScript are comparison operators that we use to determine if two values are equal or not.

?		The == operator performs a loose equality comparison that performs type coercion if necessary to make the comparison possible.

? 	The === operator, on the other hand, performs a strict equality comparison that does not perform type coercion and requires the operands to have the same type (as well as the same value).

?		Type coercion in JavaScript can sometimes lead to unexpected results, so it's mostly recommended to use the strict equality operator === instead of the loose equality operator ==.


? 5.	The isNaN() method returns true if a value is NaN. The isNaN() method converts the value to a number before testing it.

? 6. A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

? 11. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

? 12. The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined

?	13. At its core, scope in JavaScript refers to the context or environment in which variables are declared and can be accessed.

? 14. In local scope, variables are typically defined within a function, while block scope is created within code blocks like if, for, or while statements.
?				Local scope is function-level, meaning it encompasses the entire function, while block scope is limited to the specific block where the variable is declared.

? 15.	callback is a function which is to be executed after another function has finished execution

? 16. a type of global object that is used to store data

? 18.objects is an collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

? 20 The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

? 22. is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.

*/
