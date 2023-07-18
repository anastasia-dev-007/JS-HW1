// 1.	Scrie o funcție care primește trei numere și returnează valoarea maximă dintre ele.
function maxValue(x, y, z) {
    return Math.max(x, y, z);
}

console.log(maxValue(5, 8, 4));
console.log(maxValue(15, 84, 454));
console.log(maxValue(3, 28, 44));
console.log(maxValue(165, 824, 74));
console.log(maxValue(1, 2, 3));
console.log(maxValue(100, 10, 4154));


//OR

function maxValue(x, y, z) {
    if (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
}

console.log(maxValue(5, 8, 4));
console.log(maxValue(15, 84, 454));
console.log(maxValue(3, 28, 44));
console.log(maxValue(165, 824, 74));
console.log(maxValue(1, 2, 3));
console.log(maxValue(100, 10, 4154));


//2.	Scrie o funcție care primește trei numere și returnează valoarea minimă dintre ele.

function minValue(x, y, z) {
    return Math.min(x, y, z);
}

console.log(minValue(1, 3, 2));

//OR

function minValue(x, y, z) {
    if (x <= y && x <= z) {
        return x;
    } else if (y <= x && y <= z) {
        return y;
    } else {
        return z;
    }
}

console.log(minValue(5, 8, 4));
console.log(minValue(15, 84, 454));
console.log(minValue(3, 28, 44));


//3.	Scrie o funcție care primește vârsta unui utilizator și returnează un mesaj care indică dacă este potrivită pentru a juca un anumit joc. De exemplu, dacă vârsta este mai mare sau egală cu 18, mesajul poate fi "Ești potrivit pentru a juca acest joc", altfel, mesajul poate fi "Ești prea tânăr pentru a juca acest joc".

function acceptableAge(age) {
    return (age > 18 ? "Ești potrivit pentru a juca acest joc" : "Ești prea tânăr pentru a juca acest joc");
}

console.log(acceptableAge(16));
console.log(acceptableAge(36));


// 4.	Scrie o funcție care primește un număr și două limite și verifică dacă numărul se află între aceste limite. Returnează un mesaj corespunzător în fiecare caz.

function intervalElement(x, min, max) {
    if (x >= min && x <= max) {
        return "accepted";
    } else {
        return "anomaly";
    }
}

console.log(intervalElement(5, 1, 10));
console.log(intervalElement(29, 1, 10));


//OR

function intervalElement(x, min, max) {
    switch (true) {
        case x <= max && x >= min:
            text = "accepted";
            break;
        case x < min || x > max:
            text = "anomaly";
            break;
        default:
            text = "error";
    }
    return text;
}

console.log(intervalElement(29, 1, 10));
console.log(intervalElement(5, 1, 10));


// 6.	Scrie o funcție care primește lungimile laturilor unui dreptunghi și verifică dacă acesta este pătrat sau nu. Returnează un mesaj corespunzător în fiecare caz.

function squareValidation(w, x, y, z) {
    if (w === x && x === y && y === z) {
        return "Figure is a square!"
    } else {
        return "Figure is NOT a square!"
    }
}

console.log(squareValidation(1, 1, 1, 1));
console.log(squareValidation(4, 5, 7, 8));
console.log(squareValidation(2, 2, 3, 3));
console.log(squareValidation(2, 2, 2, 3));

//7.	Scrie o funcție care primește ca parametru un număr de la 1 la 7(numărul zilei săptămânii) și returnează numele zilei respective.

function weekDay(day) {
    switch (day) {
        case 1: {
            console.log('Monday');
            break;
        }
        case 2: {
            console.log('Tuesday');
            break;
        }
        case 3: {
            console.log('Wednesday');
            break;
        }
        case 4: {
            console.log('Thursday');
            break;
        }
        case 5: {
            console.log('Friday');
            break;
        }
        case 6: {
            console.log('Saturday');
            break;
        }
        case 7: {
            console.log('Sunday');
            break;
        }
        default: {
            console.log('not a week day');
        }
    }
}

weekDay(7);
weekDay(1);
weekDay(4);
weekDay(2);


//5.	Scrie un program care primește o valoare într-o monedă și o convertește într-o altă monedă, în funcție de un curs de schimb. Monedele disponibile: EUR, USD, MDL, RON.

// !!!mi-a reusit numai fromCurrency in MDL, dar invers nu stiu cum
// si nu stiu cum sa fac asa ca exchange rate sa fie schimbabile. Adica sa nu le defines direct aici, dar cumva sa traga date de la vreo Variabila sau ceva de acest gen.


// USD - 18.1685
// EUR - 20.2941
// RON - 4.1051

function currencyConverter(amount, currency) {
    if (currency === "USD") {
        return amount * 18.1685 + "MDL";
    } else if (currency === "EUR") {
        return amount * 20.2941 + "MDL";
    } else if (currency === "RON") {
        return amount * 4.1051 + "MDL";
    } else {
        return amount * 1 + "MDL";
    }
}

console.log(currencyConverter(10, "EUR"))
console.log(currencyConverter(10, "USD"))
console.log(currencyConverter(10, "RON"))
console.log(currencyConverter(10, "MDL"))


//Updated task with currency converter

function currencyConverter(amount, currency) {
  const rateUSD = 0.9;
const rateMDL = 0.05;
const rateRON = 0.2;
  const rateEUR = 1;
 

    if (currency === "USD") {
        return amount * rateUSD + "EUR";
    } else if (currency === "MDL") {
        return amount * rateMDL + "EUR";
    } else if (currency === "RON") {
        return amount * rateRON + "EUR";
    } else {
        return "no exchange of" + currency + "to EUR";
    }
}

console.log(currencyConverter(10, "USD"));
console.log(currencyConverter(10, "RON"));
console.log(currencyConverter(10, "MDL"));
console.log(currencyConverter(10, "GBP"));



//Update 2

function currencyConverter(amount, fromCurrency, toCurrency) {
  const rateUSD = 0.9;
const rateMDL = 0.05;
const rateRON = 0.2;
  const rateEUR = 1;
 

    if (fromCurrency === "USD" & toCurrency === "EUR") {
        return amount * rateUSD + "EUR";
    } else if (fromCurrency === "MDL" & toCurrency === "EUR") {
        return amount * rateMDL + "EUR";
    } else if (fromCurrency === "RON" & toCurrency === "EUR") {
        return amount * rateRON + "EUR";
    } else if (fromCurrency === "USD" & toCurrency === "MDL") {
        return amount * rateUSD / rateMDL + "MDL";
    } else if (fromCurrency === "MDL" & toCurrency === "USD") {
        return amount * rateMDL / rateUSD + "USD";
         } else if (fromCurrency === "USD" & toCurrency === "RON") {
        return amount * rateUSD / rateRON + "RON";
    } else if (fromCurrency === "RON" & toCurrency === "USD") {
        return amount * rateRON / rateUSD + "USD";
    } else if (fromCurrency === "RON" & toCurrency === "MDL") {
        return amount * rateRON /rateMDL + "MDL";
         } else if (fromCurrency === "MDL" & toCurrency === "RON") {
        return amount * rateMDL / rateRON + "RON";
    } else {
        return "no exchange from " + fromCurrency + " to" + toCurrency;
    }
}

console.log(currencyConverter(10,"USD","EUR"));
console.log(currencyConverter(10,"RON","EUR"));
console.log(currencyConverter(10,"MDL","EUR"));
console.log(currencyConverter(10,"USD","RON"));
console.log(currencyConverter(10,"USD","MDL"));
console.log(currencyConverter(10,"MDL","USD"));
console.log(currencyConverter(10,"MDL","RON"));
console.log(currencyConverter(10,"RON","USD"));
console.log(currencyConverter(10,"RON","MDL"));
console.log(currencyConverter(10,"GBP","EUR"));
