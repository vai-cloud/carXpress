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
