const cardContainer = document.querySelector('.cards-container');


function renderFAQs(callback){

	obj.forEach( item => {
		cardContainer.innerHTML += 
			`<div class="faqCard">
				<div class="question-container">
					<h3 class="question"> ${item.qn} </h3> <span id=${item.id}> + </span>
				</div>
				<p class="ans"> ${item.ans} </p>
			</div>
			`
	})
	
	callback();

}



// iterate through each card and adding event listener to every span element
// then selecting each cards (span, p and .ans) and toggling their class




function plus(){
	const faqCardEl = document.querySelectorAll('.faqCard');

	faqCardEl.forEach(card => card.querySelector('span').addEventListener('click', function handleClick(e){
		let span = card.querySelector('span');
		let ans = card.querySelector('.ans');
		let p = card.querySelector('p');

		ans.classList.toggle('show');

		let includes = p.classList.contains('show');
		span.innerText = '+';

		if(includes){
			span.innerText = '-';
		}
	}));

}



renderFAQs(plus);
