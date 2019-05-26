function doFirst(){
	mypic=document.getElementById('image');
	mypic.addEventListener("dragstart",startDrag,false);
	mypic.addEventListener("dragend",endDrag,false);
	leftbox=document.getElementById('left');
	leftbox.addEventListener("dragenter",dragenter,false);
	leftbox.addEventListener("dragleave",dragleave,false);
	leftbox.addEventListener("dragover",function(e){e.preventDefault();},false);
	leftbox.addEventListener("drop",dropped,false);
}
function endDrag(e){
	pic=e.target;
	pic.style.visibility='hidden';
}

function startDrag(e){
	 var code='<img src="1.jpg width="100px" height="100px">';
	 e.dataTransfer.setData('Text',code);
}
function dragenter(e){
	e.preventDefault();
	left.style.background='gray';
	left.style.border='3px solid green';
}
 
function dragleave(e){
	e.preventDefault();
	left.style.background='#cce';
	left.style.border='3px solid blue';
}
function dropped(e){
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('text');
}
window.addEventListener("load",doFirst,false);