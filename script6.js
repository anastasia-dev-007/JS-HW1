// 6.	Scrie o funcție care primește lungimile laturilor unui dreptunghi și verifică dacă acesta este pătrat sau nu. Returnează un mesaj corespunzător în fiecare caz.

// function squareValidation(w, x, y, z) {
//     if (w === x && x === y && y === z) {
//         return "Figure is a square!"
//     } else {
//         return "Figure is NOT a square!"
//     }
// }

// console.log(squareValidation(1, 1, 1, 1));
// console.log(squareValidation(4, 5, 7, 8));
// console.log(squareValidation(2, 2, 3, 3));
// console.log(squareValidation(2, 2, 2, 3));

//Radu a propus sa utilizez Ternary Operator

function squareValidation(w, x, y, z) {
    const isSquare = w === x && x === y && y === z;

    return isSquare ? "Figure is a square!" : "Figure is NOT a square!";
}

console.log(squareValidation(1, 1, 1, 1));
console.log(squareValidation(4, 5, 7, 8));
console.log(squareValidation(2, 2, 3, 3));
console.log(squareValidation(2, 2, 2, 3));
