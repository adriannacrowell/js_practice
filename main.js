
/*
Now we’ll modify our main.js file to take advantage of one of jQuery’s features.
What jQuery is doing for us here is making sure that the browser has loaded all of the HTML before executing our JavaScript (which is currently just a single console.log).
Whenever we’re working with browser-based JavaScript, we’ll be doing this just to establish the practice: any JavaScript you write will go between the $(document).ready(function() { and }); lines.
*/
$(document).ready(function() {
   'use strict';

	 paper.install(window); // installs Paper.js in the global scope
	 paper.setup(document.getElementById('mainCanvas')); //attaches Paper.js to the canvas, and prepares Paper.js for drawing

	var tool = new Tool();

		var c = Shape.Circle(200, 200, 80); // backdrop static circle
		c.fillColor = 'black';
		var text = new PointText(200, 200); //create the text object (PointText)
		text.justification = 'center';
		text.fillColor = 'white';
		text.fontSize = 20;
		text.content = 'Hello World!';
// event handler is called onMouseDown
	tool.onMouseDown = function(event) {
	  var c = Shape.Circle(event.point, 20);
	  c.fillColor = 'orange';
	 };
	paper.view.draw(); // tells Paper.js to actually draw something to the screen

console.log('main.js loaded');
});
