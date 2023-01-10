"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffees">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div><h1 class="inline">' + coffee.name +  `</h1>` ;
    html +=  `<p>` + coffee.roast  + '</p></div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeArray.innerHTML = renderCoffees(filteredCoffees);
}


function updateCoffeesNames(){
    let x = document.getElementById(coffeeName).value;
    document.getElementById(coffeeArray)
}

// function updateCoffeesNames(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     let selectedName = nameSelection.value;
//     let filteredCoffees = [];
//     coffees.name.forEach(function(coffee) {
//         for (let i = 0; i < coffee.length; i++) {
//             if (coffee.charAt(i) === selectedName.charAt(i)) {
//                 filteredCoffees.push(coffee);
//             }
//         }
//     });
//     coffeeArray.innerHTML = renderCoffees(filteredCoffees);
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let coffeeArray = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let nameSelection = document.querySelector(`#coffee-name`)

coffeeArray.innerHTML = renderCoffees(coffees);

nameSelection.addEventListener('keyup', updateCoffeesNames)
roastSelection.addEventListener('change', updateCoffees);


//<-------------------------------------------------------------------------------->
//
// const people = [
//     { name: 'adri'},
//     { name: 'becky'},
//     { name: 'chris'},
//     { name: 'dillon'},
//     { name: 'evan'},
//     { name: 'frank'},
//     { name: 'georgette'},
//     { name: 'hugh'},
//     { name: 'igor'},
//     { name: 'jacoby'},
//     { name: 'kristina'},
//     { name: 'lemony'},
//     { name: 'matilda'},
//     { name: 'nile'},
//     { name: 'ophelia'},
//     { name: 'patrick'},
//     { name: 'quincy'},
//     { name: 'roslyn'},
//     { name: 'solene'},
//     { name: 'timothy'},
//     { name: 'uff'},
//     { name: 'violet'},
//     { name: 'wyatt'},
//     { name: 'x'},
//     { name: 'yadri'},
//     { name: 'zack'},
// ]
// whateverElement.addEventListener("event type", () => {
//
// }
// const searchInput = document.querySelector('.input')
//
// searchInput.addEventListener("input", (e) => {
//     // inside, we will need to achieve a few things:
//     // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
//     let value = e.target.value
//
//     // 2. check: if input exists and if input is larger than 0
//     if (value && value.trim().length > 0){
//         // 3. redefine 'value' to exclude white space and change input to all lowercase
//         value = value.trim().toLowerCase()
//         // 4. return the results only if the value of the search is included in the person's name
//         // we need to write code (a function for filtering through our data to include the search input value)
//     } else {
//         // 5. return nothing
//         // input is invalid -- show an error message or show no results
//
//     }
//
// }
// const clearButton = document.getElementById('clear')
//
// clearButton.addEventListener("click", () => {
//     // 1. write a function that removes any previous results from the page
// })
//
// // creating and declaring a function called "setList"
// // setList takes in a param of "results"
// function setList(results){
//
//     for (const person of results){
//         // creating a li element for each result item
//         const resultItem = document.createElement('li')
//
//         // adding a class to each item of the results
//         resultItem.classList.add('result-item')
//
//         // grabbing the name of the current point of the loop and adding the name as the list item's text
//         const text = document.createTextNode(person.name)
//
//         // appending the text to the result item
//         resultItem.appendChild(text)
//
//         // appending the result item to the list
//         list.appendChild(resultItem)
//     }
// }
// searchInput.addEventListener("input", (e) => {
//     let value = e.target.value
//
//     if (value && value.trim().length > 0){
//         value = value.trim().toLowerCase()
//
//         //returning only the results of setList if the value of the search is included in the person's name
//         setList(people.filter(person => {
//             return person.name.includes(value)
//         }))
//         function clearList(){
//             // looping through each child of the search results list and remove each child
//             while (list.firstChild){
//                 list.removeChild(list.firstChild)
//             }
//         }
//         searchInput.addEventListener("input", (e) => {
//             // inside, we will need to achieve a few things:
//             // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
//             let value = e.target.value
//
//             // 2. check: if input exists and if input is larger than 0
//             if (value && value.trim().length > 0){
//                 // 3. redefine 'value' to exclude white space and change input to all lowercase
//                 value = value.trim().toLowerCase()
//                 // 4. return the results only if the value of the search is included in the person's name
//                 // we need to write code (a function for filtering through our data to include the search input value)
//             } else {
//                 // 5. return nothing
//                 clearList()
//
//             }












// let listIDs = coffees.querySelector({'id'})
// listIDs.style.display = 'none';