
function* splitByWord(sentence) {
    let listOfWords = sentence.split(" ");
    for(const word of listOfWords) {
        yield word;
    }
}

let splitSentence = splitByWord("All I know is something like a bird within her sang");
let word = splitSentence.next();
while(word.value !== undefined) {
    console.log(word.value);
    word = splitSentence.next();
}

