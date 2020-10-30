//listen to submit 
const form=document.querySelector('.task-input');
const task=document.querySelector('#task');
const taskList=document.querySelector('.list-collection')

form.addEventListener('submit', addToList);


function addToList(e){
    if (task.value===""){
        alert("must have a task");
        }
    else{
// create text and add it to li
const li=document.createElement('li');
li.appendChild(document.createTextNode(task.value));

//append it to ul
taskList.appendChild(li);
task.value="";
}

e.preventDefault();
}