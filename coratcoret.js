const numbers = [0, 2, 3, 4, 5, 1, 7, 2, 9];

function hasNoDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log(`Duplicate found: ${arr[i]} at positions ${i} and ${j}`);
                return false;
            }
        }
    }
    return true;
}

// Check the array
console.log("Array:", numbers);
console.log("Has no duplicates:", hasNoDuplicates(numbers)); // false