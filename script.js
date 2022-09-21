let inputValue = document.getElementById("IbsInput");
document.getElementById("outPut").style.visibility = "hidden";
inputValue.addEventListener("input", function (e) {
  document.getElementById("outPut").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutPut").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutPut").innerHTML = lbs / 2.2046;
  document.getElementById("oZOutPut").innerHTML = lbs * 16;
  document.getElementById("usTon").innerHTML = lbs / 2000;
  document.getElementById("stOne").innerHTML = lbs /  14;
});
