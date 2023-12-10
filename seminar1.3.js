// Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// Используйте Bootstrap, чтобы стилизовать элементы:
// Заголовок статьи (<h2>)
// Текст статьи (<p>)
// Кнопки "Добавить статью", "Удалить" и "Редактировать".
// Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте JSON-данные для определения заголовков и текстов статей.
// Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// * Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая статья должна быть удалена из списка.
// * Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать" пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте всплывающее окно или prompt для ввода новых данных.
// * Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное хранилище браузера, чтобы они сохранялись после перезагрузки страницы.
const articlesData = [
        {
        title: 'Заголовок статьи 1',
        content: 'Содержание статьи 1'
        },
        {
        title: 'Заголовок статьи 2',
        content: 'Содержание статьи 2'
        }
    ];

const content = document.querySelector('.content');
const btnAdd = document.querySelector('.btnAdd')

window.addEventListener('load', showContent)

function showContent() {
    for (const item of articlesData) {
        content.insertAdjacentHTML('beforeend', `<div class="article"><h3>${item.title}</h3><p>${item.content}</p><button class = "btnDel">Удалить</button><button class = "btnChange">Редактировать</button></div>`)
    }
}

btnAdd.addEventListener('click', ()=>{
    const newArticle = {
        title: 'Новая статья',
        content: 'Текст новой статьи'
    }

    content.insertAdjacentHTML('beforeend', `<div class="article"><h3>${newArticle.title}</h3><p>${newArticle.content}</p><button class = "btnDel">Удалить</button><button class = "btnChange">Редактировать</button></div>`)
    articlesData.push(newArticle)
})

