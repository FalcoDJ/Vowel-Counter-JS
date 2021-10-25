const inputField = document.querySelector('#input-field');
const vowelCountField = document.querySelector('.vowel-count');
const consonantCountField = document.querySelector('.consonant-count');
const syllableCountField = document.querySelector('.syllable-count');

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

function getSyllablesInWord(word = '') {
    // let syllables = word.length > 0 ? 1 : 0;
    // if (word.length * 0.5 < 5 && word.length > 0) syllables++;
    const syllables = word.length > 0 ? Math.max(1, (word.length / 3.5) | 0) : 0;

    return syllables;
}

function getStatistics() {
    let vowelCount = 0;
    let consonantCount = 0;

    let textInput = String(inputField.value);
    symbols.forEach((s) => {
        textInput = textInput.replace(s, '');
    });

    let text = textInput;
    text = Array.from(text).forEach((char) => {
        if (vowels.find((v) => v.toLowerCase() === char)) {
            vowelCount++;
        }

        if (consonants.find((c) => c.toLowerCase() === char)) {
            consonantCount++;
        }
    });

    let syllables = 0;
    const wordsInText = textInput.split(' ');
    wordsInText.forEach((word) => {
        syllables += getSyllablesInWord(word);
    });

    consonantCountField.innerText = consonantCount;
    vowelCountField.innerText = vowelCount;
    syllableCountField.innerText = syllables;

}

window.onload = () => {
    getStatistics();
}

inputField.addEventListener('keyup', (e) => {
    getStatistics();
});