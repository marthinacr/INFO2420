let PrintButton1 = new Image();
	let PrintButton2 = new Image();
	let logo1 = new Image();
	let logo2 = new Image();

	if (document.images) {
		PrintButton1.src = "images/print1.png";
		PrintButton2.src = "images/print2.png";
		logo1.src = "images/logo.jpg";
		logo2.src = "images/logo.png";
	}

	const imgArray = [
		'DogTrick2Lg.jpg',
		'HuntingDogsLg.jpg',
		'KidsDogLg.jpg',
		'Pet1Lg.jpg'
	];

	const titleArray = [
		'Dog Performing a Trick',
		'Two Dogs',
		'Dog and Boys Portrait',
		'Women and Dog'
	];

	const imgPath = "images/Pet/";

	function swapImage(imgID) {
		const theImage = document.getElementById('theImage');
		const textDiv = document.getElementById('bottomText');

		theImage.src = imgPath + imgArray[imgID];
		textDiv.innerHTML = titleArray[imgID];
	}

	function preloadImages() {
		for (let i = 0; i < imgArray.length; i++) {
			const tmpImg = new Image();
			tmpImg.src = imgPath + imgArray[i];
		}
	}
window.onload = function() {
	preloadImages();
};