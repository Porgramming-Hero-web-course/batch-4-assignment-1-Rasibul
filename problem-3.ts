{

    // problem-3: Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.


    function countWordOccurrences(sentence: string, word: string): number {
        const lowerCaseSentence: string = sentence.toLowerCase();
        const lowerCaseWord: string = word.toLowerCase();
        const words: string[] = lowerCaseSentence.split(' ');
        console.log(words);

        const wordCount: number = words.filter(word => word === lowerCaseWord).length;
        console.log(wordCount);
        return wordCount
    }


    const result: number = countWordOccurrences("I love typescript", "typescript")
    console.log(result);
}