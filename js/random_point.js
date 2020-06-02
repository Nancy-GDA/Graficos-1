function put_pixel(context, x, y, r, g, b, a){
    //configura el color para pintado
    context.fillStyle = "rgba("+r+","+g+","+b+","+a+")"; 
  
    //pintar un punto (debe ser 1x1, para mejorar su visualizaci�n es de 3x3)
    context.fillRect( x, y, 3, 3 );
  
  }
  
  function draw(){ //Esta funci�n es llamada al cargar el documento html
  
    let canvas = document.getElementById("lienzo"); //accedemos al lienzo de dibujo
  
    let context = canvas.getContext("2d"); //obtenemos el context 2d del lienzo
    
    for (let i=0; i<1000; i++){ //pintaremos 1000 pixeles
      
      //obtenemos las coordenadas x,y al azar
      let x = Math.floor((Math.random() * 1205) + 1);
      let y = Math.floor((Math.random() * 500) + 1);
  
      //obtenemos las intensidades de los canales RGBa del pixel al azar
      let r = Math.floor((Math.random() * 255) + 1); 
       //componente roja entre 0 y 255
      let g = Math.floor((Math.random() * 255) + 1);  
      //componente verde  entre 0 y 255
      let b = Math.floor((Math.random() * 255) + 1);  
      //componente azul  entre 0 y 255
      
      //la transparencia del pixel es un n�mero real entre 0 y 1
      let a = Math.random();  
        //pintamos el pixel
      put_pixel(context, x, y, r, g, b, a);  
    }
   
  } 
  