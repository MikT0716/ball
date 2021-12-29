let ball = document.getElementById("float-circle");
let clickide = document.getElementById("clickide");

// Write your code below

function up() {
  ball.style.bottom = "300px";
}

function down() {
  ball.style.bottom = "50px";
}

document.onkeydown = up;
document.onkeyup = down;

clickide.ontouchstart = up;
clickide.ontouchend = down;

document.querySelector("p").onselectstart = function () {
  return false;
};
