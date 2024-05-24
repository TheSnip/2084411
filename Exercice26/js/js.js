
var canvas = document.getElementById('myCanvas');

var context = canvas.getContext('2d');
 


var centerX = 135;

var centerY = 60;

var width = 10;

var height = 190;
 
context.beginPath();

context.fillStyle = 'sienna';

context.fillRect(centerX, centerY, width, height);

context.fill();


context.beginPath();

context.moveTo(150,80);

context.lineTo(300,230);

context.lineTo(150,230);

context.fillStyle = "lightblue";

context.fill();
 

context.beginPath();

context.moveTo(50,250);

context.lineTo(100,300);

context.lineTo(250,300);

context.lineTo(300,250);

context.fillStyle = "peru";

context.fill();

context.lineWidth = 5;

context.strokeStyle = 'sienna';

context.stroke();
