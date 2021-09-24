

let clickCount = 0;
  let quantidadeDeClicks = document.getElementById("quantclicks");

  document.getElementById(".clicks")
.addEventListener("click", () => quantidadeDeClicks.innerHTML = clickCount += 1);