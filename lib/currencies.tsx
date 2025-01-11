export const Currencies = [
    {value: "USD", label: "$ USD", locale: "en-US" },
    {value: "EUR", label: "$ EURO", locale: "de-DE" },
    {value: "JPY", label: "$ Yen", locale: "ja-JP" },
    {value: "GBP", label: "$ Pound", locale: "en-GB" },
]

export type Currency = (typeof Currencies) [0];

// (typeof Currencies)[0]: This accesses the type of the first element in the array. In this case, it extracts the type of an individual object in the Currencies array:
// {
//   value: string;
//   label: string;
//   locale: string;
// }