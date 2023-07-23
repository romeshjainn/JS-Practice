let a, b;
    document.getElementById("submit").onclick = function(){
    a = parseFloat(document.getElementById("num1").value);
    b = parseFloat(document.getElementById("num2").value);
    let c = a + b;
    document.getElementById("display").innerHTML = c;
}