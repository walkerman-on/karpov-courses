import data from "./data.json" assert {type: 'json'};

const mainNews = data.items.slice(0,3)
const smallNews = data.items.slice(3, 12)

// ищем шаблоны новостей <template>
const mainNewsTemplate = document.getElementById("main-news-item")
const smallNewsTemplate = document.getElementById("small-news-item")

// ищем куда вставить шаблоны
const mainNewsContainer = document.querySelector('.articles__big-column')
const smallNewsContainer = document.querySelector('.articles__small-column')

// выводим новости - не очень хорошо, т.к. можем только один раз использовать
// mainNewsContainer.appendChild(mainNewsTemplate.content) 
// smallNewsContainer.appendChild(smallNewsTemplate.content)

// выводим новости через цикл 
mainNews.forEach ( item => {
    const element = mainNewsTemplate.content.cloneNode(true);
    const category = data.categories.find( (categoryItem) => categoryItem.id === item.category_id);
    const source = data.sources.find( (categoryItem) => categoryItem.id === item.source_id);

    element.querySelector(".main-article__title").textContent = item.title;
    element.querySelector(".main-article__text").textContent = item.description;
    element.querySelector(".main-article__image").src = item.image;
    element.querySelector(".main-article__category").textContent = category.name;
    element.querySelector(".main-article__source").textContent = source.name;

    mainNewsContainer.appendChild(element);
});

smallNews.forEach ( item => {
    const element = smallNewsTemplate.content.cloneNode(true);
    const source = data.sources.find( (categoryItem) => categoryItem.id === item.source_id);
    const date = new Date(item.date).toLocaleDateString('ru-RU', {month: "long", day: "numeric"})

    element.querySelector(".small-article__title").textContent = item.title;
    element.querySelector(".small-article__source").textContent = source.name;
    element.querySelector(".small-article__date").textContent = date;

    smallNewsContainer.appendChild(element);
});
