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



const rangeKey = tab.dataset.range;
const [minPrice, maxPrice] = ranges[rangeKey];

carCards.forEach(card => {
  const cardMin = parseInt(card.dataset.priceMin);
  const cardMax = parseInt(card.dataset.priceMax);
  const isInRange = cardMax >= minPrice && cardMin <= maxPrice;
  card.style.display = isInRange ? "block" : "none";
});

// Optional: update view all link text
const viewAll = document.querySelector(".view-all");
viewAll.textContent = `View All Cars Under ${tab.textContent}`;
