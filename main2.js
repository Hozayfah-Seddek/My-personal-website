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

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".burger-menu");
  const closeBtn = document.querySelector(".close-btn");

  // Open menu
  burger.addEventListener("click", () => {
    burgerMenu.classList.add("active");
  });

  // Close menu
  closeBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
  });
});
