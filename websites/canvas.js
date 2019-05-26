function dofirst(){
  var x=document.getElementById('canvas');
  canvas=x.getContext('2d');
  
  canvas.fillStyle="blue";
  canvas.strokeStyle="red";
  canvas.strokeRect(5,5,150,250);
  canvas.fillRect(250,10,100,200);
  canvas.clearRect(260,20,50,90);
  
  var g=canvas.createLinearGradient(10,10,100,100);
  g.addColorStop(.0,"blue");
  g.addColorStop(.5,"green");
   g.addColorStop(1,"red");
  canvas.fillStyle=g;
  canvas.fillRect(10,10,100,100);
  
}
window.addEventListener("load",dofirst,false);