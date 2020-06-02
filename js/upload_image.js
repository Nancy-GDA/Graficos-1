let canvas_origin;
let canvas_result;
let origin_context;
let result_context;
let origin_image;
let result_image;


document.getElementById('cargar').addEventListener('change', read_picture);
document.getElementById('umbral').addEventListener('input', copy);

function prepare_results(){ 
  canvas_result = document.getElementById('canvas2');
  result_context = canvas_result.getContext('2d');
  canvas_result.height = canvas_origin.height;
  canvas_result.width = canvas_origin.width;
  origin_image = origin_context.getImageData(0, 0, canvas_origin.width, canvas_origin.height); 
  imgResultado = result_context.createImageData(canvas_origin.width, canvas_origin.height);
}

    function read_picture(e){
        
        let file = e.target.files[0];
        if(file){        
            let reader = new FileReader();
            reader.readAsDataURL(file);         
            reader.onload = function(event){
                put_image_canvas(event.target.result);
            }
        }
    }


    function put_image_canvas(data_image){  
        let img = new Image();
        img.src = data_image;
        img.onload = function(){
            let canvas = document.getElementById('Mi Canvas');
            let context = canvas.getContext('2d');
            //canvas.width=img.width;
            //canvas.height=img.height;
            context.drawImage(img, 0, 0);
        }
    }
    function copy(){   
  

        for (i = 0; i < origin_image.data.length; i+=4){
            
          
            result_image.data[i+0] = origin_image.data[i+0];
            result_image.data[i+1] = origin_image.data[i+1];
            result_image.data[i+2] = origin_image.data[i+2];
            result_image.data[i+3] = origin_image.data[i+3];
      
        }
        result_context.putImageData(result_image, 0, 0);
      
      }
      
      
      
      
      
         






