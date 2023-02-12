let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-foreignCurrency");
let resultElement = document.querySelector(".js-finalAmount");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let rateExchange;

    switch (currency) {
        case "CAD":
            rateExchange = 0.31;
            break;

        case "NZD":
            rateExchange = 0.36;
            break;

        case "CHF":
            rateExchange = 0.21;
            break;

        case "ISK":
            rateExchange = 32.48;
            break;

        case "NOK":
            rateExchange = 2.29;
            break;

        case "JPY":
            rateExchange = 30.15;
            break;

        case "KRW":
            rateExchange = 286.53;
    }

    let amount = amountElement.value;
    let result = amount * rateExchange;
    resultElement.value = `${result.toFixed(2)} ${currency}`;

});