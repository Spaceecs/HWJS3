let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDayIndex = 0;

while (true) {
    alert(`Day of the week: ${daysOfWeek[currentDayIndex]}`);

    let userResponse = confirm("Do you want to see the next day?");

    if (!userResponse) {
        break;
    }

    currentDayIndex = (currentDayIndex + 1) % daysOfWeek.length; // Використовуємо % для циклічності
}
