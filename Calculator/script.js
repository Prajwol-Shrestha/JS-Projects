// Selecting the display Screen

const display = document.querySelector('.display');


// Getting the value through button click and
// Displaying into the screen

const buttonClick = (value) =>{
	display.innerText += value;
};


// Calculating the value of string expression through eval();
// Catching any error during calculation if any error alert Math Error And
// Resetting the display screen 

const calc = () =>{
	try{
		exp = display.innerText;
		display.innerHTML = eval(exp);
	}
	catch{
		alert("Math Error.");
		buttonClear();
	}
}


// Clear button function

const buttonClear = () =>{
	display.innerText = ' ';
}

// Del button function
// Getting the content of display screen(if any) And
// Removing the last character of string

const buttonDel = () =>{
	let content = display.innerHTML;
	let contentLength = content.length;
	display.innerText = content.slice(0, contentLength - 1);
}




