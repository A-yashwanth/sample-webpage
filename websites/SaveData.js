function doFirst(){
   var button=document.getElementById("button");
   button.addEventListener("click",saveCrap,false);
  // display();
}
function saveCrap(){
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one,two);
	display(one);
	document.getElementById("one").value="";
    document.getElementById("two").value="";
}
function display(one){
	var rightbox=document.getElementById("right");
//	var one=sessionStorage.getItem(one);
		var two=sessionStorage.getItem(one);
	rightbox.innerHTML="Name :"+one+"<br />Value :"+two; 
}

window.addEventListener("load",doFirst,false)