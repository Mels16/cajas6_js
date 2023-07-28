const btnGenerate = document.querySelector('#btn-generate');
const color = document.querySelector('#color');

btnGenerate.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    document.querySelector(".one").style.backgroundColor = '#' + randomColor;
    color.innerHTML = '#' + randomColor.toUpperCase();
})

// Segunda caja
const btnClick = document.querySelector('#btn-click');
const textDivTwo = document.querySelector('#textDivTwo');

btnClick.addEventListener('click', () => {
    textDivTwo.style.backgroundColor = '#FFF';
    textDivTwo.style.border = '1px solid red';
    textDivTwo.style.color = '#000';
})

// Tercera caja
const btnClickText = document.querySelector('#btn-click-text');
const textDivThree = document.querySelector('#text-div-three');

btnClickText.addEventListener('click', () => {
    textDivThree.style.backgroundColor = '#C84360';
    textDivThree.style.color = '#22E5B3';
})


// Caja 6
const btnClickSix = document.querySelector('#btn-click-like');
const iconLike = document.querySelector('#Capa_1');

btnClickSix.addEventListener('click', () => {
    iconLike.classList.add('animationRight');

    setTimeout(() => {
        iconLike.classList.remove('animationRight');
    }, 1000);
})