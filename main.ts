let progressBar=document.getElementById('llenito') as HTMLInputElement;
let numLleno=document.getElementById('lleno') as HTMLInputElement;
let letrasLleno=document.getElementById('letrasLleno') as HTMLInputElement;
const helado=document.getElementById('boton1') as HTMLInputElement;
const pizza=document.getElementById('boton2') as HTMLInputElement;
const brocoli=document.getElementById('boton3') as HTMLInputElement;

let progressBar2=document.getElementById('juego') as HTMLInputElement;
let numSatisfecho=document.getElementById('satisfecho') as HTMLInputElement;
let letrasSatisfecho=document.getElementById('letrasSatisfecho') as HTMLInputElement;
const play=document.getElementById('boton4') as HTMLInputElement;
const ball=document.getElementById('boton5') as HTMLInputElement;
const cartas=document.getElementById('boton6') as HTMLInputElement;

let progressBar3=document.getElementById('ejercicio') as HTMLInputElement;
let numSerotonina=document.getElementById('serotonina') as HTMLInputElement;
let letrasSerotonina=document.getElementById('letrasSerotonina') as HTMLInputElement;
const cardio=document.getElementById('boton7') as HTMLInputElement;
const pesas=document.getElementById('boton8') as HTMLInputElement;
const boxa=document.getElementById('boton9') as HTMLInputElement;

let progressBar4=document.getElementById('relax') as HTMLInputElement;
let numDescanso=document.getElementById('descanso') as HTMLInputElement;
let letrasRelajao=document.getElementById('letrasRelajao') as HTMLInputElement;
const dormir=document.getElementById('boton10') as HTMLInputElement;
const siesta=document.getElementById('boton11') as HTMLInputElement;
const relax=document.getElementById('boton12') as HTMLInputElement;

let babyYoda=document.getElementById('bebito') as HTMLInputElement;

let progressWidth=randomBar();
let progressWidth2=randomBar();
let progressWidth3=randomBar();
let progressWidth4=randomBar();

let progressBarTotal=document.getElementById('progresoTotal') as HTMLInputElement;

let letras=document.getElementById('letras') as HTMLInputElement;
let reset=document.getElementById('reset') as HTMLInputElement;

let h4 = document.getElementsByTagName('h4')[0] as HTMLInputElement;
let sec = 0;
let min = 0;
let hrs = 0;
let t:number;

let htmlaudio: HTMLAudioElement = new Audio('./Audio/firstAudio.mp3');

htmlaudio.controls=false;
htmlaudio.loop=true;
document.body.appendChild(htmlaudio);

let audioClick: HTMLAudioElement = new Audio('./Audio/click.mp3');
audioClick.autoplay=false;
audioClick.controls=false;
audioClick.loop=false;
document.body.appendChild(audioClick);

let media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;

let change:number;
let welcome=true;
let firstTime=true;

if(welcome){
    if(media>60){
        change=1;
    }else if(media>30){
        change=2;
    }else{
        change=3;
    }
welcome=false;
}

document.addEventListener('click', () =>{
    firstTime=false;
});

progressBarTotal.style.width=media+'%';

function randomBar(){
    let x = Math.floor((Math.random() * 40) + 41);
    return x;
};

timer();

let countDown=setInterval(() => {
    progressWidth--;
    media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;
    progressBarTotal.style.width=media+'%';
    checkColors(media, progressBarTotal);
    checkColorsTimer(media,h4);
    if(media==0){
        babyYoda.src='./imagenes/byeYoda.gif';
        clearInterval(countDownImage);
        clearTimeout(t);
        letras.style.display='none';
        reset.style.display='flex';
        htmlaudio.src="./Audio/gameOver.wav";
        htmlaudio.volume = 0.25; 
        htmlaudio.load();
        htmlaudio.play();
        htmlaudio.loop=false;

    }
    if (progressWidth>0){
        progressBar.style.width=progressWidth+'%';
        numLleno.innerHTML=progressWidth.toString();
        checkColors(progressWidth, progressBar);
        checkColorsTimer(progressWidth, letrasLleno);

    }else{
        clearInterval(countDown);
        progressBar.style.width='0%';
        numLleno.innerHTML='0';
        progressWidth=0;
        helado.disabled=true;
        helado.classList.add('option_button2');
        pizza.disabled=true;
        pizza.classList.add('option_button2');
        brocoli.disabled=true;
        brocoli.classList.add('option_button2');
    }


}, 1000);

