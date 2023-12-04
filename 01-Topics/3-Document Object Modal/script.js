//Document Object Modal

const main = document.getElementById('demo'); //Selecting

const newDiv = document.createElement("h1"); //Creating Element

const newContent = document.createTextNode("Hi there and greetings!"); //Creating Text

newDiv.appendChild(newContent); //Appending content into div

document.body.insertBefore(newDiv, main); // Inserting before the main div

const p = document.createElement('p');

p.textContent = 'I have changed!'; //Inserting text

main.appendChild(p);

const input = document.createElement('input'); //Creating input field

main.appendChild(input)

input.setAttribute('type','text'); //Setting some attriutes
input.setAttribute('value','Enter Something');
input.setAttribute('id','name');

console.log(input.getAttribute('id')); //Getting a single attribute

console.log(input.attributes); //Getting all the attributes

const arrOne = new Array(5); //Creating empty array with 5 indexes
console.log(arrOne);

const arrTwo = new Array(1,2,3); //Creating an array with elements 1,2,3
console.log(arrTwo);

const randomNo = 10 * Math.random(); //Generates a random number between 0 and 10
console.log(randomNo);

console.log(Math.floor(randomNo)); //Rounding the number

const newP = document.createElement('p');

//Keypress Event listener

document.addEventListener('keypress',(e)=>{ //Showing pressed key on the screen
    console.log(e.key); //This is a string
    // parseInt(e.key); //Use this to convert into string
    newP.textContent += e.key;
    main.appendChild(newP)
});

//smooth: scrolling should animate smoothly
//Defines vertical alignment. One of start, center, end, or nearest. Defaults to start.
//Defines horizontal alignment. One of start, center, end, or nearest. Defaults to nearest.

element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
