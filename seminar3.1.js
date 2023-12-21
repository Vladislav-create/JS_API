const productsData = [
        {
        id: 1,
        name: "Ноутбук",
        category: "Электроника",
        },
        {
        id: 2,
        name: "Смартфон",
        category: "Электроника",
        },
        {
        id: 3,
        name: "Кофемашина",
        category: "Бытовая техника",
        },
        {
        id: 4,
        name: "Фотокамера",
        category: "Электроника",
        },
        {
        id: 5,
        name: "Микроволновая печь",
        category: "Бытовая техника",
        },
        {
        id: 6,
        name: "Книга",
        category: "Книги",
        },
        {
        id: 7,
        name: "Футболка",
        category: "Одежда",
        },
        {
        id: 8,
        name: "Шапка",
        category: "Одежда",
        },
        {
        id: 9,
        name: "Стул",
        category: "Мебель",
        },
        {
        id: 10,
        name: "Стол",
        category: "Мебель",
        },
    ];
    const boxContent = document.getElementById('products-list');
    const categorySelect = document.getElementById('category-select');
    productsData.forEach(item => {
            boxContent.innerHTML += `<li>${item.name}</li>`
    })
    categorySelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.value;
    displayProducts(selectedCategory);
    });

    function displayProducts(category) {
        boxContent.textContent = ''
        if (category === '') {
            productsData.forEach(item => {
                    boxContent.innerHTML += `<li>${item.name}</li>`
            })
        } else {
            productsData.forEach(item => {
                if (item.category == category) {
                    boxContent.innerHTML += `<li>${item.name}</li>`
                }
            })
        }

    }
    