var q = document.getElementById("dibujito");
var lienzo = q.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var color = "pink";

for(l=0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarlinea("#0c076b", 0, yi, xf, 300);
    console.log("linea " + l);
}
dibujarlinea(color, 1, 1, 0, 300);
dibujarlinea(color, 1, 299, 299, 299);

function dibujarlinea (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
