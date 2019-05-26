function doFirst(){
  var x=document.getElementById('canvas');
  canvas=x.getContext('2d');
   
   canvas.shadowOffSetX=4;
   canvas.shadowOffSetY=4;
   canvas.shadowBlur=6;
   canvas.shadowColor='rgba(0,0,255,.5)';
   
   canvas.font="bold 36px Tahoma";
   canvas.textAlign="end";
   canvas.fillText("stroke using canvas!",500,40);
    
   canvas.beginPath();
   canvas.moveTo(100,300);
   canvas.lineTo(200,250);
   canvas.lineTo(100,100);
   canvas.lineTo(250,200);
   
   canvas.lineTo(300,50);
  canvas.lineTo(350,200);
   canvas.lineTo(500,100);
  canvas.lineTo(400,250);

 canvas.lineTo(500,300);

 canvas.lineTo(300,500);

  canvas.closePath();
   canvas.stroke();
   
}
window.addEventListener("load",doFirst,false);