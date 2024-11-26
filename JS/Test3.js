let input = prompt("Enter a number:");
let num = Number(input);

let divisors = "";
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        divisors += i + " ";
    }
}

alert(`Divisors of ${num}: ${divisors}`);