const getQuoteButton = document.querySelector("#get-quote-button");
const quote = document.querySelector(".quote__text");
const author = document.querySelector(".author__name");

getQuoteButton.addEventListener("click", function() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random/")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                alert("da ist was schiefgelaufen");
            }
        })

    .then((data) => {
        quote.textContent = data.data[0].quoteText;
        author.textContent = data.data[0].quoteAuthor;
    });
});