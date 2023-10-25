//Variables:

//First Module
let progressBar=document.getElementById('llenito') as HTMLInputElement;
let numLleno=document.getElementById('lleno') as HTMLInputElement;
let letrasLleno=document.getElementById('letrasLleno') as HTMLInputElement;
const helado=document.getElementById('boton1') as HTMLInputElement;
const pizza=document.getElementById('boton2') as HTMLInputElement;
const brocoli=document.getElementById('boton3') as HTMLInputElement;
//Second Module
let progressBar2=document.getElementById('juego') as HTMLInputElement;
let numSatisfecho=document.getElementById('satisfecho') as HTMLInputElement;
let letrasSatisfecho=document.getElementById('letrasSatisfecho') as HTMLInputElement;
const play=document.getElementById('boton4') as HTMLInputElement;
const ball=document.getElementById('boton5') as HTMLInputElement;
const cartas=document.getElementById('boton6') as HTMLInputElement;
//Third Module
let progressBar3=document.getElementById('ejercicio') as HTMLInputElement;
let numSerotonina=document.getElementById('serotonina') as HTMLInputElement;
let letrasSerotonina=document.getElementById('letrasSerotonina') as HTMLInputElement;
const cardio=document.getElementById('boton7') as HTMLInputElement;
const pesas=document.getElementById('boton8') as HTMLInputElement;
const boxa=document.getElementById('boton9') as HTMLInputElement;
//Fourth Module
let progressBar4=document.getElementById('relax') as HTMLInputElement;
let numDescanso=document.getElementById('descanso') as HTMLInputElement;
let letrasRelajao=document.getElementById('letrasRelajao') as HTMLInputElement;
const dormir=document.getElementById('boton10') as HTMLInputElement;
const siesta=document.getElementById('boton11') as HTMLInputElement;
const relax=document.getElementById('boton12') as HTMLInputElement;
//Center Module
let babyYoda=document.getElementById('bebito') as HTMLInputElement;
let progressBarTotal=document.getElementById('progresoTotal') as HTMLInputElement;
let letras=document.getElementById('letras') as HTMLInputElement;
let reset=document.getElementById('reset') as HTMLInputElement;

//Assign random value
let progressWidth=randomBar();
let progressWidth2=randomBar();
let progressWidth3=randomBar();
let progressWidth4=randomBar();

//Chrono
let h4 = document.getElementsByTagName('h4')[0] as HTMLInputElement;
let sec = 0;
let min = 0;
let hrs = 0;
let t:any;

//Audio Creation
let htmlaudio: HTMLAudioElement = new Audio('./Audio/firstAudio.mp3');
htmlaudio.autoplay=false;
htmlaudio.controls=false;
htmlaudio.loop=true;
document.body.appendChild(htmlaudio);

let audioClick: HTMLAudioElement = new Audio('./Audio/click.mp3');
audioClick.autoplay=false;
audioClick.controls=false;
audioClick.loop=false;
document.body.appendChild(audioClick);

//Calculate Average
let media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;
progressBarTotal.style.width=media+'%';

//Assign number of song
let change:number;
let welcome=true;
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

//Numero random para cada barra
function randomBar(){
    let x = Math.floor((Math.random() * 40) + 41);
    return x;
};

timer();

//CountDown bar 1
let countDown=setInterval(() => {
    progressWidth--;
    media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;
    progressBarTotal.style.width=media+'%';
    checkColors(media, progressBarTotal);
    checkColorsTimer(media,h4);
    finalCheck();
    if (progressWidth>0){
        progressBar.style.width=progressWidth+'%';
        numLleno.innerHTML=progressWidth.toString();
        checkColors(progressWidth, progressBar);
        checkColorsTimer(progressWidth, letrasLleno);
    }else{
        clearInterval(countDown);
        disableButtonsBar(progressBar,numLleno,progressWidth,helado,pizza,brocoli);
    }
}, 1000);

