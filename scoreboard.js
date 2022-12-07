let score = document.getElementById("score");
let score2 = document.getElementById("score2");
let scoreCount = 0
 
function increment() {
    scoreCount += 1;
    score.textContent = scoreCount;
}
function add2() {
    scoreCount += 2;
    score.textContent = scoreCount;
}
function add3() {
    scoreCount += 3;
    score.textContent = scoreCount;
}

let score2Count = 0

function increment2() {
    score2Count += 1;
    score2.textContent = score2Count;
}

function plus2() {
    score2Count += 2;
    score2.textContent = score2Count;
}

function plus3() {
    score2Count += 3;
    score2.textContent = score2Count;
}

function newGame() {
    let scoreCount = 0;
    score.textContent = scoreCount;
    let score2Count = 0;
    score2.textContent = score2Count;
}
