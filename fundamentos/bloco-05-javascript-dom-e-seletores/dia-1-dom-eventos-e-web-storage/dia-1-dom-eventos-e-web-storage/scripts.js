let colorTitulo = document.querySelector("#header-container");
colorTitulo.style.backgroundColor = "green";
let colorEmergencyTalks = document.querySelector(".emergency-tasks");
 colorEmergencyTalks.style.backgroundColor = "pink";
 let colorNoemergencyTasks = document.querySelector(".no-emergency-tasks");
 colorNoemergencyTasks.style.backgroundColor = "yellow";
let colorList = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < colorList.length; i +=1) {
  colorList[i].style.backgroundColor = "grey";
}
let colorList2 = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < colorList2.length; i +=1) {
  colorList2[i].style.backgroundColor = "blue";
}
let colorRodape = document.querySelector("#footer-container");
colorRodape.style.backgroundColor = "pink";