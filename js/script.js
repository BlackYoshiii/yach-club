let themeButtonDark = document.querySelector('.theme-button-dark'
);
let themeButtonLight = document.querySelector('.theme-button-light');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

// Переключение темы
themeButtonDark.onclick = function () {
    themeButtonLight.classList.remove('active');
    themeButtonDark.classList.add('active');
    document.body.classList.add('dark');
};

themeButtonLight.onclick = function () {
    themeButtonLight.classList.add('active');
    themeButtonDark.classList.remove('active');
    document.body.classList.remove('dark');
};
// Переключение засечек
serifButton.onclick = function () {
    sansSerifButton.classList.remove ('active');
    serifButton.classList.add('active');
    document.body.classList.add('serif');
};

sansSerifButton.onclick = function () {
    sansSerifButton.classList.add ('active');
    serifButton.classList.remove('active');
    document.body.classList.remove('serif');
};
// Раскрытие статьи
let blogArticles = document.querySelectorAll('.blog-article');

for (let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function () {
        blogArticle.classList.remove('short');
    };
};

// Переключение карточек Плитка - Список
let cardButtonGrid = document.querySelector('.card-view-button-grid');
let cardButtonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

cardButtonList.onclick = function () {
    cardButtonList.classList.add('active');
    cardButtonGrid.classList.remove('active');
    cards.classList.add('list');
};

cardButtonGrid.onclick = function () {
    cardButtonList.classList.remove('active');
    cardButtonGrid.classList.add('active');
    cards.classList.remove('list');
};

// Переключение активного фото в Галерее
let activePhoto = document.querySelector ('.active-photo');
let previews = document.querySelectorAll ('.preview-list a')

for (let preview of previews) {
    preview.onclick = function (evt) {
        evt.preventDefault(); 
        activePhoto.src = preview.href;
        
        let activePreview = document.querySelector('.preview-list .active-item');
        activePreview.classList.remove('active-item');
        preview.classList.add('active-item');
};
};