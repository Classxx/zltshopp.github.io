// Массив игр
const games = [
    { title: "Call of Duty: Mobile", alternateTitle: "Калл оф Дьюти Мобайл", abbreviation: "CoDm", url: "call_of_duty_mobile.html" },
    { title: "Call of Duty: Warzone", alternateTitle: "Варзон", abbreviation: "CoDwarzone", url: "products.html?game=Call%20of%20Duty%20Warzone" },
    { title: "League of Legends: Wild Rift", alternateTitle: "лига легенд вайлдрифт", abbreviation: "лол вр" },
    { title: "FC Mobile", alternateTitle: "фифа мобайл", abbreviation: "fc" },
    { title: "Diablo: Immortal", alternateTitle: "диабло иммортал", abbreviation: "диабло" },
    { title: "Discord", alternateTitle: "дискорд", abbreviation: "дс" },
    { title: "PUBG: Mobile", alternateTitle: "пабг мобайл", abbreviation: "пабг" },
    { title: "Albion", alternateTitle: "альбион", abbreviation: "альбион" },
    { title: "Tarisland", alternateTitle: "тарисленд", abbreviation: "тарис ленд" },
    { title: "WOT: Blitz (Wargaming)", alternateTitle: "танки блитз", abbreviation: "вот блитз" },
    { title: "Legends of Runeterra", alternateTitle: "легенда рунетерры", abbreviation: "лор" },
    { title: "Team Fight Tactics", alternateTitle: "тим файт тактикс", abbreviation: "тфт" },
    { title: "Clash Royale", alternateTitle: "клеш рояль", abbreviation: "клэш рояль" },
    { title: "Brawl Stars", alternateTitle: "бравл старс", abbreviation: "бравл старс" },
    { title: "Clash of Clans", alternateTitle: "клеш оф кленс", abbreviation: "клэш оф кленс" },
    { title: "Fortnite", alternateTitle: "фортнайт", abbreviation: "фн" },
    { title: "Dead by Daylight: Mobile", alternateTitle: "дед бай дейлайт", abbreviation: "дбд" },
];

// Константа для товаров
const gameProducts = {
    "Call of Duty": [
        { name: "80 CP", price: "350 руб", url: "#", img: "/pics/codm/80cp.jpg" },
        { name: "420 CP", price: "1000 руб", url: "#", img: "/pics/codm/420cp.jpg" },
        { name: "880 CP", price: "1400 руб", url: "#", img: "/pics/codm/880cp.jpg" },
        { name: "2400 CP", price: "3000 руб", url: "#", img: "/pics/codm/2400cp.jpg" },
        { name: "5000 CP", price: "5450 руб", url: "#", img: "/pics/codm/5000cp.jpg" },
        { name: "10800 CP", price: "9300 руб", url: "#", img: "/pics/codm/10800cp.jpg" },
    ],
    "Call of Duty Warzone": [
        { name: "Battle Pass", price: "1000 руб", url: "#", img: "/pics/warzone/jpg" },
        { name: "Double XP Token", price: "300 руб", url: "#", img: "image8.jpg" },
    ],
};

// Селекторы
const searchInput = document.getElementById('searchInput');
const gameList = document.getElementById('gameList');
const themeToggleButton = document.getElementById('themeToggle');
const languageButton = document.getElementById('languageButton');

// Установка сохраненного языка и темы
let currentLanguage = localStorage.getItem('language') || 'ru'; // По умолчанию русский
let isDarkTheme = localStorage.getItem('theme') === 'dark'; // Получаем сохраненную тему

// Применяем сохраненные настройки
if (isDarkTheme) {
    document.body.classList.add('dark');
}

// Поиск игр
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(searchTerm) ||
        game.alternateTitle.toLowerCase().includes(searchTerm) ||
        game.abbreviation.toLowerCase().includes(searchTerm)
    );

    displayGames(filteredGames);
});

// Функция для отображения игр
function displayGames(games) {
    gameList.innerHTML = ''; // Очищаем список перед добавлением

    games.forEach(game => {
        const listItem = document.createElement('li');
        const link = document.createElement('a'); // Создаем элемент ссылки

        link.href = game.url || '#'; // Устанавливаем URL, если он есть
        link.textContent = game.title; // Текст ссылки - заголовок игры
        link.target = "_blank"; // Открываем ссылку в новой вкладке
        link.className = 'game-link'; // Добавляем класс для стилизации

        // Убираем фокус после клика
        link.addEventListener('click', () => {
            link.blur(); // Убираем фокус с ссылки
        });

        listItem.appendChild(link); // Добавляем ссылку в элемент списка
        gameList.appendChild(listItem); // Добавляем элемент списка в ul
    });
}

// Изначально отображаем все игры
displayGames(games);

// Переключение темы
themeToggleButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark', isDarkTheme);
    // Сохранение темы в localStorage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Переключение языка
languageButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru'; // Переключаем язык
    localStorage.setItem('language', currentLanguage); // Сохраняем язык
    updateTitles(); // Обновляем заголовки
});

// Функция для обновления заголовков
function updateTitles() {
    const titles = {
        ru: {
            mainMenu: 'Главное меню',
            cart: 'Корзина',
            faq: 'FAQ',
            toggleTheme: 'Переключить тему',
        },
        en: {
            mainMenu: 'Main Menu',
            cart: 'Cart',
            faq: 'FAQ',
            toggleTheme: 'Toggle Theme',
        }
    };

    document.querySelector('.menu-button:nth-child(1)').textContent = titles[currentLanguage].mainMenu;
    document.querySelector('.menu-button:nth-child(2)').textContent = titles[currentLanguage].cart;
    document.querySelector('.menu-button:nth-child(3)').textContent = titles[currentLanguage].faq;
    languageButton.textContent = currentLanguage === 'ru' ? '🌍' : '🌎'; // Меняем иконку
}

// Устанавливаем заголовки при загрузке
updateTitles();