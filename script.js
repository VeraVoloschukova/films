document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const img = document.getElementById("img").value;
    const genre = document.getElementById("genre").value;
    const rating = document.getElementById("rating").value;
    const link = document.getElementById("link").value;

    if (name && img && genre && rating && link) {
        const list = document.getElementById("list");
        const card = document.createElement("div");
        const infocard = {
            name: name,
            img: img,
            genre: genre,
            rating: rating,
            link: link,
        };

        card.innerHTML = `
            <h4>${name}</h4>
            <img src="${img}" alt="Image">
            <a href="${link}" target="_blank">перейти</a>
            <p>жанр: ${genre}</p>
            <p>оценка: ${rating}</p>
            <button class="del">Удалить</button>
        `;

        saveLS(infocard);

        card.querySelector(".del").addEventListener("click", function() {
            const confirmation = confirm("Вы действительно хотите удалить?");
            if (confirmation) {
                card.remove();
                delLS(infocard);
            }
        });

        list.appendChild(card);
    }
});

function saveLS(card) {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.unshift(card);
    localStorage.setItem("cards", JSON.stringify(cards));
}

function delLS(carddel) {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards = cards.filter(card => card.name !== carddel.name);
    localStorage.setItem("cards", JSON.stringify(cards));
}

document.addEventListener("DOMContentLoaded", loadLS);

function loadLS() {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    const list = document.getElementById("list");
    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.innerHTML = `
            <h4>${card.name}</h4>
            <img src="${card.img}" alt="Image">
            <a href="${card.link}" target="_blank">перейти</a>
            <p>жанр: ${card.genre}</p>
            <p>оценка: ${card.rating}</p>
            <button class="del">Удалить</button>
        `;

        cardElement.querySelector(".del").addEventListener("click", function() {
            const confirmation = confirm("Вы действительно хотите удалить?");
            if (confirmation) {
                cardElement.remove();
                delLS(card);
            }
        });

        list.appendChild(cardElement);
    });
}
