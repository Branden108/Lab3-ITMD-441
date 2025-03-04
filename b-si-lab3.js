// Branden Si
// ITMD 441-01 Undergraduate Student

// Exercise #1: minMaxAverage function
function minMaxAverage(numbers) {
    const totalNumbers = numbers.length;
    const minValue = Math.min(...numbers);
    const maxValue = Math.max(...numbers);
    const average = numbers.reduce((a, b) => a + b, 0) / totalNumbers;

    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average.toFixed(2)}`);
}

// Test cases for minMaxAverage
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);  // Test Case 1
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]); // Test Case 2
minMaxAverage([10, 15, 20, 5, 12, 7]);    // Test Case 3


// Exercise #2: countVowels function
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const count = str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
    console.log(`${str}: ${count} vowels`);
}

// Test cases for countVowels
countVowels("Winter");  // Test Case 1
countVowels("Programming"); // Test Case 2
countVowels("Education"); // Test Case 3


// Exercise #3: sortNumbers function
function sortNumbers(numbers) {
    const sortedArray = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: [${numbers}], Sorted Array: [${sortedArray}]`);
}

// Test cases for sortNumbers
sortNumbers([9, 4, 6, 2]);  // Test Case 1
sortNumbers([12, 45, 8, 23, 5]); // Test Case 2
sortNumbers([3, 1, 7, 8, 6]); // Test Case 3


// Exercise #4: celsiusToFahrenheit function
function celsiusToFahrenheit(celsius) {
    const celsiusValue = parseFloat(celsius);
    if (isNaN(celsiusValue)) {
        console.log(`Invalid input: ${celsius}`);
        return;
    }
    const fahrenheit = (celsiusValue * 9/5) + 32;
    console.log(`${celsiusValue.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases for celsiusToFahrenheit
celsiusToFahrenheit(30);   // Test Case 1
celsiusToFahrenheit("25"); // Test Case 2
celsiusToFahrenheit("abc"); // Test Case 3
