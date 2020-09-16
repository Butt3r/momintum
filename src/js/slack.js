const dueDateInput = document.querySelector("#due-date"),
      todoInput = document.querySelector("#inline-input"),
      slackCon = document.querySelector(".slack-Container");


function submitHandler()
{
    var dueDate = dueDateInput.value;
    var toDo = todoInput.value;
    var link = 'https://hooks.slack.com/services/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';

    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", link, true);

    xhr.onreadystatechange = function()
    {
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200)
        {
            console.log("request done");
            
        }

    }

   
    var payload = {

        "text": "todo list",
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": "Todays ToDo :sparkles:"
                }
            },
            {
                "type": "section",
                "block_id": "section123",
                "fields": [
                    {
                        "type": "mrkdwn",
                        "text": "*dueDate *\n" + dueDate + "\n\n" + "*todo *\n" + toDo + "\n"
                    }
                ]
            },
            {
                "type": "divider"
            },
        ]
    };
    if(dueDate != "" && toDo != ""){
    xhr.send(JSON.stringify(payload));  
    }

}
    