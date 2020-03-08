var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea = 30;
var l = 0;
var yi, xf;
var colorcito =  "#FAA";
var colorcita = "blue";

for(l=0; l < linea; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, 300, yi, xf, 0);
  dibujarLinea(colorcita, 0, yi, xf, 300);
  console.log("linea" + l);


}






function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color ;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();


}
