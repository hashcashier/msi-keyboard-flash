// require the LED module
var led 	= require('msi-keyboard');
var Logger 	= require('node-keylogger');

var left 	= {color: 'blue', intensity: 'high'};
var middle 	= {color: 'blue', intensity: 'high'};
var right 	= {color: 'blue', intensity: 'high'};

var leftOff 	= {color: 'green', intensity: 'low'};
var middleOff 	= {color: 'green', intensity: 'low'};
var rightOff 	= {color: 'green', intensity: 'low'};

// To find your keyboard: sudo evtest /dev/input/eventX
var keyboard = new Logger('event4'); // mine is event4

var turnOn = function() {
	led.color('left', left);
	led.color('middle', middle);
	led.color('right', right);	
}

var turnOff = function() {
	led.color('left', 'off');
	led.color('middle', 'off');
	led.color('right', 'off');
}

keyboard.on('keypress', turnOn);
keyboard.on('keyup', turnOff);
