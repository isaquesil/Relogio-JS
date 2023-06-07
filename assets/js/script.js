const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')
const button1 = document.querySelector('#btn1')
const button2 = document.querySelector('#btn2')
const rel =  document.querySelector('#body')

function mudaCor(cor){
    rel.style.background = cor
}

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    let cont = 0

    if (hr < 10) hr = '0' + hr;
    
    if (min < 10) min = '0' + min;
    
    if (s < 10) s = '0' + s;

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s
})

button1.addEventListener('click', function(){
    mudaCor('#000')
    button1.style.display = 'none'
    button2.style.display = 'block'
})

button2.addEventListener('click', function(){
    mudaCor('linear-gradient(120deg, #ffe53bd8, #ff2525da)')
    button2.style.display = 'none'
    button1.style.display = 'block'
})