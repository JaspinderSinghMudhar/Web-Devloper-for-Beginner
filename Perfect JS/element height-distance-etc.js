const element = document.querySelector(".over-js");
const rect = element.getBoundingClientRect();
console.log(`"Left: " + ${rect.left.toFixed()} + ", Top: " + ${rect.top.toFixed()} + ", Width: " + ${rect.width} + ", Height: " + ${rect.height}`)
