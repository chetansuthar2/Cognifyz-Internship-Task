
const colors = ["#ffeb3b", "#8bc34a", "#03a9f4", "#e91e63", "#9c27b0", "#ff9800"];

const button = document.getElementById("changeColorBtn");

button.addEventListener("click", function() {

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
});
