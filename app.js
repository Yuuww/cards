const hiragana = [
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
function randomNumber() {
    return Math.floor(Math.random() * hiragana.length);
}
function showCard() {
    const show = document.getElementById("show");
    const content = document.getElementById("content");
    show.classList.toggle("hide");
    content.classList.toggle("hide");
}
changeCards();