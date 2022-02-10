//recibe input usuario numero jugadas
var numJugadas = parseInt(prompt("Cuanta veces quieres jugar?"));
var contador = 0;
var nombreSeleccionMaquina;

//inicio ciclo de numero de jugadas
while (contador < numJugadas) {
  //usuario selecciona su opcion
  var seleccionUsuario = parseInt(prompt("Indica el numero de tu jugada:  1. Piedra   2. Papel  3. Tijera"));
  //maquina selecciona su opcion
  var seleccionMaquina = generarJugadaMaquina();
//transforma la seleccion de la maquina en palabras para mostrarla
switch(seleccionMaquina){
  case 1:
  nombreSeleccionMaquina = "Piedra";
  break;
  case 2:
  nombreSeleccionMaquina = "Papel";
  break;
  case 3:
  nombreSeleccionMaquina = "Tijera";
  break;
}
  alert("La maquina ha elegido " + nombreSeleccionMaquina);
//compara valores
  if (seleccionUsuario == seleccionMaquina) {
    alert("Empate");
  } else if (seleccionUsuario - seleccionMaquina == -1 || seleccionUsuario - seleccionMaquina == 2) {
    alert("Has perdido");
  } else {
    alert("Has ganado");
  }
  contador++;
}
//funcion que genera la eleccion de la maquina
function generarJugadaMaquina() {
  return Math.floor(Math.random() * 3) + 1;
}
