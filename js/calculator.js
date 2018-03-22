/*eslint-env browser*/

window.addEventListener("load", init);

function init(){
	var body = window.document.getElementById("body");
	body.addEventListener("click", enter);
}
//	one.addEventListener("click", enter);
//	two.addEventListener("click", enter);
//	three.addEventListener("click", enter);
//	four.addEventListener("click", enter);
//	five.addEventListener("click", enter);
//	six.addEventListener("click", enter);
//	seven.addEventListener("click", enter);
//	eight.addEventListener("click", enter);
//	nine.addEventListener("click", enter);
//	add.addEventListener("click", enter);
//	subtract.addEventListener("click", enter);
//	multiply.addEventListener("click", enter,);
//	divide.addEventListener("click", enter,);
//	period.addEventListener("click", enter,);
//	zero.addEventListener("click", enter);
		equal.addEventListener("click", calculate);

//var display = window.document.getElementById("result");
//
//function enter(val){
//	display.value += this.value;
//}
//
//function calculate(){
//	display.value = eval(display.value);
//}

var display = document.getElementById("result");

function enter(num, val){
	if (num.target !== num.currentTarget && num.target.value !== "="){
		var numSelect = num.target.value;
		display.value += numSelect;
	} 
	num.stopPropagation();	
}

function calculate(){
	display.value = eval(display.value);
	}

