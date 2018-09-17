// Exercise 1
var double = (value) =>  value * 2;
console.log(double(10));

// Exercise 2
var greet = (name = "Max") => {
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3
var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
var newArray = [55, 20, ...numbers];
// Array.prototype.push.apply(newArray, numbers);
// newArray.push(...numbers)
console.log(newArray);

// Exercise 5
var testResults = [3.89, 2.99, 1.38];
var [
	result1,
	result2,
	result3,
] = testResults;

console.log(result1, result2, result3);

// Exercise 6
var scientist = {firstName: "Will", experience: 12};
var {
	firstName,
	experience,
} = scientist;
console.log(firstName, experience);