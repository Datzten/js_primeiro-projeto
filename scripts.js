const USD_RATE = 4.86;
const EUR_RATE = 5.39;
const GBP_RATE = 6.21;

const footer = document.querySelector("footer");

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
    event.preventDefault();
    switch (currency.value) {
        case "USD":
            convertCurrency(USD_RATE, amount.value, "US$");
            break;
        case "EUR":
            convertCurrency(EUR_RATE, amount.value, "€");
            break;
        case "GBP":
            convertCurrency(GBP_RATE, amount.value, "£");
            break;
    }
}

function convertCurrency(rate, amount, symbol ) {
    try {
        footer.classList.add("show-result");
        const result = rate * amount;
        return result;
    } catch (error) {
        console.error(error);
        alert("Não foi possível converter a moeda");
        footer.classList.remove("show-result");
    }
}
