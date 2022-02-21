$(document).ready(function() {

  $("form").submit(function(event) {

    event.preventDefault() //previene refresco de pagina

    $(".errorNumeros").text(""); //limpia errores previos

    let valorInput = $("input").val(); //capturar busqueda

    let resultadoValidacion = validar(valorInput); //valida que el input solo tenga numeros

    if (resultadoValidacion) {//si el campo es valido, llama a la API
      $.ajax({
        url: "https://al-sagredo.github.io/superheroAPI/all.json",
        success: function(data) {
          let index = data[valorInput];
          //obtiene y guarda los valores solicitados del objeto heroe seleccionado
          let imagen = index.images.sm;
          let nombre = index.name;
          let alias = index.biography.aliases;
          let primeraAparicion = index.biography.firstAppearance;
          let publicacion = index.biography.publisher;
          let ocupacion = index.work.occupation;
          let altura = index.appearance.height.join(" - ");
          let peso = index.appearance.weight.join(" - ");
          let conexiones = index.connections.groupAffiliation;

          //inserta los valores obtenidos en el html
          $("#heroCard").html(`
                <img id="img-hero" class="example-card-img-responsive" src="${imagen}" alt="${nombre}">
                <div class="card-body col-12 col-sm-6"  id="texto">
                  <h5 class="card-title">Nombre: ${nombre}</h5>
                  <p class="card-text">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><strong>Aliases:</strong> ${alias}</li>
                      <li class="list-group-item"><strong>Primera Aparición:</strong> ${primeraAparicion}</li>
                      <li class="list-group-item"><strong>Publicado por:</strong> ${publicacion}</li>
                      <li class="list-group-item"><strong>Ocupación:</strong> ${ocupacion}</li>
                      <li class="list-group-item"><strong>Altura:</strong> ${altura}</li>
                      <li class="list-group-item"><strong>Peso:</strong> ${peso}</li>
                      <li class="list-group-item"><strong>Conexiones:</strong> ${conexiones}</li>
                    </ul>
                  </p>
                </div>

              `)
              let stats = []//crea un arreglo para almacenar las estadisticas del heroe

              for (feature in index.powerstats){//recorre el objeto powerstats y pobla el arreglo
                stats.push({
                  label : feature, //nombre de la propiedad
                  y : index.powerstats[feature], //valor de la propiedad
                  legendText: feature,
                })
              }

              //archivo de configuracion del grafico, el arreglo creado se mete en dataPoints
              let config = {
                animationEnabled: true,
                title: {
                  text:"Estadísticas de poder para " + nombre,
                  fontSize:24
                },

                data: [
                  {
                    type:"pie",
                    showInLegend:true,
                    toolTipContent: "{label} </br> {y} ",
                    indexLabel: "{label}({y})",
                    dataPoints: stats
                  }
                ]
              }
              //recibe como parametros, el objeto html que va a contener el grafico y la variable config recien creada
              let chart = new CanvasJS.Chart("chartContainer", config);

              chart.render();

        },
        error:function(error){
          console.log(error);
        }
      });
    }

    function validar(input) {
      let regExp = /[^0-9]/gim;
      if (regExp.test(input) == true) { //el campo contiene caracteres no numericos
        $(".errorNumeros").text("Solo numeros permitidos, sin espacios");
        return false;
      } else if (input > 562) {
        $(".errorNumeros").text("El ultimo héroe de la lista es el 562");
        return false
      }
      return true;
    }

  });

});
