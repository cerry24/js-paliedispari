/**
 * Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 *  Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
 *  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione.
 *  Dichiariamo chi ha vinto.
 */






function getRandomCpuNumber (numMin, numMax) {
    const cpuNumber =  Math.floor( Math.random() * (numMax - numMin + 1) + numMin );

    return cpuNumber;
}

function checkSumOddOrEven (userNumber, cpuNumber) {
    const sum = userNumber + cpuNumber;
    let result;

    if ( sum % 2 === 0 ) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;
}

function checkWinner (userChoice) {
    let result = checkSumOddOrEven.result;

    if ( userChoice == 'pari' && result == 'pari' ) {
        return 'Hai vinto';
    } else if ( userChoice == 'pari' && result == 'dispari' ) {
        return 'Ho vinto io';
    } else if ( userChoice == 'dispari' && result == 'dispari' ) {
        return 'Hai vinto';
    } else {
        return 'Ho vinto io';
    }
}



const userChoice = prompt('scegli pari o dispari');
const userNumber = parseInt(prompt('scegli un numero tra 1 e 5'), 10);
const cpuNumber = getRandomCpuNumber(1, 5);

console.log(userNumber);
console.log(cpuNumber);
console.log(checkSumOddOrEven(userNumber, cpuNumber));
console.log(checkWinner(userChoice));