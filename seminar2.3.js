// У вас есть кнопка "Купить". Создайте скрипт, который при клике на эту кнопку меняет её текст на "Товар добавлен в корзину" в течение 2 секунд, а затем возвращает исходный текст "Купить". В обработчике события клика также проверьте, является ли событие доверенным. Если событие является доверенным, выполните изменение текста кнопки и убедитесь, что после 2 секунд текст возвращается в исходное состояние.

const btnChange = document.querySelector('.btnChange');
btnChange.textContent = 'Купить'

btnChange.addEventListener('click', (e) => {
    if (e.isTrusted) {
        btnChange.textContent = 'Товар добавлен в корзину'
    }
    setTimeout(() => {
        btnChange.textContent = 'Купить'
    }, 2000);
})