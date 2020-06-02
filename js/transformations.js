let color="#000000";
let canvas;
let context;

let points = []; //arreglo de points para guardar las coordenadas de los points del poligono


//la recta se define por dos points, el punto inicial de la recta
//ser� la posici�n donde se haga clic por primera vez y el punto
//final estara definido por la ubicaci�n del segundo clic
let first_point=true;  //bandera para controlar los clics

function put_pixel(context, x,y, color){
    context.fillStyle = color;
    context.fillRect(x, y, 1, 1);
} 


function draw(event){  //Esta funci�n se ejecuta cada que se hace clic sobre el lienzo

  canvas = document.getElementById("lienzo"); //accedemos al lienzo de dibujo
  context = canvas.getContext("2d"); //obtenemos el context 2d del lienzo

  if(first_point){  //Si es el primer clic, se lee el primer punto de la l�nea
    points.push({x:event.offsetX, y:event.offsetY});
    put_pixel(context, points[points.length-1].x, points[points.length-1].y, color);
    first_point = false;
  }
  else{  //pintar l�nea
    Bresenham_line(points[points.length-1].x, points[points.length-1].y, event.offsetX, event.offsetY, context, color);
    points.push({x:event.offsetX, y:event.offsetY});
  }
  
}

//Implementaci�n del algoritmo de Bresenham para l�neas
function Bresenham_line(x0, y0, x1, y1, context, color){
   let dx = Math.abs(x1-x0);
   let dy = Math.abs(y1-y0);
   let sx = (x0 < x1) ? 1 : -1;
   let sy = (y0 < y1) ? 1 : -1;
   let err = dx-dy;

   //context.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);

   while(x0!=x1 || y0!=y1){
     put_pixel(context, x0, y0, color);
     let e2 = 2*err;
     if (e2 >-dy){ err -= dy; x0  += sx; }
     if (e2 < dx){ err += dx; y0  += sy; }
   }
}

function climb(){   
  let sx = parseInt(document.getElementById("sx").value); //obtenemos el valor 
  let sy = parseInt(document.getElementById("sy").value); //obtenemos el valor 

  let T= new Array (); 
      T[0] = new Array (sx, 0,  0); 
      T[1] = new Array (0,  sy, 0); 
      T[2] = new Array (0,  0,  1); 
      
      transformation_2D(T);
}

function transfer(){   
  let dx = parseInt(document.getElementById("dx").value); //obtenemos el valor 
  let dy = parseInt(document.getElementById("dy").value); //obtenemos el valor 

  let T= new Array (); 
      T[0] = new Array (1, 0, dx); 
      T[1] = new Array (0, 1, dy); 
      T[2] = new Array (0, 0, 1); 
      
      transformation_2D(T);
}

function move(x, y){   

  let T= new Array (); 
      T[0] = new Array (1, 0, x); 
      T[1] = new Array (0, 1, y); 
      T[2] = new Array (0, 0, 1); 
      
      transformation_2D(T);
}

function rotate(){   
  let a = parseInt(document.getElementById("angulo").value); //obtenemos el valor del �ngulo de rotaci�n

  let x = points[0].x;  //guardamos ubicaci�n origial
  let y = points[0].y;

  move(-x,-y); //trasladamos al origen

  let T= new Array (); 
      T[0] = new Array (Math.cos(a), -Math.sin(a), 0); 
      T[1] = new Array (Math.sin(a), Math.cos(a), 0); 
      T[2] = new Array (0, 0, 1); 
      
      transformation_2D(T);  //rotamos

      move(x,y);  //trasladamos a posici�n inicial
}

function transformation_2D(m){
  for(let i = 0; i < points.length; i++) {
     
    let p = new Array(points[i].x, points[i].y, 1);

    points[i].x =  Math.round((m[0][0]*p[0]) + (m[0][1]*p[1]) + (m[0][2]*p[2]));
    points[i].y =  Math.round((m[1][0]*p[0]) + (m[1][1]*p[1]) + (m[1][2]*p[2])); 
             
  }
  paint_again();
}


function paint_again(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 1; i < points.length; i++) {
    lineaBresenham(points[i-1].x, points[i-1].y, points[i].x, points[i].y, context, color);
  }
  
}

function change_color(){ 
  color = document.getElementById("color").value; //obtenemos el color para pintar
  paint_again();
}

function subtract(){ 
  points = [];
  paint_again();
  first_point=true;
}






