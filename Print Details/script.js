let nam;
let email;
let number;
let age;
document.getElementById("submit").onclick = function(){
    nam = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;
    age = document.getElementById("age").value;

    document.getElementById("a").innerHTML = "Welcome " + nam + " to our website";
    document.getElementById("b").innerHTML = "Your email is : " + email;
    document.getElementById("c").innerHTML = "Your number is : " + number;
    document.getElementById("d").innerHTML = "Your age is : " + age;


}