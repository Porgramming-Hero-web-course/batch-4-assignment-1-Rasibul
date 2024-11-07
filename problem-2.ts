{

    // problem-2: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    function removeDuplicates(numbers: number[]): number[] {
        const uniqueNumbers: number[] = [];
        const seen = new Set<number>();

        for (const num of numbers) {
            if (!seen.has(num)) {
                seen.add(num);
                uniqueNumbers.push(num);
            }
        }
        return uniqueNumbers;
    }

    const numbers: number[] = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8];
    const uniqueNumbers: number[] = removeDuplicates(numbers);
    console.log(uniqueNumbers);
}