//CountDown bar 2
let countDown2=setInterval(() => {
    progressWidth2--;
    media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;
    progressBarTotal.style.width=media+'%';
    checkColors(media, progressBarTotal);
    checkColorsTimer(media,h4);
    finalCheck();
    if (progressWidth2>0){
        progressBar2.style.width=progressWidth2+'%';
        numSatisfecho.innerHTML=progressWidth2.toString();
        checkColors(progressWidth2, progressBar2);
        checkColorsTimer(progressWidth2, letrasSatisfecho);
    }else{
        clearInterval(countDown2);
        disableButtonsBar(progressBar2,numSatisfecho,progressWidth2,play,ball,cartas);
    }
}, 1000);

//CountDown bar 3
let countDown3=setInterval(() => {
    progressWidth3--;
    media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;
    progressBarTotal.style.width=media+'%';
    checkColors(media, progressBarTotal);
    checkColorsTimer(media,h4);
    finalCheck();
    if (progressWidth3>0){
        progressBar3.style.width=progressWidth3+'%';
        numSerotonina.innerHTML=progressWidth3.toString();
        checkColors(progressWidth3, progressBar3);
        checkColorsTimer(progressWidth3, letrasSerotonina);
    }else{
        clearInterval(countDown3);
        disableButtonsBar(progressBar3,numSerotonina,progressWidth3,cardio,pesas,boxa);
    }
}, 1000);

//CountDown bar 4
let countDown4=setInterval(() => {
    progressWidth4--;
    media=(progressWidth+progressWidth2+progressWidth3+progressWidth4)/4;
    progressBarTotal.style.width=media+'%';
    checkColors(media, progressBarTotal);
    checkColorsTimer(media, h4);
    finalCheck();
    if (progressWidth4>0){
        progressBar4.style.width=progressWidth4+'%';
        numDescanso.innerHTML=progressWidth4.toString();
        checkColors(progressWidth4, progressBar4);
        checkColorsTimer(progressWidth4, letrasRelajao);
    }else{
        clearInterval(countDown4);
        disableButtonsBar(progressBar4,numDescanso,progressWidth4,dormir,siesta,relax);
    }
}, 1000);

//Functions
function finalCheck(){
    if(media==0){
        babyYoda.src='./imagenes/byeYoda.gif';
        clearInterval(countDownImage);
        clearTimeout(t);
        gameOver();
    }
}

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
        change=2;
    }else if((width>30 && width<=60) && change==2){
        source.src="./Audio/secondAudio.mp3";
        source.volume=0.05;
        source.load();
        source.play();
        change=3;
    }else if(width<=30 && change==3){
        source.src="./Audio/thirdAudio.mp3";
        source.volume=0.1;
        source.load();
        source.play();            
        change=2;    
    }
}

function gameOver(){
    letras.style.display='none';
    reset.style.display='flex';
    htmlaudio.src="./Audio/gameOver.wav";
    htmlaudio.volume = 0.25; 
    htmlaudio.load();
    htmlaudio.play();
    htmlaudio.loop=false;
}

function disableButtonsBar(progressBar1:HTMLInputElement, numero:HTMLInputElement, progressWidth1:number, buton1:HTMLInputElement, buton2:HTMLInputElement, buton3:HTMLInputElement){
    progressBar1.style.width='0%';
    numero.innerHTML='0';
    progressWidth1=0;
    buton1.disabled=true;
    buton1.classList.add('option_button2');
    buton2.disabled=true;
    buton2.classList.add('option_button2');
    buton3.disabled=true;
    buton3.classList.add('option_button2');
}

function audioButton(){
    audioClick.load();
    audioClick.play();
}

function progressBarra(num:number,progressWidth1:number, progressBar1:HTMLInputElement, numero:HTMLInputElement){
    if(progressWidth1>100-num){
        progressWidth1=100;
    }else{
        progressWidth1+=num;
    }
    progressBar1.style.width=(progressWidth1)+'%';
    numero.innerHTML=progressWidth1.toString();
    return progressWidth1;
}

