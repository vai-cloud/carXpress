function toggleMore() {
  const moreText = document.getElementById("moreText");
  const toggleBtn = document.getElementById("toggleBtn");

  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    toggleBtn.innerText = "... less";
  } else {
    moreText.classList.add("hidden");
    toggleBtn.innerText = "... more";
  }
}
