function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomWords = {
	0: "OK",
	1: "NOT OK",
	2: "Fine",
	3: "Not Fine",
	4: "You",
	5: "Not You",
	6: "HULULU",
	7: "Jingalala",
}

let random0 = getRandomInt(8);
let random1 = getRandomInt(8);
let random2 = getRandomInt(8);
let random3 = getRandomInt(8);
let random4 = getRandomInt(8);

let quoet = randomWords[random0] + " " + randomWords[random1] + " " + randomWords[random2] + " " + randomWords[random3] + " " + randomWords[random4]; 
document.getElementById("display").innerHTML = quoet;
