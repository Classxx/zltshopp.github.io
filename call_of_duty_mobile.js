const gameProducts = {
    "Call of Duty": [
        { name: "80 CP", price: "350 руб", url: "#", imageUrl: "path/to/image1.jpg" },
        { name: "420 CP", price: "1000 руб", url: "#", imageUrl: "path/to/image2.jpg" },
        { name: "880 CP", price: "1400 руб", url: "#", imageUrl: "path/to/image3.jpg" },
        { name: "2400 CP", price: "3000 руб", url: "#", imageUrl: "path/to/image4.jpg" },
        { name: "5000 CP", price: "5450 руб", url: "#", imageUrl: "path/to/image5.jpg" },
        { name: "10800 CP", price: "9300 руб", url: "#", imageUrl: "path/to/image6.jpg" },
    ],
};

const urlParams = new URLSearchParams(window.location.search);
const gameTitle = urlParams.get('game'); // Получаем название игры из параметров URL
const productList = document.getElementById('productList');

// Функция для отображения товаров
function displayProducts() {
    const products = gameProducts[gameTitle] || [];
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        const productLink = document.createElement('a');
        productLink.href = product.url;
        productLink.target = '_blank'; // Открываем ссылку в новой вкладке

        // Создаем изображение товара
        const productImage = document.createElement('img');
        productImage.src = product.imageUrl; // Устанавливаем изображение
        productImage.alt = product.name; // Альтернативный текст для изображения

        productLink.appendChild(productImage); // Добавляем изображение в ссылку
        productLink.appendChild(document.createTextNode(`${product.name} - ${product.price}`)); // Добавляем текст к ссылке

        productItem.appendChild(productLink); // Добавляем ссылку в элемент товара
        productList.appendChild(productItem); // Добавляем элемент товара в список
    });
}

// Инициализация при загрузке
displayProducts();

let isDarkTheme = false;

const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark', isDarkTheme);
});

// Переключение языка
let currentLanguage = 'ru'; // По умолчанию русский

const titles = {
    ru: {
        title: 'Товары для Call of Duty',
    },
    en: {
        title: 'Products for Call of Duty',
    }
};

const languageButton = document.getElementById('languageButton');
languageButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru'; // Переключаем язык
    updateTitles(); // Обновляем заголовки
});

// Функция для обновления заголовков
function updateTitles() {
    document.title = titles[currentLanguage].title;
}

// Инициализация заголовков при загрузке
updateTitles();