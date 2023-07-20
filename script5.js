//5.	Scrie un program care primește o valoare într-o monedă și o convertește într-o altă monedă, în funcție de un curs de schimb. Monedele disponibile: EUR, USD, MDL, RON.


// USD - 18.1685
// EUR - 20.2941
// RON - 4.1051

// function currencyConverter(amount, currency) {
//     if (currency === "USD") {
//         return amount * 18.1685 + "MDL";
//     } else if (currency === "EUR") {
//         return amount * 20.2941 + "MDL";
//     } else if (currency === "RON") {
//         return amount * 4.1051 + "MDL";
//     } else {
//         return amount * 1 + "MDL";
//     }
// }

// console.log(currencyConverter(10, "EUR"));
// console.log(currencyConverter(10, "USD"));
// console.log(currencyConverter(10, "RON"));
// console.log(currencyConverter(10, "MDL"));


// //update

// function convertCurrency(amount, fromCurrency, toCurrency) {

//     const rateUSD = 18.1685;
//     const rateEUR = 20.2941;
//     const rateRON = 4.1051;

//     if (fromCurrency === "MDL") {
//         switch (fromCurrency === "MDL") {
//             case (toCurrency === "EUR"):
//                 console.log(amount * rateEUR);
//                 break;
//             case (toCurrency === "USD"):
//                 console.log(amount * rateUSD);
//                 break;
//             case (toCurrency === "RON"):
//                 console.log(amount * rateRON);
//                 break;
//         }
//     } else {
//         switch (fromCurrency !== "MDL") {
//             case (toCurrency === "EUR"):
//                 console.log(amount / rateEUR);
//                 break;
//             case (toCurrency === "USD"):
//                 console.log(amount / rateUSD);
//                 break;
//             case (toCurrency === "RON"):
//                 console.log(amount / rateRON);
//                 break;
//         }
//     }
// }

// convertCurrency(10, "EUR", "MDL");
// convertCurrency(200, "MDL", "EUR");
// convertCurrency(10, "USD", "MDL");
// convertCurrency(200, "MDL", "USD");
// convertCurrency(10, "RON", "MDL");
// convertCurrency(200, "MDL", "RON");
// convertCurrency(10, "MDL", "MDL");

//Update 2

// function currencyConverter(amount, fromCurrency, toCurrency) {
//     const rateUSD = 0.9;
//   const rateMDL = 0.05;
//   const rateRON = 0.2;
//     const rateEUR = 1;


//       if (fromCurrency === "USD" & toCurrency === "EUR") {
//           return amount * rateUSD + "EUR";
//       } else if (fromCurrency === "MDL" & toCurrency === "EUR") {
//           return amount * rateMDL + "EUR";
//       } else if (fromCurrency === "RON" & toCurrency === "EUR") {
//           return amount * rateRON + "EUR";
//       } else if (fromCurrency === "USD" & toCurrency === "MDL") {
//           return amount * rateUSD / rateMDL + "MDL";
//       } else if (fromCurrency === "MDL" & toCurrency === "USD") {
//           return amount * rateMDL / rateUSD + "USD";
//            } else if (fromCurrency === "USD" & toCurrency === "RON") {
//           return amount * rateUSD / rateRON + "RON";
//       } else if (fromCurrency === "RON" & toCurrency === "USD") {
//           return amount * rateRON / rateUSD + "USD";
//       } else if (fromCurrency === "RON" & toCurrency === "MDL") {
//           return amount * rateRON /rateMDL + "MDL";
//            } else if (fromCurrency === "MDL" & toCurrency === "RON") {
//           return amount * rateMDL / rateRON + "RON";
//       } else {
//           return "no exchange from " + fromCurrency + " to" + toCurrency;
//       }
//   }

//   console.log(currencyConverter(10,"USD","EUR"));
//   console.log(currencyConverter(10,"RON","EUR"));
//   console.log(currencyConverter(10,"MDL","EUR"));
//   console.log(currencyConverter(10,"USD","RON"));
//   console.log(currencyConverter(10,"USD","MDL"));
//   console.log(currencyConverter(10,"MDL","USD"));
//   console.log(currencyConverter(10,"MDL","RON"));
//   console.log(currencyConverter(10,"RON","USD"));
//   console.log(currencyConverter(10,"RON","MDL"));
//   console.log(currencyConverter(10,"GBP","EUR"));


//update 3

