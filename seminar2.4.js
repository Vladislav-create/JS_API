// Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность для этого опросника, используя HTML, CSS и JavaScript.
// Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен иметь несколько вариантов ответов.
// Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
// Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
// При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все вопросы, и отобразить выбранные им варианты ответов.
// Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить на все вопросы перед завершением опроса.
// По желанию можно добавить стилизацию опросника с использованием CSS для лучшего пользовательского опыта.

const submitBtn = document.getElementById('submit')
const result = document.querySelector('.result');
const resultQ1 = document.getElementById('result-q1')
const resultQ2 = document.getElementById('result-q2')
let q1 = ''
let q2 = ''
const allInputElem = document.querySelectorAll('.inputElem')

allInputElem.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.name == 'q1') {
            q1 = e.target.value
        } else if (e.target.name == 'q2') {
            q2 = e.target.value
        }
    })
});

submitBtn.addEventListener('click', () => {
    result.style.display = 'block'
    resultQ1.textContent = `Вопрос 1: ${q1}`
    resultQ2.textContent = `Вопрос 2: ${q2}`
})

