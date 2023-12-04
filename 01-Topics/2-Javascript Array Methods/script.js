//Javascript Array Methods

// 01- JavaScript Array toString()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// 02- .join()

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));

// 03- Popping and Pushing (Popping items out of an array, or pushing items into an array)

//The pop() method removes the last element from an array.
fruits.pop();
console.log(fruits);

//The push() method adds a new element to an array (at the end)

fruits.push("Kiwi");
console.log(fruits);

// 04- JavaScript Array shift() & unshift()

//The shift() method removes the first array element and "shifts" all other elements to a lower index.

fruits.shift();
console.log(fruits);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.

fruits.unshift("Lemon");
console.log(fruits);

// 05- Merging (Concatenating) Arrays

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

console.log(myChildren);

// 06- Flattening an Array

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

// 07- Splicing and Slicing Arrays

const names = ["Rohan", "Rohit", "Rahul", "Shivam"];
names.splice(2, 0, "Shubham", "Abhinav");
console.log(names);

//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Shubham" , "Abhinav") define the new elements to be added.

//When the slice() method is given two arguments, it selects array elements from the start argument, and up to (but not included) the end argument

const citrus = fruits.slice(1,3);
console.log(citrus);

// 08- JavaScript Array map()

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2);

// 09- JavaScript Array filter()

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(over18);

// 10- JavaScript Array reduce()

//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//The reduce() method works from left-to-right in the array. See also reduceRight()
//The reduce() method does not reduce the original array.

const nos = [45, 4, 9, 16, 25];
let sum = nos.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

console.log(sum);

//Note that the function takes 4 arguments:

//The total (the initial value / previously returned value)
//The item value
//The item index
//The array itself