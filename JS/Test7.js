let input = prompt("Enter a number:");
let shift = Number(prompt("Enter how many digits to shift:"));

let numStr = input.toString();
let length = numStr.length;

shift = shift % length;

let shiftedNum = numStr;

for (let i = 0; i < shift; i++) {
    shiftedNum = shiftedNum.slice(1) + shiftedNum[0];
}

alert(`The result of shifting ${input} by ${shift} digits is: ${shiftedNum}`);
