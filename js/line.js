//xi, yi se usan para guardar las coordenadas del primer punto de la recta
let xi=0; 
let yi=0;

//la recta se define por dos puntos, el punto inicial de la recta
//sera la posicion donde se haga clic por primera vez y el punto
//final estara definido por la ubicacion del segundo clic
let first_point=true;  //bandera para controlar los clics

function put_pixel(context, x,y, color){
    context.fillStyle = color;
    context.fillRect(x, y, 1, 1);
} 

//Para pintar una recta esta funcion debera ser ejecutada dos veces
//la primera vez captura las coordenadas del punto incial de la recta
// y lo grafica sobre el lienzo. La segunda vez toma las coordenadas
//del segundo punto y pinta la lénea llamando a la funcion equation_linea.
function draw(event){ //Esta funcion se ejecuta cada que se hace clic sobre el lienzo

  let canvas = document.getElementById("lienzo"); //accedemos al lienzo de dibujo
  let context = canvas.getContext("2d"); //obtenemos el context 2d del lienzo

  if(first_point){  //Si es el primer click, se lee el primer punto de la línea
    xi=event.offsetX;  //Guardamos la abscisa
    yi=event.offsetY;  //guardamos la ordenada
    put_pixel(context, xi, yi, "#00FF00");  //ponemos el punto inicial en verde
  }
  else  //Si es el segundo clic, pintamos la lnea con los valores xi, yi
        //y la posición del último clic del ratón (event.offsetX, event.offsetY)
    equation_linea(xi, yi, event.offsetX, event.offsetY, context, "#00FF00");
  first_point =! first_point;
  
}

function equation_linea(x0, y0, x1, y1, context, color){

  let m=(y1-y0)/(x1-x0); //calcular pendiente
  let b= y0 - (m*x0);    //determinar el punto donde la recta se cruza con el eje y

  for(let x=x0; x<=x1; x++){ //Se asume que el punto inicial esta mas a la izq q el final
    let y= (m*x)+b;     //Ecuacián de la recta
    put_pixel(context, x, Math.round(y), color);  //pintar el siguiente punto de la línea
  }

}
