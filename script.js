document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const img = document.getElementById("img").value;
    const genre = document.getElementById("genre").value;
    const raiting = document.getElementById("raiting").value;
    const link = document.getElementById("link").value;

    if(name&&img&&genre&&raiting&&link) {
        const list = document.getElementById("list")
        const card = document.createElement("div")
        card.innerHTML =  `
        <H4>${name}</H4>
        <img src="${img}" >
        <a href="${list}">перейти</a>
        <P>жанр: ${genre}</P>
        <P>оценка: ${raiting} </P>
        <button class="del">Удалить</button>
        `
        list.appendChild(card)
    }
})