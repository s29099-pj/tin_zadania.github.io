//zadanie 1
function czyPitagorejskie(a, b, c) {
    let sorted = [a, b, c].sort((x, y) => x - y);
    if (sorted[0] * sorted[0] + sorted[1] * sorted[1] === sorted[2] * sorted[2]) {
        return true;
    }
    return false;
}

//zadanie 2
function wypiszPodzielne(a, b, c) {
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}

//zadanie 3 
function tabliczka(length) {
    for (let i = 1; i <= length; i++) {
        let row = '';
        for (let j = 1; j <= length; j++) {
            row += i * j + ' ';
        }
        console.log(row);
    }
}

// Zadanie 4
function fibonacci(length) {
    let fibSequence = [0, 1];

    for (let i = 2; i < length; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    console.log(fibSequence);
}

// Zadanie 5
function choinka(height) {
    console.log("\n\n\n");
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

//zadanie 6
function choinkaNoca(height) {
    console.log("\n\n\n");

    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < height - i; j++) {
            row += '*';
        }
        for (let k = 0; k < 2 * i; k++) {
            row += ' ';
        }
        for (let j = 0; j < height - i; j++) {
            row += '*';
        }
        console.log(row);
    }

    let treeMax = '**';
    for (let i = 0; i < height - 1; i++) {
        treeMax += '**';
    }
    console.log(treeMax);
}

//zadanie 7

function obliczPowierzchnie(ksztalt, ...parametry) {
    switch (ksztalt) {
        case "prostokat":
            return parametry.length === 2 ? prostokatPowierzchnia(...parametry) : "Nieprawidłowa liczba parametrów";
        case "trapez":
            return parametry.length === 3 ? trapezPowierzchnia(...parametry) : "Nieprawidłowa liczba parametrów";
        case "rownoleglobok":
            return parametry.length === 3 ? rownoleglobokPowierzchnia(...parametry) : "Nieprawidłowa liczba parametrów";
        case "trojkat":
            return parametry.length === 2 ? trojkatPowierzchnia(...parametry) : "Nieprawidłowa liczba parametrów";
        default:
            return "Nieznana figura";
    }
}

function prostokatPowierzchnia(dlugosc, szerokosc) {
    return dlugosc * szerokosc;
}

function trapezPowierzchnia(podstawa1, podstawa2, wysokosc) {
    return ((podstawa1 + podstawa2) / 2) * wysokosc;
}

function rownoleglobokPowierzchnia(podstawa, wysokosc) {
    return podstawa * wysokosc;
}

function trojkatPowierzchnia(podstawa, wysokosc) {
    return (1 / 2) * podstawa * wysokosc;
}

//zadanie 8 
const obliczPole = (ksztalt, callback, ...parametry) => {
    return callback(...parametry);
};

const prostokat = (a, b) => a * b;
const trapez = (a, b, h) => ((a + b) * h) / 2;
const rownoleglobok = (a, b, h) => a * h;
const trojkat = (a, h) => (a * h) / 2;


//Zadanie 9

function trojkatPascala(wysokosc) {
    const trojkatPas = [];

    for (let i = 0; i < wysokosc; i++) {
        trojkatPas[i] = new Array(i + 1);
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                trojkatPas[i][j] = 1;
            } else {
                trojkatPas[i][j] = trojkatPas[i - 1][j - 1] + trojkatPas[i - 1][j];
            }
        }
    }

    for (let i = 0; i < wysokosc; i++) {
        let row = "";
        const iloscSpacji = wysokosc - i;

        for (let s = 0; s < iloscSpacji; s++) {
            row += " ";
        }

        for (let j = 0; j <= i; j++) {
            row += trojkatPas[i][j] + " ";
        }

        console.log(row.trim());
    }
}
