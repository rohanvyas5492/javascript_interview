// 01- Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));

// The invocation above will return:
// ["CodeSweetly", "Web Developer", "Male"]

// 02- Define a function with three parameters:
function myBio2(firstName, lastName, company) { 
  return `${firstName} ${lastName} runs ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
console.log(myBio2(...["Oluwatobi", "Sofela", "CodeSweetly"]));

// The invocation above will return:
// “Oluwatobi Sofela runs CodeSweetly”

// 03- Json.stringify converts javascript value into string
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'

// 04- The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string.
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
