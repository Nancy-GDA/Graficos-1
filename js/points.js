let color ="#00000";
let canvas
let context

//array que guarda coordenados de los points 
let points = []
//bandera que controla los clicks
let first_point = true

//crea el primer punto 
function put_pixel(context, x,y, color){
    context.fillStyle = color;
    context.fillRect(x, y, 1, 1);
} 

//dibuja el primer punto en el canvas
function draw(event){ 

  canvas = document.getElementById("lienzo"); 
  context = canvas.getContext("2d"); 

  if(first_point){  
    points.push({x:event.offsetX, y:event.offsetY});
    put_pixel(context, points[points.length-1].x, points[points.length-1].y, color);
    first_point = false;
  }
  else{ 
    Bresenham_line(points[points.length-1].x, points[points.length-1].y, event.offsetX, event.offsetY, context, color);
    points.push({x:event.offsetX, y:event.offsetY});
  }
  
}


function Bresenham_line(x0, y0, x1, y1, context, color){
   let dx = Math.abs(x1-x0);
   let dy = Math.abs(y1-y0);
   let sx = (x0 < x1) ? 1 : -1;
   let sy = (y0 < y1) ? 1 : -1;
   let err = dx-dy;



   while(x0!=x1 || y0!=y1){
     draw_pixel(context, x0, y0, color);
     let e2 = 2*err;
     if (e2 >-dy){ err -= dy; x0  += sx; }
     if (e2 < dx){ err += dx; y0  += sy; }
   }
}


function paint_again(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 1; i < points.length; i++) {
    Bresenham_line(points[i-1].x, points[i-1].y, points[i].x, points[i].y, context, color);
  }
  
}
//obtenemos el color para pintar
function change_color(){ 
  color = document.getElementById("color").value; 
  paint_again();
}

function subtract(){ 
  points = [];
  paint_again();
  first_point=true;
}

function see_array(){
  let info = "";
  for(let i = 0; i < points.length; i++) 
    info  += "Puntos "+i+": ("+points[i].x+","+points[i].y+")"+"\n";
  alert(info); 
}



