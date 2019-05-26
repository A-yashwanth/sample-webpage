function doFirst(){
	var submit=document.getElementById("submit");
	submit.addEventListener("click",savedata,false);
	
}
function save(){
	var name=document.getElementById("name").value;
	var password=document.getElementById("password").value;
	var date=document.getElementById("date").value;
	var color=document.getElementById("color").value;
	var email=document.getElementById("email").value;
	var num=document.getElementById("num").value;
	
	sessionStorage.setItem(name,password);
	display();
}
function display(){
	var right=document.getElementById("right");
	 var password=sessionStorage.getItem(0);
//	var b=sessionStorage.getItem(a);
	right.innerHTML="NAME : "+name+"pswd : "password;
	
}
window.addEventListener("load",doFirst,false);  