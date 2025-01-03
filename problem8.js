var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var bigNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (bigNumber < numbers[i]) {
        bigNumber = numbers[i];
    }
}

console.log(bigNumber);