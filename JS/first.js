const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

function toggleDarkMode() {
  var body = document.getElementsByTagName("BODY")[0];
  body.classList.toggle("dark-mode");
}
const toggleSwitch = document.querySelector("#toggle-switch");

const toggleBtn = document.querySelector('#toggle-theme');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});
