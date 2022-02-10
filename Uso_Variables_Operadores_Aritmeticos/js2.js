//se pide el input al usuario y se le asigna a la variable temp
var temp = parseInt(prompt("Ingresa la temperatura en Celsius"));
//se hacen las transformaciones y se asigna los resultados a las variables
var kelvin = temp + 273.15
var fahr = (temp *9/5) + 32;
//se muestra al usuario los resultados
alert(kelvin + " °K   " + fahr + " °F");
