function doFirst(){
  var x=document.getElementById('canvas');
  canvas=x.getContext('2d');

  window.addEventListener("mousemove",mousePoint,false);
}
function mousePoint(e){
	//canvas.clearRect(0,0,500,600);
	canvas.fillStyle="blue"
	var xPos=e.clientX;
	var yPos=e.clientY;
	canvas.strokeRect(xPos-50,yPos-50,1,1);
}
window.addEventListener("load",doFirst,false);