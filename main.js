"use strict";
let progressBar = document.getElementById('llenito');
let numLleno = document.getElementById('lleno');
const helado = document.getElementById('boton1');
const pizza = document.getElementById('boton2');
const brocoli = document.getElementById('boton3');
let progressBar2 = document.getElementById('juego');
let numSatisfecho = document.getElementById('satisfecho');
const play = document.getElementById('boton4');
const ball = document.getElementById('boton5');
const cartas = document.getElementById('boton6');
let progressBar3 = document.getElementById('ejercicio');
let numSerotonina = document.getElementById('serotonina');
const cardio = document.getElementById('boton7');
const pesas = document.getElementById('boton8');
const boxa = document.getElementById('boton9');
let progressBar4 = document.getElementById('relax');
let numDescanso = document.getElementById('descanso');
const dormir = document.getElementById('boton10');
const siesta = document.getElementById('boton11');
const relax = document.getElementById('boton12');
let babyYoda = document.getElementById('bebito');
let progressWidth = 100;
let progressWidth2 = 100;
let progressWidth3 = 100;
let progressWidth4 = 100;
let progressBarTotal = document.getElementById('progresoTotal');
let media = (progressWidth + progressWidth2 + progressWidth3 + progressWidth4) / 4;
progressBarTotal.style.width = media + '%';
let countDown = setInterval(() => {
    progressWidth--;
    media = (progressWidth + progressWidth2 + progressWidth3 + progressWidth4) / 4;
    progressBarTotal.style.width = media + '%';
    checkColors(media, progressBarTotal);
    console.log(media.toString());
    if (media == 0) {
        babyYoda.src = './imagenes/byeYoda.gif';
        clearInterval(countDownImage);
    }
    if (progressWidth > 0) {
        progressBar.style.width = progressWidth + '%';
        numLleno.innerHTML = progressWidth.toString();
        checkColors(progressWidth, progressBar);
    }
    else {
        clearInterval(countDown);
        progressBar.style.width = '0%';
        numLleno.innerHTML = '0';
        progressWidth = 0;
        helado.disabled = true;
        helado.classList.add('option_button2');
        pizza.disabled = true;
        pizza.classList.add('option_button2');
        brocoli.disabled = true;
        brocoli.classList.add('option_button2');
    }
}, 1000);
let countDown2 = setInterval(() => {
    progressWidth2--;
    media = (progressWidth + progressWidth2 + progressWidth3 + progressWidth4) / 4;
    progressBarTotal.style.width = media + '%';
    checkColors(media, progressBarTotal);
    if (media == 0) {
        babyYoda.src = './imagenes/byeYoda.gif';
        clearInterval(countDownImage);
    }
    if (progressWidth2 > 0) {
        progressBar2.style.width = progressWidth2 + '%';
        numSatisfecho.innerHTML = progressWidth2.toString();
        checkColors(progressWidth2, progressBar2);
    }
    else {
        clearInterval(countDown2);
        progressBar2.style.width = '0%';
        numSatisfecho.innerHTML = '0';
        progressWidth2 = 0;
        play.disabled = true;
        play.classList.add('option_button2');
        ball.disabled = true;
        ball.classList.add('option_button2');
        cartas.disabled = true;
        cartas.classList.add('option_button2');
    }
}, 1000);
let countDown3 = setInterval(() => {
    progressWidth3--;
    media = (progressWidth + progressWidth2 + progressWidth3 + progressWidth4) / 4;
    progressBarTotal.style.width = media + '%';
    checkColors(media, progressBarTotal);
    if (media == 0) {
        babyYoda.src = './imagenes/byeYoda.gif';
        clearInterval(countDownImage);
    }
    if (progressWidth3 > 0) {
        progressBar3.style.width = progressWidth3 + '%';
        numSerotonina.innerHTML = progressWidth3.toString();
        checkColors(progressWidth3, progressBar3);
    }
    else {
        clearInterval(countDown3);
        progressBar3.style.width = '0%';
        numSerotonina.innerHTML = '0';
        progressWidth3 = 0;
        cardio.disabled = true;
        cardio.classList.add('option_button2');
        pesas.disabled = true;
        pesas.classList.add('option_button2');
        boxa.disabled = true;
        boxa.classList.add('option_button2');
    }
}, 1000);
let countDown4 = setInterval(() => {
    progressWidth4--;
    media = (progressWidth + progressWidth2 + progressWidth3 + progressWidth4) / 4;
    progressBarTotal.style.width = media + '%';
    checkColors(media, progressBarTotal);
    if (media == 0) {
        babyYoda.src = './imagenes/byeYoda.gif';
        clearInterval(countDownImage);
    }
    if (progressWidth4 > 0) {
        progressBar4.style.width = progressWidth4 + '%';
        numDescanso.innerHTML = progressWidth4.toString();
        checkColors(progressWidth4, progressBar4);
    }
    else {
        clearInterval(countDown4);
        progressBar4.style.width = '0%';
        numDescanso.innerHTML = '0';
        progressWidth4 = 0;
        dormir.disabled = true;
        dormir.classList.add('option_button2');
        siesta.disabled = true;
        siesta.classList.add('option_button2');
        relax.disabled = true;
        relax.classList.add('option_button2');
    }
}, 1000);
const checkColors = (width, barra) => {
    if (width > 60) {
        barra.style.background = '#12ec49';
    }
    else if (width > 30) {
        barra.style.background = 'yellow';
    }
    else {
        barra.style.background = 'red';
    }
};
let intervalbutonImage = 5;
let countDownImage = setInterval(() => {
    console.log(intervalbutonImage.toString());
    if ((intervalbutonImage < 1) && (media == 0)) {
        babyYoda.src = './imagenes/Baby.png';
    }
    else {
        intervalbutonImage--;
    }
}, 1000);
helado.addEventListener('click', () => {
    if (progressWidth > 95) {
        progressWidth = 100;
    }
    else {
        progressWidth += 5;
    }
    progressBar.style.width = (progressWidth) + '%';
    numLleno.innerHTML = progressWidth.toString();
    let intervalbuton = 5;
    helado.classList.add('option_button2');
    babyYoda.src = './imagenes/heladoYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            helado.disabled = true;
        }
        else {
            helado.disabled = false;
            helado.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
pizza.addEventListener('click', () => {
    if (progressWidth > 90) {
        progressWidth = 100;
    }
    else {
        progressWidth += 10;
    }
    progressBar.style.width = (progressWidth) + '%';
    numLleno.innerHTML = progressWidth.toString();
    let intervalbuton = 10;
    pizza.classList.add('option_button2');
    babyYoda.src = './imagenes/pizzaYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            pizza.disabled = true;
        }
        else {
            pizza.disabled = false;
            pizza.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
brocoli.addEventListener('click', () => {
    if (progressWidth > 85) {
        progressWidth = 100;
    }
    else {
        progressWidth += 15;
    }
    progressBar.style.width = (progressWidth) + '%';
    numLleno.innerHTML = progressWidth.toString();
    let intervalbuton = 15;
    brocoli.classList.add('option_button2');
    babyYoda.src = './imagenes/brocoliYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            brocoli.disabled = true;
        }
        else {
            brocoli.disabled = false;
            brocoli.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
play.addEventListener('click', () => {
    if (progressWidth2 > 95) {
        progressWidth2 = 100;
    }
    else {
        progressWidth2 += 5;
    }
    progressBar2.style.width = (progressWidth2) + '%';
    numSatisfecho.innerHTML = progressWidth2.toString();
    let intervalbuton = 5;
    play.classList.add('option_button2');
    babyYoda.src = './imagenes/playYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            play.disabled = true;
        }
        else {
            play.disabled = false;
            play.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
ball.addEventListener('click', () => {
    if (progressWidth2 > 90) {
        progressWidth2 = 100;
    }
    else {
        progressWidth2 += 10;
    }
    progressBar2.style.width = (progressWidth2) + '%';
    numSatisfecho.innerHTML = progressWidth2.toString();
    let intervalbuton = 10;
    ball.classList.add('option_button2');
    babyYoda.src = './imagenes/ballYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            ball.disabled = true;
        }
        else {
            ball.disabled = false;
            ball.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
cartas.addEventListener('click', () => {
    if (progressWidth2 > 85) {
        progressWidth2 = 100;
    }
    else {
        progressWidth2 += 15;
    }
    progressBar2.style.width = (progressWidth2) + '%';
    numSatisfecho.innerHTML = progressWidth2.toString();
    let intervalbuton = 15;
    cartas.classList.add('option_button2');
    babyYoda.src = './imagenes/cardsYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            cartas.disabled = true;
        }
        else {
            cartas.disabled = false;
            cartas.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
cardio.addEventListener('click', () => {
    if (progressWidth3 > 95) {
        progressWidth3 = 100;
    }
    else {
        progressWidth3 += 5;
    }
    progressBar3.style.width = (progressWidth3) + '%';
    numSerotonina.innerHTML = progressWidth3.toString();
    let intervalbuton = 5;
    cardio.classList.add('option_button2');
    babyYoda.src = './imagenes/cardioYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            cardio.disabled = true;
        }
        else {
            cardio.disabled = false;
            cardio.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
pesas.addEventListener('click', () => {
    if (progressWidth3 > 90) {
        progressWidth3 = 100;
    }
    else {
        progressWidth3 += 10;
    }
    progressBar3.style.width = (progressWidth3) + '%';
    numSerotonina.innerHTML = progressWidth3.toString();
    babyYoda.src = './imagenes/pesasYoda.gif';
    intervalbutonImage = 5;
    let intervalbuton = 10;
    pesas.classList.add('option_button2');
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            pesas.disabled = true;
        }
        else {
            pesas.disabled = false;
            pesas.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
boxa.addEventListener('click', () => {
    if (progressWidth3 > 85) {
        progressWidth3 = 100;
    }
    else {
        progressWidth3 += 15;
    }
    progressBar3.style.width = (progressWidth3) + '%';
    numSerotonina.innerHTML = progressWidth3.toString();
    let intervalbuton = 15;
    boxa.classList.add('option_button2');
    babyYoda.src = './imagenes/boxaYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            boxa.disabled = true;
        }
        else {
            boxa.disabled = false;
            boxa.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
dormir.addEventListener('click', () => {
    if (progressWidth4 > 95) {
        progressWidth4 = 100;
    }
    else {
        progressWidth4 += 5;
    }
    progressBar4.style.width = (progressWidth4) + '%';
    numDescanso.innerHTML = progressWidth4.toString();
    let intervalbuton = 5;
    dormir.classList.add('option_button2');
    babyYoda.src = './imagenes/sleepYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            dormir.disabled = true;
        }
        else {
            dormir.disabled = false;
            dormir.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
siesta.addEventListener('click', () => {
    if (progressWidth4 > 90) {
        progressWidth4 = 100;
    }
    else {
        progressWidth4 += 10;
    }
    progressBar4.style.width = (progressWidth4) + '%';
    numDescanso.innerHTML = progressWidth4.toString();
    let intervalbuton = 10;
    siesta.classList.add('option_button2');
    babyYoda.src = './imagenes/napYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            siesta.disabled = true;
        }
        else {
            siesta.disabled = false;
            siesta.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
relax.addEventListener('click', () => {
    if (progressWidth4 > 85) {
        progressWidth4 = 100;
    }
    else {
        progressWidth4 += 15;
    }
    progressBar4.style.width = (progressWidth4) + '%';
    numDescanso.innerHTML = progressWidth4.toString();
    let intervalbuton = 15;
    relax.classList.add('option_button2');
    babyYoda.src = './imagenes/relaxYoda.gif';
    intervalbutonImage = 5;
    let countDown = setInterval(() => {
        intervalbuton--;
        if (intervalbuton > 0) {
            relax.disabled = true;
        }
        else {
            relax.disabled = false;
            relax.classList.remove('option_button2');
            clearInterval(countDown);
        }
    }, 1000);
});
