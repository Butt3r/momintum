const setting = document.querySelector(".js-setting"),
      modal = document.querySelector(".js-modal"),
      closeBtn = document.querySelector(".close-btn"),
      searchIcon = document.querySelector(".search-icon"),
      weatherCon = document.querySelector(".weather-container"),
      inTodo = document.querySelector(".todo-trigger"),
      Myinfo =  document.querySelector(".info"),
      Myquote = document.querySelector(".quote-container"),
      greet = document.querySelector(".js-greetings");


function Toggle()
{
modal.classList.toggle("show-modal");
}
      
setting.addEventListener('click', function(e)
{
  searchIcon.classList.add('hidden');
  weatherCon.classList.add('hidden');
  inTodo.classList.add('hidden');
  Myquote.classList.add('hidden');
  greet.classList.add('hidden');
  Myinfo.classList.add('visible');
  Myinfo.classList.add('infoMove');
  Toggle();
});

closeBtn.addEventListener('click',function(e)
{
  searchIcon.classList.remove('hidden');
  weatherCon.classList.remove('hidden');
  inTodo.classList.remove('hidden');
  Myquote.classList.remove('hidden');
  greet.classList.remove('hidden');
  Myinfo.classList.remove('visible');
  Myinfo.classList.remove('infoMove');
  if(e.target === modal) Toggle();
});
