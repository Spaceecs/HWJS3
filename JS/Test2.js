let input = prompt("Enter two numbers separated by a space:");
let [x, y] = input.split(" ").map(Number);

while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
}

alert(`Greatest Common Divisor: ${x}`);
