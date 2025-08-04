const budgetSection = document.getElementById("budget-section");
  const brandSection = document.getElementById("brand-section");

  document.querySelectorAll('input[name="searchType"]').forEach(radio => {
    radio.addEventListener("change", function() {
      if (this.value === "budget") {
        budgetSection.style.display = "block";
        brandSection.style.display = "none";
      } else if (this.value === "brand") {
        budgetSection.style.display = "none";
        brandSection.style.display = "block";
      }
    });
  });

// Autoplay carousel
const carousel = document.getElementById('carousel');
let scrollPos = 0;
function animate() {
  scrollPos += 300;
  if (scrollPos >= carousel.scrollWidth - carousel.clientWidth) scrollPos = 0;
  carousel.scrollTo({ left: scrollPos, behavior: 'smooth' });
}
setInterval(animate, 3000);

