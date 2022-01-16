const displayTime = () =>{
	const date = new Date();

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time = null;
	if (hours > 12){
		time = hours - 12 + ":" + minutes + ":" + seconds + " AM";
	}
	else{
		time = hours + ":" + minutes + ":" + seconds + " PM";
	}

	document.getElementById('displayTime').innerHTML = time;
}

window.setInterval(displayTime,1000);