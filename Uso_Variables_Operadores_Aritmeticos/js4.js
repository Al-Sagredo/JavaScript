//pide input al usuario
alert("Ingresa 5 numeros");
var num1 = parseInt(prompt("Primer numero: "));
var num2 = parseInt(prompt("Segundo numero: "));
var num3 = parseInt(prompt("Tercer numero: "));
var num4 = parseInt(prompt("Cuarto numero: "));
var num5 = parseInt(prompt("Quinto numero: "));
//suma los numeros y calcula el promedio, asigna a variables
var suma = num1+num2+num3+num4+num5;
var promedio = suma/5;
//muestra resultados en pantalla
alert("Suma: " + suma + "   Promedio: " + promedio);
