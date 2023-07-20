// 4.	Scrie o funcție care primește un număr și două limite și verifică dacă numărul se află între aceste limite. Returnează un mesaj corespunzător în fiecare caz.

//Radu recommended this one

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