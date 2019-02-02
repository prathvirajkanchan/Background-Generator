var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");

color1.addEventListener("input",gradient);
color2.addEventListener("input",gradient);




function gradient() {
  body.style.background="linear-gradient(to right,"
  +color1.value
  + ","
  +color2.value
  +")";
  h3.textContent = body.style.background;

}
