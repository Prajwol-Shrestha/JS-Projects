const cityName = document.querySelector('input');
const submit = document.querySelector('a');
const content = document.querySelector('.content');
const leftCol = document.querySelector('.left-col');


const APIkey = 'cd994c1c0e4c68f6a305ecfc0fbe2dc2'


cityName.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
	event.preventDefault();
	submit.click();
	}
});
submit.onclick = () => getData();


function getData(){
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${APIkey}`)
		.then(response => response.json())
		.then(json => {
			content.innerHTML = 
				`<div class="content">
					<h1> ${json.name}, ${json.sys.country}</h1>
					<h2 class="currentTmp"> ${(json.main.temp - 273).toFixed()} &deg; C </h2>
					<h3 class="expected"> Feels Like ${(json.main.feels_like - 273).toFixed()} &deg; C, ${json.weather[0].description}</h3>

					
					<div class="others">
						<p> Wind Speed: ${json.wind.speed} m/s </p>
						<p> Pressure: ${json.main.pressure} hPa </p>
						<p> Humidity: ${json.main.humidity} % </p>
						<p> Dew Point: ${(json.main.temp - 273).toFixed()} &deg; C </p>
						<p> Visibility: ${json.visibility/1000} Km</p>
					</div>
				</div>`;

				changeBg(json);
		});
}

function changeBg(json){
	if((json.main.temp - 273).toFixed() <= 20){
		leftCol.style.backgroundImage = "url('./images/winter.jpg')";
	}
	if((json.main.temp - 273).toFixed() > 40){
		leftCol.style.backgroundImage = "url('./images/summer.jpg')";
	}
	if((json.main.temp - 273).toFixed() > 20 && (json.main.temp - 273).toFixed() <= 30){
		leftCol.style.backgroundImage = "url('./images/spring.jpg')";
	}

}


