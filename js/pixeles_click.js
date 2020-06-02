function put_pixel(context, x, y, color){
    //configura el color para el pintado
    context.fillStyle = color; 
  
    //pintar un punto (debe ser 1x1, para mejorar su visualización es de 3x3)
    context.fillRect( x, y, 3, 3 );
  
  }
  
  function draw(){
    //obtenemos la ubicacion del clic del raton
    let x = event.offsetX; 
    //obtenemos la cordenada de la ubicacion del clic del raton
    let y = event.offsetY; 
  //accede al lienzo de dibujo
    let canvas = document.getElementById("lienzo"); 
  //obtenemos el contexto 2d del lienzo
    let context = canvas.getContext("2d"); 
  //pintamos el pixel x,y en color azul
    put_pixel(context, x, y, "#D01818"); 
    //mostramos la coordenada
    context.fillText( "(" + x + "," + y + ")", x+4, y); 
  }
