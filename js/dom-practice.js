/*eslint-env browser*/

//STEP 1 Add a button to a web page. Use the old school HTML attribute method to attach a click event handler to the button. That handler should call a function that displays the message “I have been clicked” out into an alert box.
//function hello(){
//	"use strict";
//	window.alert("I have been clicked!");
//}
//STEP 2 Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. Then use the DOM Element method to associate a function with the onclick event of the button. Again, display the message “I have been clicked” out into an alert box.
//var btn = document.getElementById("hello");
//btn.onclick = function(){
//	"use strict";
//	window.alert("I have been clicked!");
//}
//STEP 3 Add a button to a web page and uniquely ID the button. Write a script that attaches an event listener to the button and listens for the click event. When it’s heard, a user-defined function should be called and the message “I have been clicked” should be displayed out into an alert box.
//var btn = document.getElementById("hola");
//function hello(){
//	"use strict";
//	window.alert("I have been clicked!");
//}
//
//STEP 4 Modify the code within step 3 so that the code that displays an alert box is written directly within a callback function as opposed to a user-defined function.
//var btn = document.getElementById("hola");
//btn.addEventListener("click", function hello(){
//	"use strict";
//	window.alert("I have been clicked!");
//});
//STEP 5 Modify the code in step 4 so that you can write your script within the <head> tag of the page rather than underneath the button in the markup.
//window.addEventListener("load", init);
//function init(){
//	"use strict";
//	btn.addEventListener("click", hello);
// 		function hello(){
// 		window.alert("I have been clicked!");
// 		}
//};
//var btn = document.getElementById("hola");
//STEP 6 Add a link to your web page. Add the text “Visit Google” to the link, set the ID to “redirect” and set the href attribute to http://www.google.com. Now, write a script that alerts the user that they clicked on the link but prevents the browser from also redirecting to the Google site.
//window.addEventListener("load", init);
//function init(){
//	"use strict";
//	redirect.addEventListener("click", function(event){
//		event.preventDefault();
//		window.alert("You wanted Google but you're not going there!")
//	});
//}
//STEP 7 Add a text box and a button to a web page. Add an event listener to the button. When the click event is heard, the button should be disabled, and the text that the user input into the text box should be displayed within an alert box.
//function displayText() {
//		"use strict";
//		btnSubmit.disabled = true;
//		alert(textInput.value);
//}
//var textInput = window.document.getElementById("textInput");
//var btnSubmit = document.getElementById("submit");
//btnSubmit.addEventListener("click", displayText);
//STEP 8 Create a new page called newpage.html. You will now have 2 web pages including practice.html and newpage.html. Add a button to practice.html. When the button is clicked, newpage.html should appear as a popup window at 300 pixels wide by 300 pixels high. As soon as newpage.html loads however, resize the window to 500 pixels wide by 300 pixels high. You will need to handle the load event on newpage.html and use a BOM method on newpage.html to accomplish this task.
//function newPage(){
//	"use strict";
//	var openPage = window.document.getElementById("btnPage");
//	openPage.addEventListener("click", function(){
//		window.open("newpage.html", "btnPage", "width=300, height=300")
//	});
//}
//window.addEventListener("load", newPage);
//STEP 9 Add two buttons to a web page. Add the text Start to one button and Stop to the other button. Using the BOM .setInterval() method, figure out a way to move display the text “Learning JavaScript is fun!” into the console window every 2 seconds but only when the Start button is clicked. If the user clicks on the Stop button, the console should stop logging the text immediately.
//var msg;
//function showMsg(){
//	msg = setInterval(function(){
//		window.console.log("Learning Javascript is fun!")
//	}, 2000);
//}
//
//function stop(){
//	clearInterval(msg);
//}
//var startBtn = window.document.getElementById("startBtn");
//var stopBtn = window.document.getElementById("stopBtn");
//startBtn.addEventListener("click", showMsg);
//stopBtn.addEventListener("click", stop);
//STEP 10 Add a drop down list to a web page. Populate the drop down list with 4 items. Add a button next to the drop down list and set the text to “Select”. When the user clicks the button, the item selected in the drop down list should appear within an alert box.
//function showTools(){
//	var toolSelect = tools.value;
//	window.alert("You chose " + toolSelect);
//}
//
//var selectBtn = window.document.getElementById("select");
//selectBtn.addEventListener("click", showTools);













