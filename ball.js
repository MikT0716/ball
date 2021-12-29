let ball = document.getElementById("float-circle");

// Write your code below

function up() {
  ball.style.bottom = "300px";
}

function down() {
  ball.style.bottom = "50px";
}

document.onkeydown = up;
document.onkeyup = down;

document.ontouchstart = up;
document.ontouchend = down;

document.querySelector("p").onselectstart = function () {
  return false;
};
