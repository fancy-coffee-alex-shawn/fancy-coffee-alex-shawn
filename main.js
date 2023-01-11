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
    // e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    let selectedName = document.getElementById("coffeeName").value.toLowerCase();
    coffees.forEach(function(coffee) {
        if (selectedRoast === 'all' && selectedName == null){
            filteredCoffees.push(coffee)
        }
        if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(selectedName)){
            filteredCoffees.push(coffee)
        }
        if (selectedName == null && selectedRoast == null) {
            filteredCoffees.push(coffee)
        }
        if (selectedName == null && coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if (selectedRoast == null && coffee.name.toLowerCase().includes(selectedName) === true) {
            filteredCoffees.push(coffee);
        }
        if (coffee.name.toLowerCase().includes(selectedName) === true && coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee)
        }
    });
    coffeeArray.innerHTML = renderCoffees(filteredCoffees);
}


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


//<-------------------------------------------------------------------------------->
