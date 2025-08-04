document.querySelectorAll('.offer-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert("Redirecting to August offers...");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("brandModal");
  const openBtn = document.getElementById("changeBrandBtn");
  const closeBtn = document.querySelector(".modal .close");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});


document.querySelectorAll('.tabs li').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    document.querySelectorAll('.tabs li').forEach(t => t.classList.remove('active'));
    // Add active to current
    tab.classList.add('active');

    // Hide all content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Show selected content
    const target = tab.getAttribute('data-tab');
    document.getElementById(`tab-${target}`).classList.add('active');
  });
});

// ...existing code...
document.getElementById('brandSelect').addEventListener('change', function() {
  const url = this.value;
  if (url && url !== '#') {
    window.location.href = url;
  }
});
// ...existing code...




