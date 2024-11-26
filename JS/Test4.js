let input = prompt("Enter a number:");
let num = Math.abs(Number(input));
let digitsCount = 0;

while (num >= 1) {
    num = Math.floor(num / 10);
    digitsCount++;
}

alert(`The number of digits in ${input} is: ${digitsCount}`);
