let attack = 0;
let defense = 0;
let speed = 0;

const card = document.querySelector('#card');
const btn = document.querySelector('#btn');
const idolName = document.querySelector('#idol-name');
const hp = document.querySelector('#hp');
const type = document.querySelector('#type');
const attackStat = document.querySelector('#attack');
const defenseStat = document.querySelector('#defense');
const speedStat = document.querySelector('#speed');


function getRandomIdol() {
    const idolNames = ["Sakura", "Yuki", "Hana", "Riku", "Aiko"];
    const randomIndex = Math.floor(Math.random() * idolNames.length);
    return idolNames[randomIndex];
}


btn.addEventListener('click', getRandomIdol);
