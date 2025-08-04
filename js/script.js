// Autoplay carousel
const carousel = document.getElementById('carousel');
let scrollPos = 0;
function animate() {
  scrollPos += 300;
  if (scrollPos >= carousel.scrollWidth - carousel.clientWidth) scrollPos = 0;
  carousel.scrollTo({ left: scrollPos, behavior: 'smooth' });
}
setInterval(animate, 3000);

