var q = document.getElementById("dibujito");
var lienzo = q.getContext("2d");
var lineas = 30;
var o = 30;
var l = 0;
var r = 0;
var yi, xf;
var p, ñ;
var color = "pink";
var xd = "blue";

while(l < lineas);
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarlinea("#0c076b", 0, yi, xf, 300);
    console.log("linea " + l);
    l = l + 1;
}
dibujarlinea(color, 1, 1, 0, 300);
dibujarlinea(color, 1, 299, 299, 299);
while(r < o)
{
    p = 10 * r;
    ñ = 10 * (r - 10);
    dibujarlinea("#4f00bd", 300, p, ñ, 0);
    console.log("linea " + r);
    r = r + 300;
}
  dibujarlinea(xd, 1, 0, 300, 0);
  dibujarlinea(xd, 300, 300, 300, 0);

function dibujarlinea (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
