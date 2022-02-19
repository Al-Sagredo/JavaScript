
//se pide el input al usuario y se le asigna a la variable dias
var dias = parseInt(prompt("Ingresa el numero de dias"));
//transforma de dias a años
var anos = Math.floor(dias/365);
dias = dias - anos*365;
//transforma de dias a semanas lo restante
var semanas = Math.floor(dias/7);
dias = dias - semanas*7;

//se muestra al usuario los resultados
alert(anos +  " años  " + semanas + " semanas  " + dias + " dias");
