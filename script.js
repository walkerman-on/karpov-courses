import data from "./data.json" assert {type: 'json'};

const mainNews = data.items.slice(0,3)
const smallNews = data.items.slice(3, 12)

const mainNewsContainer = document.querySelector('.articles__big-column')
const smallNewsContainer = document.querySelector('.articles__small-column')

const escapeString = (item) => {
    const symbols = {
        "&": "&amp;",
        "<": "&lt",
        ">": "&gt",
    };

    return item.replace(/[&<>]/g, (tag) => {
        return symbols[tag] || tag;
    })
}


mainNews.forEach((item) => {
    const template = document.createElement("template");

    const category = data.categories.find( (categoryItem) => categoryItem.id === item.category_id);
    const source = data.sources.find( (categoryItem) => categoryItem.id === item.source_id);
    const image = item.image;
    const title = item.title;
    const articleText = item.description;

    template.innerHTML = `
        <article class="main-article">
            <div class="main-article__image-container">
                <img src="${encodeURI(image)}" alt="Обложка статьи" class="main-article__image">
            </div>
            <div class="main-article__content">
                <span class="main-article__category">${escapeString(category.name)}</span>
                <h2 class="main-article__title">${escapeString(title)}</h2>
                <p class="main-article__text">${escapeString(articleText)}</p>
                <span class="article-source main-article__source">${escapeString(source.name)}</span>
            </div>
        </article>
        `

    mainNewsContainer.appendChild(template.content)
})

smallNews.forEach((item) => {
    const template = document.createElement("template");

    const category = data.categories.find( (categoryItem) => categoryItem.id === item.category_id);
    const source = data.sources.find( (categoryItem) => categoryItem.id === item.source_id);
    const image = item.image;
    const title = item.title;
    const articleText = item.description;
    const date = new Date (item.date).toLocaleDateString('ru-RU', {month: "long", day: "numeric"})

    template.innerHTML = `
        <article class="small-article">
            <h2 class="small-article__title">${escapeString(title)}</h2>
            <span class="article-date small-article__date">${date}</span>
            <span class="article-source small-article__source">${escapeString(source.name)}</span>
        </article>
        `

    smallNewsContainer.appendChild(template.content)
})




