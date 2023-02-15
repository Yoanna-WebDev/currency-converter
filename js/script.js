{
    const switchRate = (currency) => {
        let rateExchange;

        switch (currency) {
            case "CAD":
                return (rateExchange = 0.31);

            case "NZD":
                return (rateExchange = 0.36);

            case "CHF":
                return (rateExchange = 0.21);

            case "ISK":
                return (rateExchange = 32.48);

            case "NOK":
                return (rateExchange = 2.29);

            case "JPY":
                return (rateExchange = 30.15);

            case "KRW":
                return (rateExchange = 286.53);
        }
    };

    const updateResult = (result, currency) => {
        const resultElement = document.querySelector(".js-finalAmount");
        resultElement.value = `${result.toFixed(2)} ${currency}`;
    };

    const formSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-foreignCurrency");
        const amountElement = document.querySelector(".js-amount");
        const currency = currencyElement.value;
        const amount = +amountElement.value;
        const rate = switchRate(currency);
        const result = amount * rate;
        updateResult(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", formSubmit);
    };

    init();
}
