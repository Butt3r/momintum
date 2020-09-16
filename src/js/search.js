// 테스트용 코드라 엄청 더러움..! 나중에 다시 리팩토링 필수!


const search = document.querySelector(".js-search"),
      searchInput = search.querySelector("input"),
      icon = document.querySelector(".search-icon"),
      goggle = document.querySelector("#g"),
      naver = document.querySelector("#n"),
      daum = document.querySelector("#d");


let gMode = localStorage.getItem("gMode");
let nMode = localStorage.getItem("nMode");
let dMode = localStorage.getItem("dMode");

search.classList.add('hide');


function goGoogle()
{
    goggle.classList.add('colored');
    naver.classList.remove('colored');
    daum.classList.remove('colored');
    localStorage.setItem("gMode", "enabled");
    localStorage.setItem("nMode", null);
    localStorage.setItem("dMode", null);
   
}

function goNaver()
{
    naver.classList.add('colored');
    goggle.classList.remove('colored');
    daum.classList.remove('colored');
    localStorage.setItem("nMode", "enabled");
    localStorage.setItem("gMode", null);
    localStorage.setItem("dMode", null);
   
}

function goDaum()
{
    daum.classList.add('colored');
    goggle.classList.remove('colored');
    naver.classList.remove('colored');
    localStorage.setItem("dMode", "enabled");
    localStorage.setItem("gMode", null);
    localStorage.setItem("nMode", null);
   
    
}

function setDefault()
{
   
    goggle.classList.add('colored');
    localStorage.setItem("gMode", "enabled");
         
    if(dMode === 'enabled' || nMode === 'enabled')
    {
        goggle.classList.remove('colored');
        localStorage.setItem("gMode", null); 
    }

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
    e.preventDefault();

    gMode = localStorage.getItem("gMode");
    dMode = localStorage.getItem("dMode");
    nMode = localStorage.getItem("nMode");

    window.location.href = `https://www.google.com/search?q=${searchInput.value}`;
    
    if(dMode !== 'enabled' && gMode !=='enabled')
    { 
        window.location.href = `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${searchInput.value}`;
    }
    else if(nMode !== 'enabled' && gMode !=='enabled')
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


function paintColored()
{
    if(gMode === 'enabled')
    {
        goggle.classList.add('colored');
    }
    else if(nMode === 'enabled')
    {
        naver.classList.add('colored');
    }
    else if(dMode === 'enabled')
    {
        daum.classList.add('colored');
    }
}


function init()
{
    setDefault();
    paintColored();
}

init();