function deshabilitarUnBoton(intervalbuton:number, boton:HTMLInputElement){
    boton.classList.add('option_button2');
    boton.classList.remove('option_button');
    intervalbutonImage=5;
    let countDown=setInterval(() => {
        intervalbuton--;
        if (intervalbuton>0){
            boton.disabled = true;
        }else{
            boton.disabled = false;
            boton.classList.remove('option_button2');
            boton.classList.add('option_button');
            clearInterval(countDown);
        }
    }, 1000);
}

//Countdown image
let intervalbutonImage=5;
let countDownImage=setInterval(() => {
    if ((intervalbutonImage < 1) && (media > 0)){
        babyYoda.src='./imagenes/Baby.png';
    }else{
        intervalbutonImage--;
    }
}, 1000);

//Buttons click
helado.addEventListener('click', () =>{
    progressWidth=progressBarra(5,progressWidth, progressBar,numLleno);
    babyYoda.src='./imagenes/heladoYoda.gif';
    audioButton();
    deshabilitarUnBoton(5, helado);
});

pizza.addEventListener('click', () =>{
    progressWidth=progressBarra(10,progressWidth, progressBar,numLleno);
    babyYoda.src='./imagenes/pizzaYoda.gif';
    audioButton();
    deshabilitarUnBoton(10, pizza);
});

brocoli.addEventListener('click', () =>{
    progressWidth=progressBarra(15,progressWidth, progressBar,numLleno);
    babyYoda.src='./imagenes/brocoliYoda.gif';
    audioButton()
    deshabilitarUnBoton(15, brocoli);
});

play.addEventListener('click', () =>{
    progressWidth2=progressBarra(5,progressWidth2, progressBar2,numSatisfecho);
    babyYoda.src='./imagenes/playYoda.gif';
    audioButton();
    deshabilitarUnBoton(5,play);
});

ball.addEventListener('click', () =>{
    progressWidth2=progressBarra(10,progressWidth2, progressBar2,numSatisfecho);
    babyYoda.src='./imagenes/ballYoda.gif';
    audioButton();
    deshabilitarUnBoton(10,ball);
});

cartas.addEventListener('click', () =>{
    progressWidth2=progressBarra(15,progressWidth2, progressBar2,numSatisfecho);
    babyYoda.src='./imagenes/cardsYoda.gif';
    audioButton();
    deshabilitarUnBoton(15,cartas);
});

cardio.addEventListener('click', () =>{
    progressWidth3=progressBarra(5,progressWidth3, progressBar3,numSerotonina);
    babyYoda.src='./imagenes/cardioYoda.gif';
    audioButton();
    deshabilitarUnBoton(5,cardio);
    
});

pesas.addEventListener('click', () =>{
    progressWidth3=progressBarra(10,progressWidth3, progressBar3,numSerotonina);
    babyYoda.src='./imagenes/pesasYoda.gif';
    audioButton();
    deshabilitarUnBoton(10,pesas);
});

boxa.addEventListener('click', () =>{
    progressWidth3=progressBarra(15,progressWidth3, progressBar3,numSerotonina);
    babyYoda.src='./imagenes/boxaYoda.gif';
    audioButton();
    deshabilitarUnBoton(15,boxa);
});

dormir.addEventListener('click', () =>{
    progressWidth4=progressBarra(5,progressWidth4, progressBar4,numDescanso);
    babyYoda.src='./imagenes/sleepYoda.gif';
    audioButton();
    deshabilitarUnBoton(5,dormir);
});

siesta.addEventListener('click', () =>{
    progressWidth4=progressBarra(10,progressWidth4, progressBar4,numDescanso);
    babyYoda.src='./imagenes/napYoda.gif';
    audioButton();
    deshabilitarUnBoton(10,siesta);
});

relax.addEventListener('click', () =>{
    progressWidth4=progressBarra(15,progressWidth4, progressBar4,numDescanso);
    babyYoda.src='./imagenes/relaxYoda.gif';
    audioButton();
    deshabilitarUnBoton(15,relax);
});

//Functions chrono
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
//Reset button
reset.onclick = function() {
    window.location.reload();
}