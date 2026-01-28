function convert() {
  const sumaElement = document.getElementById("turima-suma");
  const suma = sumaElement.value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value.trim();
  const resultDiv = document.getElementById("result");

  const rodytiBtn = document.getElementById("rodytiBtn");
  const resetBtn = document.getElementById("resetBtn");

  const rates = {
    EUR: 1,
    USD: 1.08,
    GBP: 0.85,
  };

  if (suma === "" || suma <= 0) {
    resultDiv.innerText = "Prašome įvesti teisingą sumą.";
    sumaElement.classList.add("klaida");
    return;
  } else {
    sumaElement.classList.remove("klaida");
  }

  const sumaInEur = suma / rates[fromCurrency];
  const convertedSuma = sumaInEur * rates[toCurrency];

  const santykis = (rates[toCurrency] / rates[fromCurrency]).toFixed(2);

  resultDiv.innerHTML = `
        <h3>${suma} ${fromCurrency} yra ${convertedSuma.toFixed(
    2
  )} ${toCurrency}</h3>
        <p style="color: white;">Santykis: 1 ${fromCurrency} = ${santykis} ${toCurrency}</p>
    `;

  rodytiBtn.disabled = true;
  rodytiBtn.style.backgroundColor = "rgba(238, 238, 238, 1)";
  rodytiBtn.style.cursor = "not-allowed";
  resetBtn.style.display = "inline-block";
}

function resetForm() {
  document.getElementById("turima-suma").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("resetBtn").style.display = "none";

  document.getElementById("fromCurrency").selectedIndex = 0;
  document.getElementById("toCurrency").selectedIndex = 0;
  const rodytiBtn = document.getElementById("rodytiBtn");
  if (rodytiBtn) {
    rodytiBtn.disabled = false;
    rodytiBtn.classList.remove("active-pink");
    rodytiBtn.style.backgroundColor = "";
  }

  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.style.display = "none";
    resetBtn.style.backgroundColor = "white";
  }
}
