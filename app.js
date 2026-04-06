const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {
  const searchValue = this.value.toLowerCase();

  productCards.forEach((card) => {
    const productName = card.getAttribute("data-name").toLowerCase();

    if (productName.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
