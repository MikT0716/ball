let ball = document.getElementById("float-circle");
let clickide = document.getElementById("clickide");

// Write your code below

function up() {
  ball.style.bottom = "70%";
}

function down() {
  ball.style.bottom = "50px";
}

document.onkeydown = up;
document.onkeyup = down;

document.ontouchstart = up;
document.ontouchend = down;
