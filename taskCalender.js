const trigger = document.querySelector(".inline-todo");


$(trigger).flatpickr({ 
                
    mode: "range",
    enableTime: true,
    dateFormat: "F, d Y H:i"
    
    });