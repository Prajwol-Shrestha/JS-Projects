// Getting Elements

const country = document.querySelector('#country');
const from = document.querySelector('#from');
const btn = document.querySelector('button');
const displayContainer = document.querySelector('.display-content');


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;



function displayData() {

	displayContainer.style.display = "block";

	fetch(`https://api.covid19api.com/country/${country.value}?from=${from.value}T00:00:00Z&to=${today}T00:00:00Z`)
		.then(response => response.json())
		.then(json => 
			displayContainer.innerHTML = 
			`
				<p> Active Cases: ${json[0].Active} </p>
				<p> Confirmed: ${json[0].Confirmed} </p>
				<p> Total No. of Deaths: ${json[0].Deaths} </p>
				<p> Date: ${formatDate(json[0])}</p>
			`
			);
	
}


function formatDate(arr){
	let occ = arr.Date.indexOf('T');
	return arr.Date.slice(0, occ);
}