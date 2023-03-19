canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

var mouseEvent="empty"
var lastPositionOfX,lastPositionOfY;

var width=2
var color="blue"

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
width=document.getElementById("line_width").value;
    mouseEvent="mousedown"
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup"
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e){
    var currentPositionOfMouseX=e.clientX-canvas.offsetLeft;
    var currentPositionOfMouseY=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastPositionOfX,lastPositionOfY);
        ctx.lineTo(currentPositionOfMouseX,currentPositionOfMouseY);
        ctx.stroke();
    }

    lastPositionOfX=currentPositionOfMouseX;
    lastPositionOfY=currentPositionOfMouseY;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}