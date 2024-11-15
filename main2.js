var icon = document.getElementById("icon");

// Check local storage for dark mode setting
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-theme");
  icon.src = "../images/sun.png";
}

// Toggle dark mode and store setting in local storage
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("dark-mode", "enabled");
    icon.src = "../images/sun.png";
  } else {
    localStorage.setItem("dark-mode", "disabled");
    icon.src = "../images/moon.png";
  }
};

var ema = document.getElementById("ema");
var pho = document.getElementById("pho");

ema.addEventListener("click", function () {
  let input = document.getElementById("ema").value;
  document.execCommand("copy");
});

pho.addEventListener("click", function () {
  let input = document.getElementById("pho").value;
  document.execCommand("copy");
});
