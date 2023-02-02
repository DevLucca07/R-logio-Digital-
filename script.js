const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo= document.getElementById('segundos')

const relogio=setInterval(function time(){
    let datetoday= new Date();
    let hr=datetoday.getHours();
    let mn=datetoday.getMinutes();
    let sg=datetoday.getSeconds();

    if(hr < 10) hr ='0' + hr;

    if(mn < 10) mn ='0' + mn;

    if(sg < 10) sg ='0' + sg;

    hora.textContent= hr;
    minuto.textContent=mn;
    segundo.textContent=sg;
})

