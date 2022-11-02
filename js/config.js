//function
const btnRegist = document.getElementById("btnRegist");
const btnIniSsn = document.getElementById("btnInitssn");
const content = document.getElementById("content");



btnRegist.addEventListener("click", () => {
  content.classList.add("right-panel-active");
});

btnIniSsn.addEventListener("click", () => {
  content.classList.remove("right-panel-active");
});
