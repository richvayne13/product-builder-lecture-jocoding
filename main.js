const timeLeftDisplay = document.querySelector('.time-left');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');
const resetBtn = document.querySelector('#reset-btn');
const colorPicker = document.querySelector('#color-picker');
const alarmSound = document.querySelector('#alarm-sound');
const timerProgress = document.querySelector('.timer-progress');
const timerTicks = document.querySelector('.timer-ticks');
const modeButtons = document.querySelectorAll('.mode-btn');
const themeBtn = document.querySelector('#theme-btn');

const radius = 140;
const circumference = 2 * Math.PI * radius;
let timerInterval;
let totalTime = 1500; // a default of 25 minutes
let timeLeft = totalTime;
let isPaused = true;

// Theme logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

themeBtn.addEventListener('click', toggleTheme);

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateDisplay() {
    timeLeftDisplay.textContent = formatTime(timeLeft);
    const progress = (totalTime - timeLeft) / totalTime;
    const strokeDashoffset = circumference * (1 - progress);
    timerProgress.style.strokeDashoffset = strokeDashoffset;
}

function startTimer() {
    if (isPaused) {
        isPaused = false;
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                isPaused = true;
                alarmSound.play();
            }
        }, 1000);
    }
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timerInterval);
}

function resetTimer() {
    pauseTimer();
    timeLeft = totalTime;
    updateDisplay();
}

function changeMode() {
    totalTime = parseInt(this.dataset.time, 10);
    resetTimer();
    document.querySelector('.mode-btn.active').classList.remove('active');
    this.classList.add('active');

}

function createTicks() {
    const tickCount = 60;
    for (let i = 0; i < tickCount; i++) {
        const angle = (i / tickCount) * 360;
        const x1 = 150 + 130 * Math.cos(angle * Math.PI / 180);
        const y1 = 150 + 130 * Math.sin(angle * Math.PI / 180);
        const x2 = 150 + 140 * Math.cos(angle * Math.PI / 180);
        const y2 = 150 + 140 * Math.sin(angle * Math.PI / 180);
        const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        tick.setAttribute('x1', x1);
        tick.setAttribute('y1', y1);
        tick.setAttribute('x2', x2);
        tick.setAttribute('y2', y2);
        timerTicks.appendChild(tick);
    }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
colorPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--primary-color', e.target.value);
});
modeButtons.forEach(button => button.addEventListener('click', changeMode));


// Initial setup
timerProgress.style.strokeDasharray = circumference;
timerProgress.style.strokeDashoffset = 0;
createTicks();
updateDisplay();
