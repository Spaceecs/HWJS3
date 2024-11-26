let min = 0;
let max = 100;

alert("Загадайте число від 0 до 100, а я постараюсь его угадать!");

while (true) {
    // Середнє число діапазону
    let guess = Math.floor((min + max) / 2);

    // Запитуємо у користувача
    let response = prompt(`Ваше число > ${guess}, < ${guess} чи == ${guess}?`);

    if (response === ">") {
        // Якщо число більше, збільшуємо мінімум
        min = guess + 1;
    } else if (response === "<") {
        // Якщо число менше, зменшуємо максимум
        max = guess - 1;
    } else if (response === "==") {
        // Якщо число вгадано
        alert(`Я вгадав ваше число! Це ${guess}.`);
        break; // Вихід з циклу
    } else {
        alert("Будь ласка, відповідайте >, < або ==.");
    }
}
