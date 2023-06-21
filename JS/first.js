//header
// const checkbox = document.getElementById("checkbox");
// checkbox.addEventListener("change", () => {
//   document.body.classList.toggle("dark");
// });

// function toggleDarkMode() {
//   var body = document.getElementsByTagName("BODY")[0];
//   body.classList.toggle("dark-mode");
// }
// const toggleSwitch = document.querySelector("#toggle-switch");

// const toggleBtn = document.querySelector('#toggle-theme');
// const body = document.querySelector('body');

// toggleBtn.addEventListener('click', function() {
//   body.classList.toggle('dark-mode');
// });

// joefrance

let nav = document.querySelector("nav");
window.onscroll = function () {
   if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
   } else {
      nav.classList.remove("sticky");
   }
};

//footer

// Toggle footer visibility
const footer = document.querySelector("footer");
const toggleBtnf = document.querySelector(".toggle-btn");

toggleBtnf.addEventListener("click", function () {
   footer.classList.toggle("hidden");
});

// Scroll-to-top button
const scrollBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", function () {
   if (window.pageYOffset > 200) {
      scrollBtn.classList.add("show");
   } else {
      scrollBtn.classList.remove("show");
   }
});

scrollBtn.addEventListener("click", function () {
   window.scrollTo({ top: 0, behavior: "smooth" });
});
