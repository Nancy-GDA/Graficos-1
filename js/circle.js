function put_pixel(context, x,y, color){
    context.fillStyle = color;
    context.fillRect(x, y, 1, 1);
} 
function draw(event){
  let canvas = document.getElementById("lienzo");
  let context = canvas.getContext("2d");

  //circulo rosa con radio de 50 pixeles.
  //cuyo centro esta definido por las coodenadas del clic del raton
  circle(event.offsetX, event.offsetY, 50, context, "#A00A48");

}

//Implementacion del algoritmo de Bresenham para circulos 
function circle(xc, yc, radio, context, color){
  let x = radio*(-1);
  let y = 0;
  let r=radio;
  let err = 2-2*radio;
  do{
    put_pixel(context, xc-x, yc+y, color);
    put_pixel(context, xc-y, yc-x, color);
    put_pixel(context, xc+x, yc-y, color);
    put_pixel(context, xc+y, yc+x, color);
    r=err;
    if(r>x) err+=++x*2+1; if(r<=y) err+=++y*2+1;
  }while(x<0);

}








