// Вам необходимо создать навигационное меню для веб-сайта, в котором меняется активный пункт при клике без фактического перехода на другие страницы. Меню должно обладать следующими характеристиками:
// Подсветка активного пункта: При клике на пункт меню он должен становиться активным, и для активного пункта должен применяться определенный стиль (например, изменение цвета фона). Если выбрать другой пункт, предыдущий должен перестать быть активным.
// Эффекты наведения: При наведении курсора на пункты меню должны применяться эффекты (например, изменение цвета текста или фона) для подсказки пользователю, что пункт меню является интерактивным.

const allItemMenu = document.querySelectorAll('.menu__link');

allItemMenu.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault
        e.target.classList.add('decor')
        allItemMenu.forEach(item => {
            if (item !== e.target) {
                item.classList.remove('decor')
            }
        })
    })
    item.classList.remove('decor')
})