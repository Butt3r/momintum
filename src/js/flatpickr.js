const trigger = document.querySelector(".todo-trigger"), 
      footer = document.querySelector(".footer-input"),
      todoContainer = document.querySelector(".todo-container"),
      listContainer = document.querySelector(".list-container"),
      slackContainer = document.querySelector(".slack-Container"),
      todoButton = document.querySelector(".todo-btn"),
      dateInput = document.querySelector("#due-date");
      
     
      trigger.addEventListener('click', function(e)
      {
         e.stopPropagation();
         e.preventDefault();
         todoContainer.classList.toggle('show-modal');
         
      });
      
      todoButton.addEventListener('click', printForm);
      dateInput.addEventListener('click', prevent);
      slackContainer.addEventListener('click', prevent);
      
      function printForm(e)
      {
         e.stopPropagation();
         const empty = document.querySelector(".is-empty");
         empty.classList.add('hidden');
         dateInput.classList.remove('hide');
         footer.classList.add('show-modal');
         console.log("click");
         
      }
      
      function prevent(e)
      {
         e.stopPropagation();
      }
   

      document.addEventListener('click', function(e){
         const empty = document.querySelector(".is-empty");
         empty.classList.remove('hidden');
         dateInput.classList.add('hide');
         footer.classList.remove('show-modal');
     });
   
      $(dateInput).flatpickr({ 
                      
          mode: "range",
         //  enableTime: true,
          dateFormat: "Y-m-d"
         
      });





    