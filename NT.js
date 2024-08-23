const currency_value = document.querySelector(".currency-value");
const homeElement = document.querySelector(".home");
const usElement = document.querySelector(".us-bar");
const grids = document.querySelector(".grids");
const usMenu = document.querySelector(".U-S");
const worldElement = document.querySelector(".world-bar");
const worldMenu = document.querySelector(".world-menu");
const businessElement = document.querySelector(".business-bar");
const businessMenu = document.querySelector(".business-menu");
const athleticElement = document.querySelector(".athletic-bar");
const athleticMenu = document.querySelector(".athletic-menu");

homeElement.addEventListener("click", () => {
  window.location.reload();
});

usElement.addEventListener("click", () => {
  grids.style.display = "none";
  usMenu.style.display = "grid";
  athleticMenu.style.display = "none";
  businessMenu.style.display = "none";
  worldMenu.style.display = "none";
});

worldElement.addEventListener("click", () => {
  worldMenu.style.display = "grid";
  grids.style.display = "none";
  usMenu.style.display = "none";
  athleticMenu.style.display = "none";
  businessMenu.style.display = "none";
});
businessElement.addEventListener("click", () => {
  businessMenu.style.display = "grid";
  worldMenu.style.display = "none";
  grids.style.display = "none";
  usMenu.style.display = "none";
  athleticMenu.style.display = "none";
});
athleticElement.addEventListener("click", () => {
  grids.style.display = "none";
  athleticMenu.style.display = "grid";
  businessMenu.style.display = "none";
  worldMenu.style.display = "none";
  grids.style.display = "none";
  usMenu.style.display = "none";
});

async function News() {
  const api_key = "cur_live_mVLkLmCPtnolh42q2uOv0Kd3yiBVj74MtTQJCOMU";
  const response = await fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${api_key}`,
  );

  if (response.ok) {
    const responsing = await response.json();
    console.log(responsing);
    function showUZS() {
      const som = responsing.data.UZS;
      var rounding = Math.round(som.value);
      currency_value.textContent = som.code + ":" + rounding;
      setTimeout(showUSD, 5000);
    }
    function showUSD() {
      const usd = responsing.data.USD;
      currency_value.textContent = usd.code + ":" + usd.value;
      setTimeout(showRUB, 5000);
    }

    function showRUB() {
      const rub = responsing.data.RUB;
      const rounding = Math.round(rub.value);
      currency_value.textContent = rub.code + ":" + rounding;
      setTimeout(showUZS, 5000);
    }

    showUZS();
  }
}
News();
