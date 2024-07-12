document.addEventListener("DOMContentLoaded", (event) => {
  const clickableText = document.getElementById("clickableText");
  const counter = document.getElementById("counter");

  clickableText.addEventListener("click", () => {
    let currentCount = parseInt(counter.textContent, 10);
    counter.textContent = currentCount + 1;
  });
});
