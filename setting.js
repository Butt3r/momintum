const setting = document.querySelector(".js-setting");
const modal = document.querySelector(".js-modal");
const closeBtn = document.querySelector(".close-btn");
const searchIcon = document.querySelector(".search-icon");
const weatherCon = document.querySelector(".weather-container");


function Toggle()
{
modal.classList.toggle("show-modal");
}
      
setting.addEventListener('click', function(e)
{
  searchIcon.classList.add('hidden');
  weatherCon.classList.add('hidden');
  Toggle();
});

closeBtn.addEventListener('click',function(e)
{
  searchIcon.classList.remove('hidden');
  weatherCon.classList.remove('hidden');
  if(e.target === modal) Toggle();
});
