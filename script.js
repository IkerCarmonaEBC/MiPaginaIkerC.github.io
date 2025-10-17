document.getElementById("colorBtn").addEventListener("click", function() {
  const colors = ["#f8f9fa", "#d1e7dd", "#cff4fc", "#fde2e4", "#fff3cd"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
