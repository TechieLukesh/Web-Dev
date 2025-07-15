const red=document.getElementById('red');
const yellow=document.getElementById('yellow');
const green=document.getElementById('green');

// turn all lights off 

function turnOffAll(){
    red.style.opacity=0.3;
    yellow.style.opacity=0.3;
    green.style.opacity=0.3;
}

// function to start tl 

function startTrafficLight(){
    let state=0;

    setInterval(()=>{
        turnOffAll();

        if(state===0){
            red.style.opacity=1;
        }
        else if(state===1){
            yellow.style.opacity=1;
        }
        else if(state==2){
            green.style.opacity=1;
        }

        state=(state+1)%3;
        
    }, 2000);
}

startTrafficLight();