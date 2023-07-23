console.log("hello");
let count = 0;

document.getElementById("minus").onclick = function(){
    count -= 1;
    document.getElementById("InputHere").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("InputHere").innerHTML = count;
}

document.getElementById("plus").onclick = function(){
    count += 1;
    document.getElementById("InputHere").innerHTML = count;
}