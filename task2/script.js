const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    console.log('Служит для вывода информации в консоль');
})

const consoleAlert = document.querySelector('#alert');

consoleAlert.addEventListener('click', () => {
    alert('Служит для вывода информации в окне');
})

const consolePrompt = document.querySelector('#prompt');

consolePrompt.addEventListener('click', () => {
    prompt('Служит для ввода информации в окне');
})




