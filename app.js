// define DOM
const cookieBtn = document.querySelector('#cookieBtn');
const bakeryName = document.querySelector('#bakeryName')
const numCookies = document.querySelector('#numCookies');
const name = document.querySelector('#innerName');

const buyCursor = document.querySelector('#buyCursor');
const buyGrandma = document.querySelector('#buyGrandma')
const buyFarm = document.querySelector('#buyFarm')

const currentClicksCount = document.querySelector('#currentClicks')
const currentCursorsCount = document.querySelector('#currentCursors')
const currentGrandmasCount = document.querySelector('#currentGrandmas')
const currentFarmsCount = document.querySelector('#currentFarms')

const cursorCurrPrice = document.querySelector('#cursorCurrPrice');
const grandmaCurrPrice = document.querySelector('#grandmaCurrPrice');
const farmCurrPrice = document.querySelector('#farmCurrPrice');

// define changing variables
let num = 0;
let click = 1;
let extraClicks = 0;
let chooseName = '';
//define current variables
let currentClicks = click + extraClicks;
let currentCursors = 0;
let currentGrandmas = 0;
let currentFarms = 0;
//define upgrade prices
let cursorPrice = 10;
let grandmaPrice = 70;
let farmPrice = 130;






//define bakeryName
bakeryName.addEventListener('click', () => {
    chooseName = prompt("Please choose your bakery's name");
    name.textContent = chooseName;
});




// Cookie click func
function cookieClick() {
    num += click + extraClicks;
    numCookies.textContent = num;
};

cookieBtn.addEventListener('click', () => {
    cookieClick();
});




// Define upgrade func
function cursor() {
    if (num >= cursorPrice) {
        extraClicks += 1;
        num -= cursorPrice;
        numCookies.textContent = num;

        // update current cursor count
        currentCursors += 1;
        currentCursorsCount.textContent = currentCursors;
        // update current +click count
        currentClicks += 1;
        currentClicksCount.textContent = currentClicks;
        // update cursor price
        cursorPrice += 5;
        cursorCurrPrice.textContent = cursorPrice;
    } else {
        console.log("Not enough clicks")
    }
};

function grandma() {
    if (num >= grandmaPrice) {
        extraClicks += 3;
        num -= grandmaPrice;
        numCookies.textContent = num;

        // update current grandma count
        currentGrandmas += 1;
        currentGrandmasCount.textContent = currentGrandmas;
        // update current +click count
        currentClicks += 3;
        currentClicksCount.textContent = currentClicks;
        // update grandma price
        grandmaPrice += 20;
        grandmaCurrPrice.textContent = grandmaPrice;
    } else {
        console.log("Not enough clicks")
    }
};

function farm() {
    if (num >= farmPrice) {
        extraClicks += 5;
        num -= farmPrice;
        numCookies.textContent = num;

        // update current farm count
        currentFarms += 1;
        currentFarmsCount.textContent = currentFarms;
        // update current +click count
        currentClicks += 5;
        currentClicksCount.textContent = currentClicks;
        //update farm price
        farmPrice += 50;
        farmCurrPrice.textContent = farmPrice;
    } else {
        console.log("Not enough clicks")
    }
};



// Upgrades click events
buyCursor.addEventListener('click', () => {
    cursor();
});

buyGrandma.addEventListener('click', () => {
    grandma();
})

buyFarm.addEventListener('click', () => {
    farm();
})

