
// Q1: Create a function that takes an array of numbers
// and returns a new array where each number is squared.
// Use map method.

const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(n => Math.pow(n, 2));

console.log("Q1 Result:", result);


// Q2: Write a function that takes an array of objects
// with name and age properties.
// Filter out only users whose age is greater than 18.

function filterAdults(users) {
    return users.filter(user => user.age > 18);
}

const users = [
    { name: "Ali", age: 16 },
    { name: "Ahmed", age: 20 },
    { name: "Sara", age: 25 },
    { name: "Usman", age: 18 },
    { name: "Hassan", age: 22 }
];

const adults = filterAdults(users);

console.log("Q2 Result:", adults);


 // Q3: Given an array of products with price,
 // use reduce to calculate the total price of all products.

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 30000 },
    { name: "Keyboard", price: 2000 },
    { name: "Mouse", price: 1000 }
];

const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Q3 Total Price:", totalPrice);



// Q4: Create an array of students with marks.
// Sort the array in descending order based on marks.

const students = [
    { name: "Ali", marks: 75 },
    { name: "Ahmed", marks: 90 },
    { name: "Sara", marks: 85 },
    { name: "Usman", marks: 60 },
    { name: "Hassan", marks: 95 }
];

students.sort((a, b) => b.marks - a.marks);

console.log("Q4 Result:", students);



// Q5: Write a function that takes an array of strings
// and finds the first string with length greater than 5
// using find method.

function findLongString(strings) {
    return strings.find(function(str) {
        return str.length > 5;
    });
}

const words = ["Apple", "Banana", "Cat", "Orange", "Mango"];

const longString = findLongString(words);

console.log("Q5 Result:", longString);



// Q6: Create an object named person with properties
// firstName, lastName and a method fullName that
// returns the full name using this keyword.

const person = {
    firstName: "Muhammad",
    lastName: "Sufyan",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Q6 Full Name:", person.fullName());




// Q7: What will be the output of this code and why?
// Create an example to show the difference between
// regular function and arrow function when using this inside an object.

const personQ7 = {
    name: "Sufyan",

    regularFunction: function() {
        console.log("Q7 Regular Function:", this.name);
    },

    arrowFunction: () => {
        console.log("Arrow Function:", this.name);
    }
};

personQ7.regularFunction();
personQ7.arrowFunction();



// Q8: Filter even numbers, double them using map,
// and return the sum using reduce.
// Do it in a chain.

function calculateSum(numbers) {
    return numbers
        .filter(num => num % 2 === 0)
        .map(num => num * 2)
        .reduce((sum, num) => sum + num, 0);
}

const numbersforQ8 = [1, 2, 3, 4, 5, 6];

const resultforQ8 = calculateSum(numbersforQ8);

console.log("Q8 Result:", resultforQ8);




// Q9: Create an array of employees with name, department and salary.
// a) Find an employee who works in HR department.
// b) Sort employees by salary in ascending order.

const employees = [
    { name: "Ali", department: "IT", salary: 50000 },
    { name: "Ahmed", department: "HR", salary: 35000 },
    { name: "Sara", department: "Finance", salary: 45000 },
    { name: "Usman", department: "HR", salary: 40000 },
    { name: "Hassan", department: "IT", salary: 30000 }
];

// a) Find an employee in the HR department
const hrEmployee = employees.find(employee => employee.department === "HR");

console.log("Q9 (a) HR Employee:", hrEmployee);

// b) Sort employees by salary in ascending order
const sortedEmployees = [...employees].sort((a, b) => a.salary - b.salary);

console.log("(b) Employees Sorted by Salary:", sortedEmployees);




// Q10: Create a function that takes an object and returns
// an array of its keys and values separately.
// Then create a new object from an array of key-value pairs.
// Use Object.keys, Object.values, and Object.fromEntries.

function getKeysAndValues(obj) {
    return {
        keys: Object.keys(obj),
        values: Object.values(obj)
    };
}

const personQ10 = {
    name: "Sufyan",
    age: 17,
    city: "Karachi"
};

const resultQ10 = getKeysAndValues(personQ10);

console.log("Q10 (a) Keys:", resultQ10.keys);
console.log("(b) Values:", resultQ10.values);

// Create a new object from an array of key-value pairs
const entries = [
    ["name", "Ali"],
    ["age", 20],
    ["city", "Lahore"]
];

const newObject = Object.fromEntries(entries);

console.log("(c) New Object:", newObject);

