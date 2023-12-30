let val = 0;
let id = document.getElementById("output");
id.innerHTML = 0;
function increase(){
    val += 1;
    id.innerHTML = val;
}
function decrease(){
    val -= 1;
    id.innerHTML = val;
}

function reset(){
    val = 0;
    id.innerHTML = val;
}