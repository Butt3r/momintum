const setting = document.querySelector(".js-setting"),
      modal = document.querySelector(".js-modal"),
      closeBtn = document.querySelector(".close-btn"),
      searchIcon = document.querySelector(".search-icon"),
      weatherCon = document.querySelector(".weather-container"),
      inTodo = document.querySelector(".todo-trigger"),
      Myinfo =  document.querySelector(".info");


function Toggle()
{
modal.classList.toggle("show-modal");
}
      
setting.addEventListener('click', function(e)
{
  searchIcon.classList.add('hidden');
  weatherCon.classList.add('hidden');
  inTodo.classList.add('hidden');
  Myinfo.classList.add('infoMove');
  Toggle();
});

closeBtn.addEventListener('click',function(e)
{
  searchIcon.classList.remove('hidden');
  weatherCon.classList.remove('hidden');
  inTodo.classList.remove('hidden');
  Myinfo.classList.remove('infoMove');
  if(e.target === modal) Toggle();
});
