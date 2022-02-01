<<<<<<< HEAD
const displayTime = () =>{
	const date = new Date();

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time = null;
	if (hours > 12){
		time = hours - 12 + ":" + minutes + ":" + seconds + " PM";
	}
	else{
		time = hours + ":" + minutes + ":" + seconds + " AM";
	}

	document.getElementById('displayTime').innerHTML = time;
}

=======
const displayTime = () =>{
	const date = new Date();

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time = null;
	if (hours > 12){
		time = hours - 12 + ":" + minutes + ":" + seconds + " PM";
	}
	else{
		time = hours + ":" + minutes + ":" + seconds + " AM";
	}

	document.getElementById('displayTime').innerHTML = time;
}

>>>>>>> e79fd32... Added Image Slider
window.setInterval(displayTime,1000);