//3.	Scrie o funcție care primește vârsta unui utilizator și returnează un mesaj care indică dacă este potrivită pentru a juca un anumit joc. De exemplu, dacă vârsta este mai mare sau egală cu 18, mesajul poate fi "Ești potrivit pentru a juca acest joc", altfel, mesajul poate fi "Ești prea tânăr pentru a juca acest joc".

function acceptableAge(age) {
    return (age > 18 ? "Ești potrivit pentru a juca acest joc" : "Ești prea tânăr pentru a juca acest joc");
}

console.log(acceptableAge(16));
console.log(acceptableAge(36));