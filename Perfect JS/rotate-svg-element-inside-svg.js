

function rotateSVG(svgElement) {
  let parentElement = svgElement.parentNode;
  let angle = 0;

  setInterval(function() {
    angle += 1;
    svgElement.style.transform = `rotate(${angle}deg)`;
  }, 10);
}