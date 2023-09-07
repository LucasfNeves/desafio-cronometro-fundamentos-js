;(function(){
    "use strict";

    //coletando id do HTML 
    const timer = document.querySelector("#timer");
    const startButton = document.querySelector("#start");
    const stopButton = document.querySelector("#stop");
    const resetButton = document.querySelector("#reset");
    let secunds = 0;
    let cronometer;

   
    // cria a formatação '00:00:00' do relógio
    function getSecundsToHour(secunds) {
        const date = new Date(secunds * 1000); // estamos multiplicando os segundos pois no js 1s = 1000 
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,  // deixa no formato 24 horas
            timeZone: 'UTC'  // deixa só os segundos aparecendo
        }); 
    };

    function initializeCronometer(){
        cronometer = setInterval(function(){  // setInterval de 1 segundo, acrescentando 1 egundo a cada volta 
            secunds ++;
            timer.innerHTML = getSecundsToHour(secunds); // acrescenta os segundos no html, é chamado a função de formatação para ficar no formato '00:00:00'
        }, 1000);
    };

    startButton.addEventListener("click", function(event){  // escuta o evento de click
        timer.style.color = '#fff'
        clearInterval(cronometer)      // para o setInterval
        initializeCronometer()         // ao receber o click chama a função
    });

    stopButton.addEventListener("click", function(event){
        timer.style.color = 'red'
        clearInterval(cronometer);
    });

    resetButton.addEventListener("click", function(event){
        timer.style.color = '#fff'
        clearInterval(cronometer)
        timer.innerHTML = "00:00:00"
        secunds = 0;
    });



})()