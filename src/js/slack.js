const dueDateInput = document.querySelector("#due-date"),
      todoInput = document.querySelector("#inline-input"),
      slackCon = document.querySelector(".slack-Container");


const Slackurl = 'https://hooks.slack.com/services/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'
const user = localStorage.getItem("currentUser");

function submitHandler()
{
    var dueDate = dueDateInput.value;
    var toDo = todoInput.value;

    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", Slackurl, true);

    xhr.onreadystatechange = function()
    {
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200)
        {
            console.log("request done");
            console.log(user);
            
            
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
                        "text": `*dueDate *\n ${dueDate} \n\n *todo *\n ${toDo} \n`
                    }
                ]
            },
            {
                "type": "context",
                "elements": [
                    {
                        "type": "plain_text",
                        "text": `sent by ${user}`,
                        "emoji": true
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
    