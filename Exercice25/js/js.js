const canvas = document.createElement("canvas");
canvas.width = 200;
canvas.height = 200;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(0, 0, 200, 200);

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 30, 30);
ctx.fillRect(120, 50, 30, 30);

ctx.fillStyle = "pink";
ctx.fillRect(70, 130, 60, 20);
