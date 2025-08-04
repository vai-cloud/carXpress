









document.querySelectorAll('.stars').forEach(starContainer => {
  starContainer.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.textContent = '★';
    star.dataset.value = i;
    star.classList.add('star');

    star.addEventListener('mouseover', () => highlight(starContainer, i));
    star.addEventListener('click', () => lockRating(starContainer, i));

    starContainer.appendChild(star);
  }
});

function highlight(container, rating) {
  container.querySelectorAll('.star').forEach(star => {
    star.style.color = star.dataset.value <= rating ? 'gold' : '#ccc';
  });
}

function lockRating(container, rating) {
  container.dataset.locked = true;
  container.querySelectorAll('.star').forEach(star => {
    star.classList.toggle('active', star.dataset.value <= rating);
    star.style.color = star.dataset.value <= rating ? 'gold' : '#ccc';
  });
}
