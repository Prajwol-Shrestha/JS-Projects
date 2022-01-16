const time = document.querySelector('time');
const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');


function showTime(){
	let today = new Date();
	hours = today.getHours();
	min = today.getMinutes();
	sec = today.getSeconds();

	let amPm = null;

	if(hours >= 12){
		amPm = 'PM';
	}
	amPm = 'AM'

	hours = hours % 12 || 12;

	time.innerHTML = `${hours}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

	setTimeout(showTime, 1000);

}

function addZero(n){
	return (parseInt(n ,10) < 10 ? '0' : '') + n;
}


function setBgGreet(){
	let today = new Date();
	let hours = today.getHours();

	if( hours < 12){
		document.body.style.backgroundImage = "url('morning.jpg')";
		greeting.textContent = "Good Morning";
	}
	else if( hours < 18){
		document.body.style.backgroundImage ="url('afternoon.jpg')";
		greeting.textContent = "Good Afternoon";
	}
	else{
		document.body.style.backgroundImage = "url('night.jpg')";
		greeting.textContent = "Good Night";
		document.body.style.color = 'white';
	}
}


function getName(){
	if(localStorage.getItem('name') === null){
		name.textContent = '[Enter Name]';
	}
	else{
		name.textContent = localStorage.getItem('name');
	}
}



function getFocus(){
	if(localStorage.getItem('focus') === null){
		focus.textContent = '[Enter Focus]';
	}
	else{
		focus.textContent = localStorage.getItem('focus');
	}
}

showTime();
setBgGreet();
getName();
getFocus();