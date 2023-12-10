//1.1 Определение текущего размера окна браузера:
// Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.

const width = document.getElementById('width')
const height = document.getElementById('height')

function showSize(){
    width.textContent = window.innerWidth
    height.textContent = window.innerHeight
}
window.addEventListener('load', showSize)
window.addEventListener('resize', showSize)

//1.2. Подтверждение закрытия страницы:
// Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.

window.addEventListener("beforeunload", e => {
    e.preventDefault();
    e.returnValue = 'Вы уверены, что хотите покинуть эту страницу?';
    });


//1.3. Управление историей переходов:
// Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.