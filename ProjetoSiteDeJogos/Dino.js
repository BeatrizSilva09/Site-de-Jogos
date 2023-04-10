const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let pulando = false; 
let position = 0;
let gameOver = false;

function tecla(event){
    if (event.keyCode === 32) {
        if(!pulando){
      pular();
        }
    }
}


function pular(){
    
    pulando = true;

    let upInterval =  setInterval(() => {
        if(position >= 200){
            clearInterval(upInterval);


            let descerIntervalo = setInterval(() =>{
                if(position <= 0){
                    clearInterval(descerIntervalo);
                    pulando = false;
                }else{
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 20);
        }else{
        position += 20;

        dino.style.bottom = position + 'px';
        }
     }, 20);
}

function criarCactus(){
    const cactus = document.createElement('div');
     let cactusPosi = 1020;
     let Tempo = Math.random() * 10000;

     if(gameOver) return;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosi -= 10;
        cactus.style.left = cactusPosi + 'px';

        if(cactusPosi < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosi > 0 &&  cactusPosi < 60 && position <60){
          //game over

          clearInterval(leftInterval);
          document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }else{
            cactusPosi -= 10;
            cactus.style.left = cactusPosi + 'px';
        }
    },20)

    setTimeout(criarCactus, Tempo);
}
criarCactus();
document.addEventListener('keyup',tecla);


