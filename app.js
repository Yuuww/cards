let hiragana;
let usedNumbers = [];
let wrongNumbers = [];
let swapStatus = true;
let showStatus = false;
const password = 'myPassword123';
loadHiragana();
function loadHiragana() {
    fetch(`https://193.196.124.144:3000/api/${password}`)
        .then(response => response.json())
        .then((data) => {
            hiragana = data;
        })
        .catch(error => console.error(error));
    /* hiragana = [
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
        ['と', 'to'],
        ['な', 'na'],
        ['に', 'ni'],
        ['ぬ', 'nu'],
        ['ね', 'ne'],
        ['の', 'no'],
        ['は', 'ha'],
        ['ひ', 'hi'],
        ['ふ', 'fu'],
        ['へ', 'he'],
        ['ほ', 'ho'],
        ['ま', 'ma'],
        ['み', 'mi'],
        ['む', 'mu'],
        ['め', 'me'],
        ['も', 'mo'],
        ['や', 'ya'],
        ['ゆ', 'yu'],
        ['よ', 'yo'],
        ['ら', 'ra'],
        ['り', 'ri'],
        ['る', 'ru'],
        ['れ', 're'],
        ['ろ', 'ro'],
        ['わ', 'wa'],
        ['を', 'wo'],
        ['ん', 'n'],
        ['が', 'ga'],
        ['ぎ', 'gi'],
        ['ぐ', 'gu'],
        ['げ', 'ge'],
        ['ご', 'go'],
        ['ざ', 'za'],
        ['じ', 'ji'],
        ['ず', 'zu'],
        ['ぜ', 'ze'],
        ['ぞ', 'zo'],
        ['だ', 'da'],
        ['ぢ', 'ji / dji / jyi'],
        ['づ', 'zu / dzu'],
        ['で', 'de'],
        ['ど', 'do'],
        ['ば', 'ba'],
        ['び', 'bi'],
        ['ぶ', 'bu'],
        ['べ', 'be'],
        ['ぼ', 'bo'],
        ['ぱ', 'pa'],
        ['ぴ', 'pi'],
        ['ぷ', 'pu'],
        ['ぺ', 'pe'],
        ['ぽ', 'po'],
        ['きゃ', 'kya'],
        ['きゅ', 'kyu'],
        ['きょ', 'kyo'],
        ['しゃ', 'sha'],
        ['しゅ', 'shu'],
        ['しょ', 'sho'],
        ['ちゃ', 'cha'],
        ['ちゅ', 'chu'],
        ['ちょ', 'cho'],
        ['にゃ', 'nya'],
        ['にゅ', 'nyu'],
        ['にょ', 'nyo'],
        ['ひゃ', 'hya'],
        ['ひゅ', 'hyu'],
        ['ひょ', 'hyo'],
        ['みゃ', 'mya'],
        ['みゅ', 'myu'],
        ['みょ', 'myo'],
        ['りゃ', 'rya'],
        ['りゅ', 'ryu'],
        ['りょ', 'ryo'],
        ['ぎゃ', 'gya'],
        ['ぎゅ', 'gyu'],
        ['ぎょ', 'gyo'],
        ['じゃ', 'ja'],
        ['じゅ', 'ju'],
        ['じょ', 'jo'],
        ['ぢゃ', 'ja / dja'],
        ['ぢゅ', 'ju / dju'],
        ['ぢょ', 'jo / djo'],
        ['びゃ', 'bya'],
        ['びゅ', 'byu'],
        ['びょ', 'byo'],
        ['ぴゃ', 'pya'],
        ['ぴゅ', 'pyu'],
        ['ぴょ', 'pyo']
    ];*/
}
updateProgress();
function updateProgress() {
    const element = document.getElementById("progress");
    element.innerText = `${usedNumbers.length + 1} / ${hiragana.length}`;
}
generateCard();
function generateCard() {
    if(usedNumbers.length == hiragana.length) {
        if(wrongNumbers.length == 0) {
            const element = document.getElementById("end");
            element.classList.toggle("no");
            element.classList.toggle("yes");
            return;
        };
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
        wrongNumbers.push(usedNumbers[usedNumbers.length - 1]);
        generateCard();
    }
}
function retry() {
    usedNumbers = [];
    wrongNumbers = [];
    swapStatus = true;
    showStatus = false;
    loadHiragana();
    updateProgress();
    generateCard();
    const element = document.getElementById("end");
    element.classList.toggle("yes");
    element.classList.toggle("no");
}