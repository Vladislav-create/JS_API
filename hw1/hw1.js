// Статическая веб-страница с динамическими элементами:

// Создайте HTML-страницу с заголовком "Расписание занятий".

//     Таблица с информацией о занятиях:

// Используйте JavaScript для динамического создания таблицы на основе JSON-данных.
// Каждая строка таблицы должна содержать информацию о занятии: название, время проведения, максимальное и текущее количество участников.
// 3. Кнопки "Записаться" и "Отменить запись":
// Рядом с каждым занятием добавьте кнопку "Записаться".
// Если максимальное количество участников достигнуто, сделайте кнопку неактивной.
// Предусмотрите кнопку "Отменить запись", которая появляется после записи на занятие.

// 4. Интерактивность с JavaScript:
// При нажатии на кнопку "Записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "Отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// 5. Дополнительно: Хранение данных в Local Storage:
// Сохраняйте изменения в Local Storage, чтобы они сохранялись при перезагрузке страницы.

// json

window.addEventListener('load', showContent)
const lessons = [
  {
    id: 1,
    name: "Йога",
    time: "10:00 - 11:00",
    maxParticipants: 15,
    currentParticipants: 8,
  },
  {
    id: 2,
    name: "Пилатес",
    time: "11:30 - 12:30",
    maxParticipants: 10,
    currentParticipants: 5,
  },
  {
    id: 3,
    name: "Кроссфит",
    time: "13:00 - 14:00",
    maxParticipants: 20,
    currentParticipants: 15,
  },
  {
    id: 4,
    name: "Танцы",
    time: "14:30 - 15:30",
    maxParticipants: 12,
    currentParticipants: 10,
  },
  {
    id: 5,
    name: "Бокс",
    time: "16:00 - 17:00",
    maxParticipants: 8,
    currentParticipants: 6,
  },
];

const blockContent = document.querySelector('.content');


function showContent() {
    let elem = ''
    for (const lesson of lessons) {
        elem += `<div class = "lesson"><h3>${lesson.name}</h3>
                    <p>${lesson.time}</p>
                    <p>Max Participants: ${lesson.maxParticipants}</p>
                    <p>Current Participants: ${lesson.currentParticipants}</p>
                    <button value = ${lesson.name} id = ${lesson.id} class = "recording">Записаться</button>
                    <button id = "${lesson.name}" class = "cancelRecording">Отменить запись</button>
                </div>`
        blockContent.innerHTML = elem
    }

    const btnAdd = document.querySelectorAll('.recording');
    btnAdd.forEach(item=> {
        item.addEventListener('click', addOnLesson)
    })

    const btnCancel = document.querySelectorAll('.cancelRecording');
    btnCancel.forEach(item => {
        item.addEventListener('click', cancelOnLesson)

        item.classList.toggle('hidden')
    })
}


function addOnLesson(event) {
    let value = event.target.value
    let id = event.target.id
    for (const item of lessons) {
        if (item.id == id) {
            item.currentParticipants++
        }
    }
    showContent()
   
    document.getElementById(value).classList.toggle('hidden')
}

function cancelOnLesson(event) {
    let id = event.target.id
    console.log(id);
    for (const item of lessons) {
        if (item.name == id) {
            item.currentParticipants--
            console.log(item.currentParticipants);
        }
    }
    showContent()
}
