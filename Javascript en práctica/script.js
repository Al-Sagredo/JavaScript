//captura el objeto formulario
var form = document.getElementById("formulario");
//asigna un evento submit
form.addEventListener("submit", function(event) {
  //previene actualizacion de la pagina
  event.preventDefault();
  limpiarErrores();
  //captura el contenido de los campos llenados
  let nombre = document.querySelector("#nombre").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.querySelector("#mensaje").value;


  //mete a la funcion *validar* los textos y asigna el return boolean a una variable resultado
  let resultado = validar(nombre, asunto, mensaje);
  //si el resultado es true se muestra el mensaje de exito
  if (resultado) {
    exito();
  };
});

/////////////////////////////////////////////////////
//deja en blanco los campos de error
function limpiarErrores() {
  document.querySelector(".resultado").innerHTML = "";
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

////////////////////////////////////////////////
function exito() {
  document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito !!!"
}

//////////////////////////////////////////////
function validar(nombre, asunto, mensaje) {
  let pasoValidacion = true;

  //compara a traves de *test* la expresion regular con el parametro ingresado correspondiente
  let validacionNombre = /[^a-zA-Z ]/gim;
  if (validacionNombre.test(nombre) == true) { //el campo tiene caracteres que no son letras
    document.querySelector(".errorNombre").innerHTML = "Solo letras permitidas";
    pasoValidacion = false;
  } else if (nombre == "") { //campo vacío
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
    pasoValidacion = false;
  }

  let validacionAsunto = /[^a-zA-Z ]/gim;
  if (validacionAsunto.test(asunto) == true) {
    document.querySelector(".errorAsunto").innerHTML = "Solo letras permitidas";
    pasoValidacion = false;
  } else if (asunto == "") {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
    pasoValidacion = false;
  }

  let validacionMensaje = /[^a-zA-Z ]/gim;
  if (validacionMensaje.test(mensaje) == true) {
    document.querySelector(".errorMensaje").innerHTML = "Solo letras permitidas";
    pasoValidacion = false;
  } else if (mensaje == "") {
    document.querySelector(".errorNombre").innerHTML = "El mensaje es requerido";
    pasoValidacion = false;
  }
  //devuelve true solo si los 3 parametros cumplieron la validacion
  return pasoValidacion;
};
