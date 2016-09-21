var colorButtons = ["Red", "Green", "Yellow"];
var currentColor;

peanut();

var addNewColors = ["Orange", "Purple", "Blue", "Light Blue", "Forest Green", "Pink", "Brown"];

for(var i=0; i < addNewColors.length; i++){
	var addColorsElement = document.getElementById('optional-colors');
	var additionalColors = document.createElement('option');
	addColorsElement.appendChild(additionalColors);
	additionalColors.innerHTML = addNewColors[i];
	additionalColors.setAttribute("value", addNewColors[i]);
}

function peanut(){
	var element = document.getElementById('color-buttons');
	element.innerHTML=" "
	for(var i=0; i < colorButtons.length; i++){
		var output = document.createElement('button');
		element.appendChild(output);
		output.setAttribute("id", colorButtons[i] + "-button");
		output.innerHTML = colorButtons[i];
		output.className = "buttons " + "button-" + colorButtons[i];
		output.style.backgroundColor = colorButtons[i];
		output.setAttribute("onclick", "colorChange('" + colorButtons[i] + "')");
	}
}

function colorChange(color) {
	document.body.style.backgroundColor = color;
	currentColor = color;
}


function addButton(){
	var colorValue = document.getElementById('optional-colors').value;
	var colorWords = colorValue.split(" ");
	if (colorWords.length > 1) {
		colorValue = colorWords[0] + colorWords[1];
	}
	if (colorButtons.indexOf(colorValue) < 0 && colorValue != "SelectOne") {
		colorButtons.push(colorValue);
		peanut();
	}
}

function remove(){
	var btn = colorButtons.indexOf(currentColor);
	if (btn != -1) {
		colorButtons.splice(btn, 1)
	}
	peanut();
	document.body.style.backgroundColor = "white";
}
	

