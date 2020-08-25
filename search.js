const search = document.querySelector(".js-search");
const searchInput = search.querySelector("input");
const icon = document.querySelector(".search-icon");
search.classList.add('hide');
var check = 0;

function goNaver()
{
   check = 1;
}

function goDaum()
{
    check = 2;
}


icon.addEventListener('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    search.classList.remove('hide');
    icon.classList.add('hide');
});

search.addEventListener('click', function(e){
    e.stopPropagation();
});

search.addEventListener('submit', function(e){
    e.stopPropagation();
    e.preventDefault();

    window.location.href = `https://www.google.com/search?q=${searchInput.value}`;

    if(check == 1)
    {
        window.location.href = `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${searchInput.value}`;
    }
    else if(check == 2)
    {
        window.location.href = `https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=${searchInput.value}`;
    }
    
    searchInput.value = '';
    return false;
});

document.addEventListener('click', function(e){
    search.classList.add('hide');
    icon.classList.remove('hide');
});