let countDown2=setInterval(() => {
    progressWidth2--;
    media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;
    progressBarTotal.style.width=media+'%';
    checkColors(media, progressBarTotal);
    checkColorsTimer(media,h4);
    if(media==0){
        babyYoda.src='./imagenes/byeYoda.gif';
        clearInterval(countDownImage);
        clearTimeout(t);
        letras.style.display='none';
        reset.style.display='flex';
        htmlaudio.src="./Audio/gameOver.wav";
        htmlaudio.volume = 0.25; 
        htmlaudio.load();
        htmlaudio.play();
        htmlaudio.loop=false;
    }
    if (progressWidth2>0){
        progressBar2.style.width=progressWidth2+'%';
        numSatisfecho.innerHTML=progressWidth2.toString();
        checkColors(progressWidth2, progressBar2);
        checkColorsTimer(progressWidth2, letrasSatisfecho);

    }else{
        clearInterval(countDown2);
        progressBar2.style.width='0%';
        numSatisfecho.innerHTML='0';
        progressWidth2=0;
        play.disabled=true;
        play.classList.add('option_button2');
        ball.disabled=true;
        ball.classList.add('option_button2');
        cartas.disabled=true;
        cartas.classList.add('option_button2');
    }


}, 1000);

let countDown3=setInterval(() => {
    progressWidth3--;
    media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;
    progressBarTotal.style.width=media+'%';
    checkColors(media, progressBarTotal);
    checkColorsTimer(media,h4);
    if(media==0){
        babyYoda.src='./imagenes/byeYoda.gif';
        clearInterval(countDownImage);
        clearTimeout(t);
        letras.style.display='none';
        reset.style.display='flex';
        htmlaudio.src="./Audio/gameOver.wav";
        htmlaudio.volume = 0.25; 
        htmlaudio.load();
        htmlaudio.play();
        htmlaudio.loop=false;

    }
    if (progressWidth3>0){
        progressBar3.style.width=progressWidth3+'%';
        numSerotonina.innerHTML=progressWidth3.toString();
        checkColors(progressWidth3, progressBar3);
        checkColorsTimer(progressWidth3, letrasSerotonina);
    }else{
        clearInterval(countDown3);
        progressBar3.style.width='0%';
        numSerotonina.innerHTML='0';
        progressWidth3=0;
        cardio.disabled=true;
        cardio.classList.add('option_button2');
        pesas.disabled=true;
        pesas.classList.add('option_button2');
        boxa.disabled=true;
        boxa.classList.add('option_button2');
    }


}, 1000);

let countDown4=setInterval(() => {
    progressWidth4--;
    media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;
    progressBarTotal.style.width=media+'%';
    checkColors(media, progressBarTotal);
    checkColorsTimer(media, h4);
    if(media==0){
        babyYoda.src='./imagenes/byeYoda.gif';
        clearInterval(countDownImage);
        clearTimeout(t);
        letras.style.display='none';
        reset.style.display='flex';
        htmlaudio.src="./Audio/gameOver.wav";
        htmlaudio.volume = 0.25; 
        htmlaudio.load();
        htmlaudio.play();
        htmlaudio.loop=false;
    }
    if (progressWidth4>0){
        progressBar4.style.width=progressWidth4+'%';
        numDescanso.innerHTML=progressWidth4.toString();
        checkColors(progressWidth4, progressBar4);
        checkColorsTimer(progressWidth4, letrasRelajao);
    }else{
        clearInterval(countDown4);
        progressBar4.style.width='0%';
        numDescanso.innerHTML='0';
        progressWidth4=0;
        dormir.disabled=true;
        dormir.classList.add('option_button2');
        siesta.disabled=true;
        siesta.classList.add('option_button2');
        relax.disabled=true;
        relax.classList.add('option_button2');
    }


}, 1000);

const checkColors=(width:number, barra:HTMLInputElement)=>{
    if(width>60){
        barra.style.background='#12ec49';
    }else if(width>30 && width<=60){
        barra.style.background='yellow';

    }else{
        barra.style.background='red';
    }
};

const checkColorsTimer=(width:number, letters:HTMLInputElement)=>{
    if(width>60){
        letters.style.color='#12ec49';
    }else if(width>30 && width<=60){
        letters.style.color='yellow';

    }else{
        letters.style.color='red';
    }
    
};

