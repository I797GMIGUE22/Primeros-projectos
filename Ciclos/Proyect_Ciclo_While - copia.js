var q = document.getElementById("dibujito");
var lienzo = q.getContext("2d");
var lineas = 30;
var e = 30;
var l = 0;
var o = 0;
var yi, xf;
var color = "pink";
var b = "blue";
var ñ = "yellow";

while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarlinea("#0c076b", 1, yi, xf, 300);
    dibujarlinea("black", 300, yi, xf, 300);
    dibujarlinea("red", 300 , yi, xf, 1);
    dibujarlinea("green", 1, yi, xf, 0);
    dibujarlinea("grey", 250, yi, xf, 300);
    dibujarlinea("grey", 300, yi, xf, 250);
    dibujarlinea("grey", 0, yi, xf, 50);
    dibujarlinea("grey", 50, yi, xf, 0);
    console.log("linea " + l);
    l = l + 2;
}
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarlinea("#0c076b", 1, yi, xf, 300);
  dibujarlinea("black", 300, yi, xf, 300);
  dibujarlinea("red", 300 , yi, xf, 1);
  dibujarlinea("green", 1, yi, xf, 0);
  dibujarlinea("orange", 250, yi, xf, 300);
  dibujarlinea("orange", 300, yi, xf, 250);
  dibujarlinea("grey", 0, yi, xf, 50);
  dibujarlinea("grey", 50, yi, xf, 0);
  console.log("linea " + l);
  l = l + 3;
}
while(o < e)
{
    yi = 10 * o;
    xf = 10 * (o + 1);
    dibujarlinea("black", 1, yi, xf, 300);
    dibujarlinea("white", 300, yi, xf, 300);
    dibujarlinea("black", 300 , yi, xf, 1);
    dibujarlinea("red", 1, yi, xf, 0);
    dibujarlinea("blue", 250, yi, xf, 300);
    dibujarlinea("blue", 300, yi, xf, 250);
    dibujarlinea("orange", 0, yi, xf, 50);
    dibujarlinea("orange", 50, yi, xf, 0);
    console.log("linea " + o);
    o = o + 1
}

dibujarlinea(color, 1, 1, 0, 300);
dibujarlinea(color, 1, 299, 299, 299);
dibujarlinea(b, 0, 0, 300, 0);
dibujarlinea(b, 300, 1, 300, 300);
dibujarlinea(ñ, 0, 300, 300, 300);
dibujarlinea(ñ, 1, 1, 1, 300);

function dibujarlinea (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
