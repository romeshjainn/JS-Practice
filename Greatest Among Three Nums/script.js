function findGreatest() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
  
    let result;
  
    if (num1 >= num2 && num1 >= num3) {
      result = "Number 1 is the greatest";
    } else if (num2 >= num1 && num2 >= num3) {
      result = "Number 2 is the greatest";
    } else {
      result = "Number 3 is the greatest";
    }
  
    document.getElementById("result").innerHTML = result;
  }
  