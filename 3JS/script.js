
//zadanie 1
function czyPitagorejskie(a, b, c) {

    let sorted = [a, b, c].sort((x, y) => x - y);
     if(sorted[0]*sorted[0] + sorted[1] *sorted[1] === sorted[2] * sorted[2]){
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
function tabliczka(bok) {
    for (let i = 1; i <= bok; i++) {
        let row = '';
        for (let j = 1; j <= bok; j++) {
            row += i * j + ' ';
        }
        console.log(row);
    }
}

//zad4
function printFibonacciSequence(length) {
    let sequence = [0, 1];
    for (let i = 2; i < length; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    console.log(sequence);
}

//zad5
function choinka(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= height - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}
//zad6
function choinkaNocna(height) {
    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < height - i - 1; j++) {
            row += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            row += '*';
        }
        for (let j = 0; j < height - i - 1; j++) {
            row += ' ';
        }
        console.log(row);
    }
    // Draw the trunk of the tree
    let trunk = '';
    for (let i = 0; i < height - 1; i++) {
        trunk += ' ';
    }
    trunk += '|';
    console.log(trunk);
}
