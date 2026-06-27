const inputtext = document.getElementById("input-text");
const tasklist = document.getElementById("task-list");

function addtask(){
    if(inputtext.value === '')
    {
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputtext.value;
        tasklist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputtext.value = "";
    saveData();
}

tasklist.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() 
{
    localStorage.setItem("data", tasklist.innerHTML);
}

function showTask()
{
    tasklist.innerHTML = localStorage.getItem("data");
}

showTask();