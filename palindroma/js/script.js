/**
 * Palidroma
 * Chiedere all’utente di inserire una parola:
 *  Creare una funzione per capire se la parola inserita è palindroma
 */






function checkPalindromeElement (userWord) {
    for (let i = 0; i < userWord.length / 2; i++) {

        if (userWord[i] !== userWord[userWord.length - 1 - i]) {
            return 'La parola inserita non &egrave; palindroma';
        }
    }

    return 'La parola inserita &egrave palindorma';
}


const userWord = prompt('Immetti una parola');
const result = checkPalindromeElement(userWord);

document.getElementById('output').innerHTML = result;