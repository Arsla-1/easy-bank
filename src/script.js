const navList = document.getElementById("nav-list");
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

hamburgerBtn.addEventListener("click", () => {
  closeBtn.classList.toggle("hidden");
  hamburgerBtn.classList.toggle("hidden");
  navList.classList.remove("opacity-0");
  overlay.classList.add("overlay");
});

closeBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  navList.classList.add("opacity-0");
  overlay.classList.remove("overlay");
});
