// Tab toggle (budget / model)
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const view = this.getAttribute('data-view');
    if (view === 'budget') {
      document.getElementById('budget-row').style.display = 'flex';
      document.getElementById('model-row').style.display = 'none';
    } else {
      document.getElementById('budget-row').style.display = 'none';
      document.getElementById('model-row').style.display = 'flex';
    }
  });
});

// Brand -> Model dynamic population
const brandModelMap = {
  maruti: ["Swift", "Dzire", "Baleno", "Brezza"],
  tata: ["Nexon", "Harrier", "Tiago", "Altroz"],
  kia: ["Seltos", "Sonet", "Carnival"],
  hyundai: ["i20", "Creta", "Verna"],
  toyota: ["Urban Cruiser", "Glanza", "Hyryder"],
  mahindra: ["XUV700", "Thar", "Scorpio"],
  honda: ["City", "Civic", "WR-V"],
  skoda: ["Octavia", "Kushaq", "Slavia"],
  renault: ["Kiger", "Triber", "Kwid"],
  nissan: ["Magnite", "Kicks"],
  volkswagen: ["Taigun", "Virtus"]
};
const brandSelect = document.getElementById('brand-select');
const modelSelect = document.getElementById('model-select');
brandSelect.addEventListener('change', function() {
  const b = this.value;
  modelSelect.innerHTML = '<option value="">Select Model</option>';
  if (b && brandModelMap[b]) {
    brandModelMap[b].forEach(m => {
      const o = document.createElement('option');
      o.value = m.toLowerCase().replace(/\s+/g, '-');
      o.textContent = m;
      modelSelect.appendChild(o);
    });
    modelSelect.style.display = 'block';
  } else {
    modelSelect.style.display = 'none';
  }
});

// Toggle between BY BUDGET and BY MODEL tabs
document.addEventListener('DOMContentLoaded', function () {
  const budgetTab = document.getElementById('budget-tab');
  const modelTab = document.getElementById('model-tab');
  const budgetOptions = document.getElementById('budget-options');
  const modelOptions = document.getElementById('model-options');

  budgetTab.addEventListener('click', () => {
    budgetTab.classList.add('active');
    modelTab.classList.remove('active');
    budgetOptions.classList.remove('hidden');
    modelOptions.classList.add('hidden');
  });

  modelTab.addEventListener('click', () => {
    modelTab.classList.add('active');
    budgetTab.classList.remove('active');
    modelOptions.classList.remove('hidden');
    budgetOptions.classList.add('hidden');
  });
});


document.getElementById("btn-budget").addEventListener("click", function () {
document.getElementById("budget-form").style.display = "flex";
document.getElementById("model-form").style.display = "none";
this.classList.add("active");
document.getElementById("btn-model").classList.remove("active");
});

document.getElementById("btn-model").addEventListener("click", function () {
document.getElementById("budget-form").style.display = "none";
document.getElementById("model-form").style.display = "flex";
this.classList.add("active");
document.getElementById("btn-budget").classList.remove("active");
});





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

