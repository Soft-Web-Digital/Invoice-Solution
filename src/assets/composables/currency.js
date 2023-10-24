import { ref, computed } from "vue";
const numberToWords = require("number-to-words");
const currencyCodes = require("currency-codes");

export function useCurrency(amount) {
  const amt = ref(amount);
  const currencyType = ref("NGN");
  const currencyLocale = ref("en-NG");
  const result = ref("");

  result.value = new Intl.NumberFormat(currencyLocale.value, {
    style: "currency",
    currency: currencyType.value,
    minimumFractionDigits: 0,
  }).format(amt.value);

  return result.value;
}

export function addCurrencyComma(amount) {
  let result = amount.toLocaleString();

  return result;
}

export function amountToWords(number, currency = "NGN") {
  const currencies = computed(() => {
    return currencyCodes.data.map((currency) => {
      return `${currency.code}: ${currency.currency}`;
    });
  });

  const currencyMap = {};

  currencies.value.forEach((pair) => {
    const [key, value] = pair.split(": ");
    currencyMap[key] = value;
  });

  const formattedAmount = numberToWords.toWords(number);
  return `${formattedAmount} ${currencyMap[currency]}`;
}
