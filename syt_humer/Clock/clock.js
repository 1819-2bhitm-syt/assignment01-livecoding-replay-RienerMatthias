let logTick = true;


let tickTack = function() {
    if(logTick){
        console.log("tick");
    }else{
        console.log("tock");
    }

    logTick = !logTick;
};

let timer = setInterval(tickTack, 1000);



