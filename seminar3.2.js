// Зарегистрируйтесь на Unsplash:
// Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
// Войдите в свой аккаунт Unsplash.
// Создайте приложение:
// После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// Нажмите "New Application" (Новое приложение).
// Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете использовать http://localhost для тестового сайта).
// После заполнения информации, нажмите "Create Application" (Создать приложение).

// Получите API-ключ:
// После создания приложения, вы получите API-ключ. Этот ключ будет отображаться в вашей панели управления приложением.
//Jza7jONFJNfQYtgUkxR-0OAXYnQ4ERyThQw3e69Bwyg


const photoContainer = document.getElementById("photo-container");
let page = 1;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=Jza7jONFJNfQYtgUkxR-0OAXYnQ4ERyThQw3e69Bwyg`
    );
    const photos = await response.json();
    
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}


async function loadMorePhotos() {
    page++
    const photos = await fetchPhotos();
    if (photos.length > 0) {
    photos.forEach(photo => {
    console.log(photo);
    photoContainer.innerHTML += `<div class = 'img-box'><div class = 'photo'><img src = ${photo.src = photo.urls.small}></img></div><div class = 'autor'><h3>Автор: </h3><p>${photo.user.name}</p></div><svg class = 'img-svg' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></div>`
    })
    const likeSvg = document.querySelectorAll('.img-svg');
    console.log(likeSvg);
    likeSvg.forEach(item => {
        item.addEventListener('click', (e) => {
            item.classList.toggle('img-svg-like')
        })
    })
    }
}
window.addEventListener('scroll', () => {
    //создание бесконечной прокрутки
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
loadMorePhotos();
}
});

// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();

