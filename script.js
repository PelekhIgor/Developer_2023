const dataEl = document.getElementById("text");
const resultEl = document.getElementById('result')
const formEl = document.getElementById("form");

formEl.addEventListener("submit", findLetter);




function findLetter(event) {

    event.preventDefault();

    const data = dataEl.value
    const words = data.split(" ");
    const uniqueLetter = [];

    words.forEach((word) => {
        const letterCount = {};

        [...word].forEach((letter) => {

            if (letterCount[letter]) {
                letterCount[letter]++;
            } else {
                letterCount[letter] = 1;
            }
        });

        for (const letter of word) {
            if (letterCount[letter] === 1) {
                uniqueLetter.push(letter);
                break;
            }
        }
    });


    const firstLetter = uniqueLetter.find(letter => uniqueLetter.indexOf(letter) === uniqueLetter.lastIndexOf(letter)

    );

    resultEl.innerText = firstLetter
}