function checkColorsMusic(width:number, source:HTMLAudioElement){
    if(width>60 && (change==1 || change==3)){
        source.src="./Audio/firstAudio.mp3";
        source.volume = 0.25; 
        source.load();
        source.play();
        if(!firstTime){
            change=2;
        }
        
        
        
    }else if((width>30 && width<=60) && change==2){
        source.src="./Audio/secondAudio.mp3";
        source.volume=0.05;
        source.load();
        source.play();
        if(!firstTime){
            change=3;
        }

    }else if(width<=30 && change==3){
        source.src="./Audio/thirdAudio.mp3";
        source.volume=0.1;
        source.load();
        source.play();
        if(!firstTime){
            
            change=2;
        }
    }
};

let intervalbutonImage=5;
let countDownImage=setInterval(() => {
    if ((intervalbutonImage < 1) && (media > 0)){
        babyYoda.src='./imagenes/Baby.png';
    }else{
        intervalbutonImage--;
    }

}, 1000);

helado.addEventListener('click', () =>{
    if(progressWidth>95){
        progressWidth=100;
    }else{
        progressWidth+=5;
    }
    progressBar.style.width=(progressWidth)+'%';
    numLleno.innerHTML=progressWidth.toString();
    
    let intervalbuton=5;
    helado.classList.add('option_button2');
    helado.classList.remove('option_button');
    babyYoda.src='./imagenes/heladoYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            helado.disabled = true;


        }else{
            helado.disabled = false;
            helado.classList.remove('option_button2');
            helado.classList.add('option_button');
            clearInterval(countDown);
        }

    }, 1000);
});


pizza.addEventListener('click', () =>{
    if(progressWidth>90){
        progressWidth=100;
    }else{
        progressWidth+=10;
    }
    progressBar.style.width=(progressWidth)+'%';
    numLleno.innerHTML=progressWidth.toString();
    
    let intervalbuton=10;
    pizza.classList.add('option_button2');
    pizza.classList.remove('option_button');
    babyYoda.src='./imagenes/pizzaYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            pizza.disabled = true;


        }else{
            pizza.disabled = false;
            pizza.classList.remove('option_button2');
            pizza.classList.add('option_button');
            clearInterval(countDown);

        }

    }, 1000);
});


brocoli.addEventListener('click', () =>{
    if(progressWidth>85){
        progressWidth=100;
    }else{
        progressWidth+=15;
    }
    progressBar.style.width=(progressWidth)+'%';
    numLleno.innerHTML=progressWidth.toString();
    
    let intervalbuton=15;
    brocoli.classList.add('option_button2');
    brocoli.classList.remove('option_button');
    babyYoda.src='./imagenes/brocoliYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            brocoli.disabled = true;

        }else{
            brocoli.disabled = false;
            brocoli.classList.remove('option_button2');
            brocoli.classList.add('option_button');
            clearInterval(countDown);

        }

    }, 1000);
});


play.addEventListener('click', () =>{
    if(progressWidth2>95){
        progressWidth2=100;
    }else{
        progressWidth2+=5;
    }
    progressBar2.style.width=(progressWidth2)+'%';
    numSatisfecho.innerHTML=progressWidth2.toString();
    
    let intervalbuton=5;
    play.classList.add('option_button2');
    play.classList.remove('option_button');
    babyYoda.src='./imagenes/playYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            play.disabled = true;


        }else{
            play.disabled = false;
            play.classList.remove('option_button2');
            play.classList.add('option_button');
            clearInterval(countDown);

        }

    }, 1000);
});


ball.addEventListener('click', () =>{
    if(progressWidth2>90){
        progressWidth2=100;
    }else{
        progressWidth2+=10;
    }
    progressBar2.style.width=(progressWidth2)+'%';
    numSatisfecho.innerHTML=progressWidth2.toString();
    
    let intervalbuton=10;
    ball.classList.add('option_button2');
    ball.classList.remove('option_button');
    babyYoda.src='./imagenes/ballYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            ball.disabled = true;

        }else{
            ball.disabled = false;
            ball.classList.remove('option_button2');
            ball.classList.add('option_button');
            clearInterval(countDown);

        }

    }, 1000);
});


cartas.addEventListener('click', () =>{
    if(progressWidth2>85){
        progressWidth2=100;
    }else{
        progressWidth2+=15;
    }
    progressBar2.style.width=(progressWidth2)+'%';
    numSatisfecho.innerHTML=progressWidth2.toString();
    
    let intervalbuton=15;
    cartas.classList.add('option_button2');
    cartas.classList.remove('option_button');
    babyYoda.src='./imagenes/cardsYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            cartas.disabled = true;

        }else{
            cartas.disabled = false;
            cartas.classList.remove('option_button2');
            cartas.classList.add('option_button');
            clearInterval(countDown);

        }

    }, 1000);
});


