const USD_RATE = 4.86;
const EUR_RATE = 5.39;
const GBP_RATE = 6.21;

const footer = document.querySelector("footer");

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const description = document.getElementById("description");
const result = document.getElementById("result");

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
        description.textContent = `${symbol} 1 = R$ ${formatCurrency(rate)}`;
        footer.classList.add("show-result");
        
        let total =rate * amount
        result.textContent = `${formatCurrency(total).replace("R$", "")} Reais`;

    } catch (error) {
        console.error(error);
        alert("Não foi possível converter a moeda");
        footer.classList.remove("show-result");
    }
}


function formatCurrency(value) {
    return (value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}