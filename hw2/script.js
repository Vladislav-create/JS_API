const data = [
  "https://arte1.ru/images/detailed/4/23337.jpg",
  "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666389850_35-mykaleidoscope-ru-p-klassnaya-priroda-oboi-37.jpg",

  "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666361530_29-mykaleidoscope-ru-p-peizazhi-prirodi-krasivo-32.jpg",

  "http://vsegda-pomnim.com/uploads/posts/2022-04/1649112673_52-vsegda-pomnim-com-p-chudesnii-mir-prirodi-foto-55.jpg",
  "https://gas-kvas.com/uploads/posts/2023-02/1675476102_gas-kvas-com-p-fonovii-risunok-priroda-rossii-4.jpg",
];

const btnBack = document.querySelector(".btnBack");
const btnNext = document.querySelector(".btnNext");
const boxContent = document.querySelector(".container__img");
const btnsPoint = document.querySelector('.btnsPoint');

let indexImg = 0;

btnBack.addEventListener("click", () => {
  if (indexImg == 0) {
    indexImg = data.length - 1;
    showImg(indexImg);
  } else {
    indexImg--;
    showImg(indexImg);
  }
});

btnNext.addEventListener("click", () => {
  indexImg++;
  showImg(indexImg);
  if (indexImg == data.length - 1) {
    indexImg = 0;
    showImg(indexImg);
  }
});

function showImg(index) {
  boxContent.innerHTML = `<img class="img__size" src=${data[index]} alt="">`;
}

showImg(indexImg);

for (const item in data) {
    btnsPoint.innerHTML += `<button class = "btnsNav" value = ${item}>*</button>`
    console.log(item);
}

const btnsNav = document.querySelectorAll('.btnsNav');
btnsNav.forEach(btn => {
    btn.addEventListener('click', (e) => {
        showImg(e.target.value)
    })
})