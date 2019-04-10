var numsquare = 6;
var color = generateRandomColors(numsquare);
var square = document.querySelectorAll(".square");
var pickColor = pickColors();
var colorDisp = document.querySelector("#colorDisp");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	h1.style.backgroundColor = "steelblue";	
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numsquare = 3;
	color = generateRandomColors(3);
	pickColor = pickColors();
	colorDisp.textContent = pickColor;

	for (var i = 0; i < square.length; i++) {
	 if(color[i]){
	 	square[i].style.backgroundColor = color[i];
	 } else{
	 	square[i].style.display = "none";

	 }
	 
	}
});

hardBtn.addEventListener("click",function(){
	h1.style.backgroundColor = "steelblue";	
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numsquare = 6;
	color = generateRandomColors(numsquare);
	pickColor = pickColors();
	colorDisp.textContent = pickColor;

	for (var i = 0; i < square.length; i++) {
	 
	 	square[i].style.backgroundColor = color[i];
	 
	 	square[i].style.display = "block";

	 
	 
	}

});

colorDisp.textContent = pickColor;

reset.addEventListener("click",function(){
	color = generateRandomColors(numsquare);
	messageDisplay.textContent = "";

	pickColor = pickColors();

	colorDisp.textContent = pickColor;
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color[i];
	}
	reset.textContent = "New Color";
	h1.style.backgroundColor = "steelblue";	

});

for (var i = 0; i < square.length; i++) {
	square[i].style.backgroundColor = color[i];

	//click listener for square
	square[i].addEventListener("click", function() {
		
		var clicked = this.style.backgroundColor;
		if(clicked == pickColor){

			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again?";

			for (var j = 0; j < square.length; j++) {
				square[j].style.backgroundColor = pickColor;
			}

			h1.style.backgroundColor = clicked;

		} else{

			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

}

function pickColors(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i <num; i++) {
		
		arr[i] = randomColor();
	}


	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r +", " + g + ", " + b +")";
}