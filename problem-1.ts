{

    // problem-1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.


    function sumArray(numbers: number[]): number {
        return numbers.reduce((acc: number, curr: number): number => acc + curr, 0);
    }

    // Example usage
    const result: number = sumArray([1, 2, 3, 4, 5]);
    console.log(result); // Output: 15
}