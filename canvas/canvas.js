var q = document.getElementById("dibujito");
var lienzo = q.getContext("2d");
console.log(lienzo);

dibujarlinea("blue", 89, 200, 300, 60);
dibujarlinea("yellow", 100, 300, 70, 98);
dibujarlinea("red", 30, 300, 20, 150);


function dibujarlinea (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
