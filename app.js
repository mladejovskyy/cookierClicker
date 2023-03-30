// define DOM
const cookieBtn = document.querySelector('#cookieBtn');
const bakeryName = document.querySelector('#bakeryName')
const numCookies = document.querySelector('#numCookies');
const name = document.querySelector('#innerName');

const buyCursor = document.querySelector('#buyCursor');
const buyGrandma = document.querySelector('#buyGrandma')
const buyFarm = document.querySelector('#buyFarm')
const buyMine = document.querySelector('#buyMine');
const buyFactory = document.querySelector('#buyFactory');
const buyBank = document.querySelector('#buyBank');

const currentClicksCount = document.querySelector('#currentClicks');
const currentIncome = document.querySelector('#income');
const currentCursorsCount = document.querySelector('#currentCursors');
const currentGrandmasCount = document.querySelector('#currentGrandmas');
const currentFarmsCount = document.querySelector('#currentFarms');

const cursorCurrPrice = document.querySelector('#cursorCurrPrice');
const grandmaCurrPrice = document.querySelector('#grandmaCurrPrice');
const farmCurrPrice = document.querySelector('#farmCurrPrice');
const mineCurrPrice = document.querySelector('#mineCurrPrice');
const factoryCurrPrice = document.querySelector('#factoryCurrPrice');
const bankCurrPrice = document.querySelector('#bankCurrPrice');

const saveBtn = document.querySelector('#saveBtn');
const resetBtn = document.querySelector('#resetBtn');

// define changing variables
let num = 0;
let click = 1;
let income = 0;
let extraClicks = 0;
let chooseName = '';
//define current variables
let currentClicks = click + extraClicks;
//active
let currentCursors = 0;
let currentGrandmas = 0;
let currentFarms = 0;
//passive
let currentMine = 0;
let currentFactory = 0;
let currentBank = 0;
//define upgrade prices
let cursorPrice = 10;
let grandmaPrice = 70;
let farmPrice = 130;
//passive
let minePrice = 300;
let factoryPrice = 600;
let bankPrice = 1000;


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

//define passive func
function mine() {
    if (num >= minePrice) {
        num -= minePrice;
        income += 3;
        currentMine++;
        minePrice += 100;
        mineCurrPrice.textContent = minePrice;
    } else {
        console.log("Not enough clicks")
    }
}

function factory() {
    if (num >= factoryPrice) {
        num -= factoryPrice;
        income += 5;
        currentFactory++;
        factoryPrice += 200;
        factoryCurrPrice.textContent = factoryPrice;
    } else {
        console.log("Not enough clicks")
    }
}

function bank() {
    if (num >= bankPrice) {
        num -= bankPrice;
        income += 10;
        currentBank++;
        bankPrice += 200;
        bankCurrPrice.textContent = bankPrice;
    } else {
        console.log("Not enough clicks")
    }
}



// save progress
saveBtn.addEventListener('click', () => {
    localStorage.setItem('cookieClickerSave', JSON.stringify({
        num: num,
        click: click,
        extraClicks: extraClicks,
        chooseName: chooseName,
        currentClicks: currentClicks,
        currentCursors: currentCursors,
        currentGrandmas: currentGrandmas,
        currentFarms: currentFarms,
        cursorPrice: cursorPrice,
        grandmaPrice: grandmaPrice,
        farmPrice: farmPrice
    }));
});

function loadSavedGame() {
    const savedGame = localStorage.getItem('cookieClickerSave');
    if (savedGame !== null) {
        const savedData = JSON.parse(savedGame);
        num = savedData.num;
        click = savedData.click;
        extraClicks = savedData.extraClicks;
        chooseName = savedData.chooseName;
        currentClicks = savedData.currentClicks;
        currentCursors = savedData.currentCursors;
        currentGrandmas = savedData.currentGrandmas;
        currentFarms = savedData.currentFarms;
        cursorPrice = savedData.cursorPrice;
        grandmaPrice = savedData.grandmaPrice;
        farmPrice = savedData.farmPrice;
        name.textContent = chooseName;
        numCookies.textContent = num;
        currentClicksCount.textContent = currentClicks;
        currentCursorsCount.textContent = currentCursors;
        currentGrandmasCount.textContent = currentGrandmas;
        currentFarmsCount.textContent = currentFarms;
        cursorCurrPrice.textContent = cursorPrice;
        grandmaCurrPrice.textContent = grandmaPrice;
        farmCurrPrice.textContent = farmPrice;
    }
}

loadSavedGame();

//define reset game
function resetGame() {
    num = 0;
    click = 1;
    extraClicks = 0;
    chooseName = '';
    currentClicks = click + extraClicks;
    currentCursors = 0;
    currentGrandmas = 0;
    currentFarms = 0;
    cursorPrice = 10;
    grandmaPrice = 70;
    farmPrice = 130;

    // update the UI to reflect the reset
    numCookies.textContent = num;
    name.textContent = 'Undefined';
    currentClicksCount.textContent = currentClicks;
    currentCursorsCount.textContent = currentCursors;
    currentGrandmasCount.textContent = currentGrandmas;
    currentFarmsCount.textContent = currentFarms;
    cursorCurrPrice.textContent = cursorPrice;
    grandmaCurrPrice.textContent = grandmaPrice;
    farmCurrPrice.textContent = farmPrice;
}



// Upgrades click events
buyCursor.addEventListener('click', () => {
    cursor();
});

buyGrandma.addEventListener('click', () => {
    grandma();
});

buyFarm.addEventListener('click', () => {
    farm();
});

resetBtn.addEventListener('click', () => {
    resetGame();
});

buyMine.addEventListener('click', () => {
    mine();
});

buyFactory.addEventListener('click', () => {
    factory();
});

buyBank.addEventListener('click', () => {
    bank();
});

setInterval(() => {
    num += income
    console.log(num, income);
    numCookies.textContent = num;
    currentIncome.textContent = income;
}, 1000);