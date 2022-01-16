let seconds = 0;
let minutes = 0;
let hours = 0;

const stopWatch = () => {
	seconds++;

	if(seconds / 60 === 1){
		seconds = 0;
		minutes++;

		if(minutes / 60 === 1){
			minutes = 0;
			hours++;
		}
	}

	if(hours < 10){
		displayHours = '0'+ hours.toString();
	} else {
		displayHours = hours;
	}


	if(minutes < 10){
		displayMinutes = '0'+ minutes.toString();
	} else {
		displayMinutes = minutes;
	}


	if(seconds < 10){
		displaySeconds = '0'+ seconds.toString();
	} else {
		displayseconds = seconds;
	}


	let time = displayHours + ':' + displayMinutes + ':' + displaySeconds;
	document.getElementById("display").innerHTML = time;
}


let stopped = true;
let interval = null;

const startStop = () =>{

	if(stopped === true){
		stopped = false;
		interval = window.setInterval(stopWatch, 1000);	
		document.getElementById('btn').innerHTML = "Stop";
	}
	else{
		window.clearInterval(interval);
		document.getElementById('btn').innerHTML = "Start";
		stopped = true;
	}
}

const resetWatch = () =>{
	seconds = 0;
	minutes = 0; 
	hours = 0;
	stoppped = true;
	window.clearInterval(interval);
	document.getElementById("btn").innerHTML = "Start";
	document.getElementById("display").innerHTML = "00:00:00";
}