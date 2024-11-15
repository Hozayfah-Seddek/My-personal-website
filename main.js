var icon = document.getElementById("icon");

// Check local storage for dark mode setting
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-theme");
  icon.src = "images/sun.png"; // Adjust path if necessary
}

// Toggle dark mode and store setting in local storage
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("dark-mode", "enabled");
    icon.src = "images/sun.png"; // Adjust path if necessary
  } else {
    localStorage.setItem("dark-mode", "disabled");
    icon.src = "images/moon.png"; // Adjust path if necessary
  }
};
