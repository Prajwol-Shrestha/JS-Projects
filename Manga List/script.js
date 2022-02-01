// Selecting Elements

const flexEl = document.querySelector('.flexContainer');
const starsEl = document.querySelectorAll('.cardContent');


// Render manga ID Cards

function renderIdCards(){
	mangas.forEach( manga => {
		flexEl.innerHTML += `
			<div class="cardContainer floating">
			<div class="cardContent">
				<div class="imgContainer">
					<img src= ${manga.img}>	
				</div>
		
 				<div class="stdDetails">
 					<ul>
 						<li> <span> Name :	<!-- &nbsp; --> </span> ${manga.name} </li>
	 					<li> <span> Tags 	: </span> ${manga.tags} </li>
	 					<li> <span> Translation : </span> ${manga.translation} </li>
	 					<li> Rating: 
	 						<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
							<span class="fa fa-star checked"></span>
						</li>
	 				</ul>
 				</div>
			</div>
		</div>
		`
	})
}

renderIdCards();



