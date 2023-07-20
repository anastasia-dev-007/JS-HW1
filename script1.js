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