"use strict"

function renderCoffee(coffee) {
    let html = `<div class="coffees d-flex justify-content-center align-items-center" style="background-repeat: no-repeat; width: 250px; height: 250px; background-image: url(${coffee.img});">`;
    // html += '<td>' + coffee.id + '</td>';
    html += '<div class=""><h1 class="fs-3 text-white">' + coffee.name +  `</h1>` ;
    html +=  `<p class="text-white text-center">` + coffee.roast  + '</p></div>';
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




document.querySelector('#createCoffeeName').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        createNewCoffee();
        coffeeArray.innerHTML = renderCoffees(coffees)
    }
});

function createNewCoffee () {
    let thisID = coffees.length + 1;
    let createdRoast = document.getElementById('createRoastSelection').value
    let createdName = document.getElementById('createCoffeeName').value
    let coffeeObject = {
        id: thisID,
        name: createdName,
        roast: createdRoast
    }
    if (createdRoast == 'light'){
        coffeeObject.img = '../img/light-beans.png';
    }
    if (createdRoast == 'medium'){
        coffeeObject.img = '../img/medium-beans.png'
    }
    if (createdRoast == 'dark'){
        coffeeObject.img = '../img/dark-beans.png'
    }
    coffees.unshift(coffeeObject)
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light', img:'../img/light-beans.png'},
    {id: 2, name: 'Half City', roast: 'light', img:'../img/light-beans.png'},
    {id: 3, name: 'Cinnamon', roast: 'light', img:'../img/light-beans.png'},
    {id: 4, name: 'City', roast: 'medium', img:'../img/medium-beans.png'},
    {id: 5, name: 'American', roast: 'medium', img:'../img/medium-beans.png'},
    {id: 6, name: 'Breakfast', roast: 'medium', img:'../img/medium-beans.png'},
    {id: 7, name: 'High', roast: 'dark', img:'../img/dark-beans.png'},
    {id: 8, name: 'Continental', roast: 'dark', img:'../img/dark-beans.png'},
    {id: 9, name: 'New Orleans', roast: 'dark', img:'../img/dark-beans.png'},
    {id: 10, name: 'European', roast: 'dark', img:'../img/dark-beans.png'},
    {id: 11, name: 'Espresso', roast: 'dark', img:'../img/dark-beans.png'},
    {id: 12, name: 'Viennese', roast: 'dark', img:'../img/dark-beans.png'},
    {id: 13, name: 'Italian', roast: 'dark', img:'../img/dark-beans.png'},
    {id: 14, name: 'French', roast: 'dark', img:'../img/dark-beans.png'},
];

let coffeeArray = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let nameSelection = document.querySelector(`#coffee-name`)

coffeeArray.innerHTML = renderCoffees(coffees);


//<-------------------------------------------------------------------------------->
document.addEventListener("DOMContentLoaded", function(event) {

    realTime();

});


function realTime() {

    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var halfday = "AM";
    halfday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = update(hour);
    min = update(min);
    sec = update(sec);
    document.getElementById("h").innerText = hour;
    document.getElementById("m").innerText = min;
    document.getElementById("s").innerText = sec;
    document.getElementById("ap").innerText = halfday;

    setTimeout(realTime, 1000);
}

function update(k) {
    if (k < 10) { return "0" + k; } else { return k; } }