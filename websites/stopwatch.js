
var secondsRemaining;
var intervalHandle;
function resetPage(){
	document.getElementById("area").sytle.display="block";
	
}
function tick(){
	//grab the h1
	var timeDisplay=document.getElementById("time");
	var min =Math.floor(secondsRemaining/60);
	var sec = secondsRemaining-(min*60);
	
	if (sec<10){
		sec="0"+sec;
	}
	//concatenate with colon
	var message=min.toString()+":"+sec;
	//now change the display;
	timeDisplay.innerHTML=message;
	
	if(secondsRemaining ===0){
		alert("Done!");
		clearInterval(intervalHandle);
		resetPage();
	}
	secondsRemaining--; 
}

function startcountdown(){
	//get contents of the minutes test box
	var minutes=document.getElementById("minutes").value;
    //check if not a number
	if (isNaN(minutes)){
		alert("plz enter anumber");
		return;
	}
	// how many seconds
	secondsRemaining = minutes * 60;
	// every second call the fun tick
	intervalHandle = setInterval(tick,1000);
	//hide the form
	document.getElementById("area").style.display ="none";
}

window.onload=function(){
//create input text box and give it an id of minutes
var inputMin =document.createElement("input");
inputMin.setAttribute("id","minutes");
inputMin.setAttribute("type","text");
//create a button
var startbutton=document.createElement("input");
startbutton.setAttribute("type","button");
startbutton.setAttribute("value","Start countdown");
startbutton.onclick = function(){
	startcountdown();
};
//add to the DOM , to the div called "input area"
document.getElementById("area").appendChild(inputMin);
document.getElementById("area").appendChild(startbutton);
};