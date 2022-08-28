promptText.addEventListener('click', () => {
let textChange = prompt('введите текст');

    promptText.textContent = textChange;
    event.preventDefault();
})
