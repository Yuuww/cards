let hiragana;
let usedNumbers = [];
let wrongNumbers = [];
let swapStatus = true;
let showStatus = false;
loadHiragana();
function loadHiragana() {
    hiragana = [
        ['あ', 'a'],
        ['い', 'i'],
        ['う', 'u'],
        ['え', 'e'],
        ['お', 'o'],
        ['か', 'ka'],
        ['き', 'ki'],
        ['く', 'ku'],
        ['け', 'ke'],
        ['こ', 'ko'],
        ['さ', 'sa'],
        ['し', 'shi'],
        ['す', 'su'],
        ['せ', 'se'],
        ['そ', 'so'],
        ['た', 'ta'],
        ['ち', 'chi'],
        ['つ', 'tsu'],
        ['て', 'te'],
        ['と', 'to']
    ];
}
updateProgress();
function updateProgress() {
    const element = document.getElementById("progress");
    element.innerText = `${usedNumbers.length + 1} / ${hiragana.length}`;
}
generateCard();
function generateCard() {
    if(usedNumbers.length == hiragana.length) {
        if(wrongNumbers.length == 0) return;
        let newArray = [];
        for(let i of wrongNumbers) {
            newArray.push(hiragana[i]);
        }
        hiragana = newArray;
        usedNumbers = [];
        wrongNumbers = [];
        return generateCard();
    };
    let randomNumber;
    let i = 1;
    while(i == 1) {
        i = 2;
        randomNumber = Math.floor(Math.random() * hiragana.length);
        for(let j of usedNumbers) {
            if(j == randomNumber) {
                i = 1;
            }
        }
    }
    updateProgress()
    usedNumbers.push(randomNumber);
    const one = document.getElementById("one");
    const content = document.getElementById("content");
    if(swapStatus) {
        one.innerText = hiragana[randomNumber][0];
        content.innerText = hiragana[randomNumber][1];
    } else {
        one.innerText = hiragana[randomNumber][1];
        content.innerText = hiragana[randomNumber][0];
    }
    
}
function swapCards() {
    if(swapStatus) {
        swapStatus = false;
    } else {
        swapStatus = true;
    }
    if (showStatus) {
        showCard();
    }
    usedNumbers = [];
    loadHiragana();
    generateCard();
}
function showCard() {
    const show = document.getElementById("show");
    const content = document.getElementById("content");
    const tf = document.getElementById("tf");
    show.classList.toggle("hide");
    content.classList.toggle("hide");
    tf.classList.toggle("nope");
    if(showStatus) {
        showStatus = false;
    } else {
        showStatus = true;
    }
}
function right() {
    if(showStatus) {
        showCard();
        generateCard();
    }
}
function wrong() {
    if(showStatus) {
        showCard();
        generateCard();
        wrongNumbers.push(usedNumbers[usedNumbers.length - 1]);
    }
}








/*

let numbers = [];
function right(){
    showCard();
    changeCards();
    console.log(numbers)
}
function changeCards() {
    let zahl = proof();
    const one = document.getElementById("one");
    const content = document.getElementById("content");
    one.innerText = hiragana[zahl][0];
    content.innerText = hiragana[zahl][1];
}
function proof() {
    let i = true;
    let zahl;
    while(i) {
        i = false;
        zahl = randomNumber();
        for(let j in numbers) {
            if(j == zahl) {
                i = true;
            }
        }
    }
    numbers.push(zahl);
    return zahl;
}


changeCards();
*/