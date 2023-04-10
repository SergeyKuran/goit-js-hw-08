// Імпортуємо бібліотеку Vimeo
import o from '@vimeo/player';
// Імпортуємо бібліотеку throttle
import throttle from 'lodash.throttle';

// Шукаємо по тегу
const iframe = document.querySelector('iframe');
// Створюємо плеєр
const player = new o(iframe);
// Записуємо назву ключа локального сховища
const STOGAGE_KEY = 'videoplayer-current-time';
// Поточний час
const saveTime = throttle((current) => {
    localStorage.setItem(STOGAGE_KEY, current)
}, 1000);
// console.log(saveTime);
// Обробляємо подію timeupdate
player.on('timeupdate', event => {
    const time = event.seconds;
    saveTime(time);
});

const currentPosition = localStorage.getItem(STOGAGE_KEY);
if (currentPosition) {
    player.setCurrentTime(currentPosition);
};