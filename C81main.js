canvas = document.getElementById("myCanvas");

color = "red";

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.rect(75, 125, 430, 200);
ctx.stroke();


ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(240, 235, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(280, 200, 40, 0, 2*Math.PI);
ctx.stroke();



ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(320, 235, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(360, 200, 40, 0, 2*Math.PI);
ctx.stroke();





canvas.addEventListener("mousedown", my_mousedown);



