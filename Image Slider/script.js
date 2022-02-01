<<<<<<< HEAD
const imgEl = document.querySelector('img');

const nextEl = document.querySelector('#next');
const previousEl = document.querySelector('#previous');



const imgNames = [
	"magicEmperor",
	"aboveTenThousandPeople",
	"cultivatorAgainstHeroSociety",
	"apotheosis",
	"returnOfMountHuaSect",
	"talesOfDemonsAndGods",
	"martialPeak",
]




let i = 0;

nextEl.onclick = () => {
	i++;
	if(i < imgNames.length){
		imgEl.setAttribute('src', `./images/${imgNames[i]}.jpg`)
	}
	else{
		i = 0; 
		imgEl.setAttribute('src', `./images/${imgNames[i]}.jpg`)
	}
};
previousEl.onclick = () => {
	i--;
	if(i < 0){
		i = imgNames.length - 1;
		imgEl.setAttribute('src', `./images/${imgNames[i]}.jpg`)
	}
	else{
		imgEl.setAttribute('src', `./images/${imgNames[i]}.jpg`)
	}
};



=======
const imgEl = document.querySelector('img');

const nextEl = document.querySelector('#next');
const previousEl = document.querySelector('#previous');



const imgNames = [
	"magicEmperor",
	"aboveTenThousandPeople",
	"cultivatorAgainstHeroSociety",
	"apotheosis",
	"returnOfMountHuaSect",
	"talesOfDemonsAndGods",
	"martialPeak",
]




let i = 0;

nextEl.onclick = () => {
	i++;
	if(i < imgNames.length){
		imgEl.setAttribute('src', `./images/${imgNames[i]}.jpg`)
	}
	else{
		i = 0; 
		imgEl.setAttribute('src', `./images/${imgNames[i]}.jpg`)
	}
};
previousEl.onclick = () => {
	i--;
	if(i < 0){
		i = imgNames.length - 1;
		imgEl.setAttribute('src', `./images/${imgNames[i]}.jpg`)
	}
	else{
		imgEl.setAttribute('src', `./images/${imgNames[i]}.jpg`)
	}
};



>>>>>>> e79fd32... Added Image Slider
