var texto = document.getElementById("text_lineas")
var boton = document.getElementById("button");
boton.addEventListener("click", dibujoPorClick );

var q = document.getElementById("dibujito");
var ancho = q.width;
var lienzo = q.getContext("2d");

function dibujarlinea (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var yi, xf;
  var color = "pink";
  var espacio = ancho / lineas;

  for(l=0; l < lineas; l++)
  {
      yi = espacio * l;
      xf = espacio * (l + 1);
      dibujarlinea("#0c076b", 0, yi, xf, 300);
      console.log("linea " + l);
  }
  dibujarlinea(color, 1, 1, 0, 300);
  dibujarlinea(color, 1, 299, 299, 299);
}
