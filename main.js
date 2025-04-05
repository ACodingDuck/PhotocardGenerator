const card = document.querySelector('#card');
const btn = document.querySelector('#btn');

let idols = ['Sakura', 'Yunjin', 'Eunchae', 'Chaewon', 'Kazuha'];
let hp = ['80', '90', '100', '110', '120'];
let attack = ['50', '60', '70', '80', '90'];
let defense = ['40', '50', '60', '70', '80'];
let speed = ['30', '40', '50', '60', '70'];
let imgs = ['imgs/yunjin1.jpg', 'imgs/chaewon1.jpg', 'imgs/eunchae1.jpg', 'imgs/kazuha.jpg', 'imgs/sakura1.jpg'];
let types = ['fire', 'water', 'grass', 'electric', 'psychic'];

let getRandomIdol = () => {
    let id = idols[Math.floor(Math.random() * idols.length)];
    if (id === 'Sakura') {
        img1 = 'imgs/sakura1.jpg';
    } else if (id === 'Yunjin') {
        img1 = 'imgs/yunjin1.jpg';
    } else if (id === 'Eunchae') {
        img1 = 'imgs/eunchae1.jpg';
    }
    else if (id === 'Chaewon') {
        img1 = 'imgs/chaewon1.jpg';
    }
    else if (id === 'Kazuha') { 
        img1 = 'imgs/kazuha.jpg';
    };
    let hp1 = hp[Math.floor(Math.random() * hp.length)];
    let attack1 = attack[Math.floor(Math.random() * attack.length)];
    let defense1 = defense[Math.floor(Math.random() * defense.length)];
    let speed1 = speed[Math.floor(Math.random() * speed.length)];
    let type1 = types[Math.floor(Math.random() * types.length)];
    let type2 = types[Math.floor(Math.random() * types.length)];
   

    const finalCard = id + ' ' + hp1 + ' ' + attack1 + ' ' + defense1 + ' ' + speed1;
    
    console.log(finalCard);
    
    card.innerHTML = `
         <p class="hp">
            <span>HP</span>
            <span>${hp1}</span>
          </p>
        <img src=${img1} alt="">
        <h2 class="idol-name">${id}</h2> 
        <div class="types">
          <span>${type1}</span>
          <span>${type2}</span>
        </div>
        <div class="stats">
          <div>
            <h3>${attack1}</h3>
            <p>Attack</p>
            </div> 
            <div>
              <h3>${defense1}</h3>
              <p>Defense</p>
              </div> 
              <div>
                <h3>${speed1}</h3>
                <p>Speed</p>
                </div>
        </div>
    `;
};
     
        
    /* card.innerHTML = finalCard; */


btn.addEventListener('click', getRandomIdol);
window.addEventListener('load', getRandomIdol);