let logTick = true;


let tickTack = function() {
    if(logTick){
        console.log("tick");
    }else{
        console.log("tock");
    }

    logTick = !logTick;
};


setTimeout(function(){
    clearInterval(timer);
    console.log("Guten Morgen!");
    }, 6100)


;


let timer = setInterval(tickTack, 1000);






