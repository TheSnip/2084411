
var canvas = document.getElementById('monCanvas');
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'gray'; 
ctx.fillRect(50, 50, 100, 100); 


ctx.beginPath();
ctx.arc(100, 100, 40, 0, Math.PI * 2); 
ctx.fillStyle = '#FFD700';
ctx.fill();


ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.arc(100, 110, 25 , Math.PI * .1 , Math.PI * .9); 
ctx.stroke();


ctx.beginPath();
ctx.arc(85 ,90 ,5 ,0 ,Math.PI*2); 
ctx.arc(115 ,90 ,5 ,0 ,Math.PI*2); 
ctx.fillStyle = 'black';
ctx.fill();

