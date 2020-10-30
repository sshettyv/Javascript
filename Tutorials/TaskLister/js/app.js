//listen to submit 
const form=document.querySelector('.task-input');
const task=document.querySelector('#task');
const taskList=document.querySelector('.list-collection')

form.addEventListener('submit', addToList);


function addToList(e){

    let taskNo=0;
    if (task.value===""){
        alert("must have a task");
        }
    else{
// create text and add it to li
// const li=document.createElement('li');

// li.appendChild(document.createTextNode(task.value));

//append it to ul
//taskList.appendChild(li);


// creating checkbox and label element 
const checkbox = document.createElement('input');
const cbLabel= document.createElement('label');
const br= document.createElement("br")
              
// Assigning the attributes 
// to created checkbox 
checkbox.type = "checkbox"; 
checkbox.name = "name"; 
checkbox.value = task.value; 
checkbox.id = taskNo; 

cbLabel.htmlFor=taskNo;
cbLabel.appendChild(document.createTextNode(task.value));
cbLabel.appendChild(br);
taskList.appendChild(checkbox);
taskList.appendChild(cbLabel);
task.value="";


}

e.preventDefault();
}