/*
function currencyConverter(amount, fromCurrency, toCurrency) {
    const rateUSD = 0.9;
    const rateMDL = 0.05;
    const rateRON = 0.2;


    if (fromCurrency === "USD") {
        switch (toCurrency) {
            case "EUR": {
                return amount * rateUSD + "EUR";
            }
            case "MDL": {
                return amount * rateUSD / rateMDL + "MDL";
            }
            case "RON": {
                return amount * rateUSD / rateRON + "RON";
            }
            default: {
                return "no exchange of " + fromCurrency + " in " + " " + toCurrency;
            }
        }
    }

    if (fromCurrency === "MDL") {
        switch (toCurrency) {
            case "EUR": {
                return amount * rateMDL + "EUR";
            }
            case "USD": {
                return amount * rateMDL / rateUSD + "USD";
            }
            case "RON": {
                return amount * rateMDL / rateRON + "RON";
            }
            default: {
                return "no exchange of " + fromCurrency + " in " + " " + toCurrency;
            }
        }
    }

    if (fromCurrency === "RON") {
        switch (toCurrency) {
            case "EUR": {
                return amount * rateRON + "EUR";
            }
            case "USD": {
                return amount * rateRON / rateUSD + "USD";
            }
            case "MDL": {
                return amount * rateRON / rateMDL + "MDL";
            }
            default: {
                return "no exchange of " + fromCurrency + " in " + " " + toCurrency;
            }
        }
    }

    if (fromCurrency === "EUR") {
        switch (toCurrency) {
            case "RON": {
                return amount / rateRON + "RON";
            }
            case "USD": {
                return amount / rateUSD + "USD";
            }
            case "MDL": {
                return amount / rateMDL + "MDL";
            }
            default: {
                return "no exchange of " + fromCurrency + " in" + " " + toCurrency;
            }
        }
    }

    if (fromCurrency !== "EUR" && fromCurrency !== "RON" && fromCurrency !== "MDL" && fromCurrency !== "USD") {
        return "no exchange of " + fromCurrency + " in " + toCurrency;
    }
}

console.log(currencyConverter(10, "USD", "EUR"));// Output: 9EUR
console.log(currencyConverter(10, "USD", "RON"));// Output: 45RON
console.log(currencyConverter(10, "USD", "MDL"));// Output: 180MDL
console.log(currencyConverter(10, "RON", "EUR"));// Output: 2EUR
console.log(currencyConverter(10, "RON", "USD"));// Output: 2.2222USD
console.log(currencyConverter(10, "RON", "MDL"));// Output: 40MDL
console.log(currencyConverter(10, "MDL", "EUR"));// Output: 0.5EUR
console.log(currencyConverter(10, "MDL", "USD"));// Output: 0.555USD
console.log(currencyConverter(10, "MDL", "RON"));// Output: 2.5RON
console.log(currencyConverter(10, "EUR", "USD"));// Output: 11.11USD
console.log(currencyConverter(10, "EUR", "RON"));// Output: 50RON
console.log(currencyConverter(10, "EUR", "MDL"));// Output: 200MDL
console.log(currencyConverter(10, "GBP", "EUR"));// Output: no exchange of GBP in EUR
console.log(currencyConverter(10, "EUR", "GBP"));// Output: no exchange of EUR in GBP
console.log(currencyConverter(10, "GBP", "RUB"));// Output: no exchange of GBP in RUB

*/

//OR


function currencyConverter(amount, fromCurrency, toCurrency) {
    const rateUSD = 0.9;
    const rateMDL = 0.05;
    const rateRON = 0.2;

    if (fromCurrency === "MDL") {
        if (toCurrency === "EUR") {
            return amount * rateMDL + "EUR";
        } else if (toCurrency === "USD") {
            return amount * rateMDL / rateUSD + "USD";
        } else if (toCurrency === "RON") {
            return amount * rateMDL / rateRON + "RON";
        } else {
            return "no exchange of " + fromCurrency + " in " + toCurrency;
        }
    }

    if (fromCurrency === "EUR") {
        if (toCurrency === "MDL") {
            return amount / rateMDL + "MDL";
        } else if (toCurrency === "USD") {
            return amount / rateUSD + "USD";
        } else if (toCurrency === "RON") {
            return amount / rateRON + "RON";
        } else {
            return "no exchange of " + fromCurrency + " in " + toCurrency;
        }
    }

    if (fromCurrency === "RON") {
        if (toCurrency === "EUR") {
            return amount * rateRON + "EUR";
        } else if (toCurrency === "USD") {
            return amount * rateRON / rateUSD + "USD";
        } else if (toCurrency === "MDL") {
            return amount * rateRON / rateMDL + "MDL";
        } else {
            return "no exchange of " + fromCurrency + " in " + toCurrency;
        }
    }

    if (fromCurrency === "USD") {
        if (toCurrency === "EUR") {
            return amount * rateUSD + "EUR";
        } else if (toCurrency === "RON") {
            return amount * rateUSD / rateRON + "RON";
        } else if (toCurrency === "MDL") {
            return amount * rateUSD / rateMDL + "MDL";
        } else {
            return "no exchange of " + fromCurrency + " in " + toCurrency;
        }
    }

    if (fromCurrency !== "EUR" && fromCurrency !== "RON" && fromCurrency !== "MDL" && fromCurrency !== "USD") {
        return "no exchange of " + fromCurrency + " in " + toCurrency;
    }
}

console.log(currencyConverter(10, "USD", "EUR"));// Output: 9EUR
console.log(currencyConverter(10, "USD", "RON"));// Output: 45RON
console.log(currencyConverter(10, "USD", "MDL"));// Output: 180MDL
console.log(currencyConverter(10, "RON", "EUR"));// Output: 2EUR
console.log(currencyConverter(10, "RON", "USD"));// Output: 2.2222USD
console.log(currencyConverter(10, "RON", "MDL"));// Output: 40MDL
console.log(currencyConverter(10, "MDL", "EUR"));// Output: 0.5EUR
console.log(currencyConverter(10, "MDL", "USD"));// Output: 0.555USD
console.log(currencyConverter(10, "MDL", "RON"));// Output: 2.5RON
console.log(currencyConverter(10, "EUR", "USD"));// Output: 11.11USD
console.log(currencyConverter(10, "EUR", "RON"));// Output: 50RON
console.log(currencyConverter(10, "EUR", "MDL"));// Output: 200MDL
console.log(currencyConverter(10, "GBP", "EUR"));// Output: no exchange of GBP in EUR
console.log(currencyConverter(10, "EUR", "GBP"));// Output: no exchange of EUR in GBP
console.log(currencyConverter(10, "GBP", "RUB"));// Output: no exchange of GBP in RUB
