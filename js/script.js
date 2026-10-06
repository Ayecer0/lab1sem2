const greetings = ['Hello, World!', 'Привет, мир!', 'Hallo, Welt!', '¡Hola, mundo!', 'Bonjour, le monde !'];
let index = 0;

const greetingEl = document.getElementById('greeting');
const dateEl = document.getElementById('date');
const clockEl = document.getElementById('clock');

function updateClock() {
    const now = new Date();
    dateEl.textContent = 'Сегодня ' + now.toLocaleDateString('ru-RU');
    clockEl.textContent = 'Сейчас: ' + now.toLocaleTimeString('ru-RU');
}

document.getElementById('btn').addEventListener('click', () => {
    index = (index + 1) % greetings.length;
    greetingEl.textContent = greetings[index];
});

updateClock();
setInterval(updateClock, 1000);
