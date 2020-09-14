const quoteContainer = document.querySelector(".quote-container"),
      quoteContent = quoteContainer.querySelector(".js-quote"),
      quoteSrc = quoteContainer.querySelector(".src");


const url = 'https://api.quotable.io/random?maxLength=95';


function getQuote()
{
    fetch(url)
    .then(function(response)
    {
        return response.json();
    })
     .then(data => {
        console.log(`${data.content} -${data.author}`);
        quoteContent.innerHTML = data.content;
        quoteSrc.innerHTML =data.author;
     })
     .catch(function(err)
     {
         console.log(err);
         
     })
}


function init()
{
    getQuote();
}

init();