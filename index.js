let conter = 0;


document.getElementById("decreaseBtn").onclick = function(){
    conter -= 1;
    document.getElementById("counters").innerHTML = conter;
}

document.getElementById("resetBtn").onclick = function(){
    conter = 0;
    document.getElementById("counters").innerHTML = conter;
}

document.getElementById("increaseBtn").onclick = function(){
    conter += 1;
    document.getElementById("counters").innerHTML = conter;
}

