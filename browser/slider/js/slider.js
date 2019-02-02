const slider = document.getElementById('slider')
const images = [
  './i/airmax-jump.png','./i/airmax-on-foot.png','./i/airmax-playground.png',
  './i/airmax-top-view.png','./i/airmax.png'
]; 
let i = 0;
slider.src = images[i];

function slide() {
  slider.src = images[++i % images.length];
  }

setInterval('slide()', 5000);