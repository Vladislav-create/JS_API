// Создайте простое модальное окно, которое появляется при клике на кнопку "Открыть модальное окно" и закрывается при клике на кнопку "Закрыть". Модальное окно должно содержать заголовок "Модальное окно" и кнопку для закрытия.
// * Модальное окно должно плавно появляться и исчезать при открытии и закрытии.

const btnShow = document.querySelector('.btn__show');
const modalWindow = document.querySelector('.modalWindow');
const modalWindowBtn = document.querySelector('.modalWindow__btn');

btnShow.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden')
    btnShow.classList.toggle('hidden')
})

modalWindowBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden')
    btnShow.classList.toggle('hidden')
})
