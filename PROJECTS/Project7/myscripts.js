PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
PrintButton1.src = "images/print1.png"
PrintButton2.src = "images/print2.png"
logo1.src = "images/Logo.jpg"
logo2.src = "images/Logo.png";
}


var imgArray = new Array(
	'DogTrick2Lg.jpg',
	'HuntingDogsLg.jpg',
	'KidsDogLg.jpg',
	'Pet1Lg.jpg'
);


 var titleArray = new Array(
	'Dog Performing Tricks',
	'Two Dogs',
	'Dog and Boys Portrait',
	'Women and Dog'
		);
			
var imgPath = "images/Pet/";
		
function swapImage(imgID) {

	var theImage = document.getElementById('theImage');
	var textDiv = document.getElementById('bottomText');

	var newImg;
	var textTitle;

	newImg = imgArray[imgID];
	theImage.src = imgPath + newImg;

	textTitle=titleArray[imgID];

			textDiv.innerHTML = textTitle;
}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