cardio.addEventListener('click', () =>{
    if(progressWidth3>95){
        progressWidth3=100;
    }else{
        progressWidth3+=5;
    }
    progressBar3.style.width=(progressWidth3)+'%';
    numSerotonina.innerHTML=progressWidth3.toString();
    
    let intervalbuton=5;
    cardio.classList.add('option_button2');
    cardio.classList.remove('option_button');

    babyYoda.src='./imagenes/cardioYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            cardio.disabled = true;


        }else{
            cardio.disabled = false;
            cardio.classList.remove('option_button2');
            cardio.classList.add('option_button');
            clearInterval(countDown);

        }

    }, 1000);
});


pesas.addEventListener('click', () =>{
    if(progressWidth3>90){
        progressWidth3=100;
    }else{
        progressWidth3+=10;
    }
    progressBar3.style.width=(progressWidth3)+'%';
    numSerotonina.innerHTML=progressWidth3.toString();
    babyYoda.src='./imagenes/pesasYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let intervalbuton=10;
    pesas.classList.add('option_button2');
    pesas.classList.remove('option_button');

    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            pesas.disabled = true;


        }else{
            pesas.disabled = false;
            pesas.classList.remove('option_button2');
            pesas.classList.add('option_button');

            clearInterval(countDown);

        }

    }, 1000);
});

boxa.addEventListener('click', () =>{
    if(progressWidth3>85){
        progressWidth3=100;
    }else{
        progressWidth3+=15;
    }
    progressBar3.style.width=(progressWidth3)+'%';
    numSerotonina.innerHTML=progressWidth3.toString();
    
    let intervalbuton=15;
    boxa.classList.add('option_button2');
    boxa.classList.remove('option_button');

    babyYoda.src='./imagenes/boxaYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            boxa.disabled = true;


        }else{
            boxa.disabled = false;
            boxa.classList.remove('option_button2');
            boxa.classList.add('option_button');
            clearInterval(countDown);

        }

    }, 1000);
});


dormir.addEventListener('click', () =>{
    if(progressWidth4>95){
        progressWidth4=100;
    }else{
        progressWidth4+=5;
    }
    progressBar4.style.width=(progressWidth4)+'%';
    numDescanso.innerHTML=progressWidth4.toString();
    
    let intervalbuton=5;
    dormir.classList.add('option_button2');
    dormir.classList.remove('option_button');
    babyYoda.src='./imagenes/sleepYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            dormir.disabled = true;


        }else{
            dormir.disabled = false;
            dormir.classList.remove('option_button2');
            dormir.classList.add('option_button');
            clearInterval(countDown);

        }

    }, 1000);
});


siesta.addEventListener('click', () =>{
    if(progressWidth4>90){
        progressWidth4=100;
    }else{
        progressWidth4+=10;
    }
    progressBar4.style.width=(progressWidth4)+'%';
    numDescanso.innerHTML=progressWidth4.toString();
    
    let intervalbuton=10;
    siesta.classList.add('option_button2');
    siesta.classList.remove('option_button');
    babyYoda.src='./imagenes/napYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            siesta.disabled = true;


        }else{
            siesta.disabled = false;
            siesta.classList.remove('option_button2');
            siesta.classList.add('option_button');
            clearInterval(countDown);
        }

    }, 1000);
    
});


relax.addEventListener('click', () =>{
    if(progressWidth4>85){
        progressWidth4=100;
    }else{
        progressWidth4+=15;
    }
    progressBar4.style.width=(progressWidth4)+'%';
    numDescanso.innerHTML=progressWidth4.toString();
    
    let intervalbuton=15;
    relax.classList.add('option_button2');
    relax.classList.remove('option_button');

    babyYoda.src='./imagenes/relaxYoda.gif';
    audioClick.load();
    audioClick.play();
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;

        if (intervalbuton>0){
            relax.disabled = true;
           

        }else{
            relax.disabled = false;
            relax.classList.remove('option_button2');
            relax.classList.add('option_button');
            clearInterval(countDown);

        }
    
    }, 1000);
    

});

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h4.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
    checkColorsMusic(media,htmlaudio);

}

reset.onclick = function() {
    window.location.reload();
}