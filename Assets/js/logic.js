// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const moodSetter = document.querySelector('#toggle');
const bodyE1 = document.querySelector('body');
const asideE1 = document.querySelector('aside');

let page = " ";

moodSetter.addEventListener('click', function() {
    if (bodyE1.classList.contains('dark')) {
        bodyE1.classList.remove('dark');
        moodSetter.textContent = '💡';
        page = '💡';
        document.documentElement.style.setProperty('--circle-color', '#ffb100');
    } else {
        bodyE1.classList.add('dark');
        moodSetter.textContent = '🌃';
        page = '🌃';
        document.documentElement.style.setProperty('--circle-color', 'green');
    }
    localStorage.setItem('mode', page);
});
// TODO: Create functions to read and write from local storage

function init() {
    page = localStorage.getItem('mode');
    if (page === '🌃') {
        bodyE1.classList.add('dark');
        moodSetter.textContent = "🌃";
;
    } else {
        bodyE1.classList.remove('dark');
        moodSetter.textContent = "💡";
    }
}

init()

