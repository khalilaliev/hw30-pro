const smiles = document.querySelectorAll(".smile");

smiles.forEach((smile) => {
  smile.addEventListener("click", () => {
    const increment = smile.nextElementSibling;
    increment.innerHTML = Number(increment.textContent) + 1;
  });
});
