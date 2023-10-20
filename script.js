var C = 0;
var K = 0;
var F = 0;

function convertir(event) {
    //Fahrenheit a Celsius C =(F-32)*5/9
    if (event.target.name == "Fahrenheit-a-Celsius") {
        F = document.getElementById("cantidad").value;
        C = (F - 32) * 5 / 9;
        document.getElementById("mensaje").innerHTML = ("Los grados a convertir son Celsius, el equivalente es el sig: C= " + C + " F= " + F)
    }
    //Fahrenheit a Kelvin K = (F-32)*5/9 +273
    else if (event.target.name == "Fahrenheit-a-Kelvin") {
        K = document.getElementById("cantidad").value;
        K = (F - 32) * 5 / 9 + 273;
        document.getElementById("mensaje").innerHTML = ("Kelvin: " + K);
    }
    //Celsius a Fahrenheit F = C*9/5+32
    else if (event.target.name == "Celsius-a-Fahrenheit") {
        C = document.getElementById("cantidad").value;
        F = C * 9 / 5 + 32;
        document.getElementById("mensaje").innerHTML = ("Fahrenheit: " + F);
    }
    //Celsius a Kelvin K=C+273
    else if (event.target.name == "Celsius-a-Kelvin") {
        C = document.getElementById("cantidad").value;
        K = C + 273;
        document.getElementById("mensaje").innerHTML = ("Celsius: " + K);
    }
    //Kelvin a Fahrenheit F= (k-273)9/5+32
    else if (event.target.name == "Kelvin-a-Fahrenheit") {
        K = document.getElementById("cantidad").value;
        F = (K - 273) * 9 / 5 + 32;
        document.getElementById("mensaje").innerHTML = ("Fahrenheit: " + F);
    }
    //Kelvin a Celsius C=K-273
    else {
        K = document.getElementById("cantidad").value;
        C = K - 273;
        document.getElementById("mensaje").innerHTML = ("Celsius: " + C);
    }
}