import { ref } from "vue";

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
