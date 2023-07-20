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