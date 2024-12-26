const button = document.querySelector('.notify__btn');

button.onclick = function() {
    if(button.classList.contains('openned')) {
        button.classList.remove('openned');
        button.setAttribute('aria-expanded', 'true');
    } else {
        button.classList.add ('openned');
        button.setAttribute('aria-expanded', 'false');
    }
// если список классов кнопки содержит openned, то нужно его убрать, если нет - добавить
}