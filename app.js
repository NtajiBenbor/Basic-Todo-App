// Virable initialization and declaration
const form = document.querySelector('form')
const taskContainer = document.querySelector('.task-list-container')
const userInput = document.querySelector('#userInput')
const numOfTasksDisplay = document.querySelector('#numoftask')
const numOfFinishedTaskDisplay = document.querySelector('#num-of-fin-task')
const doneTaskContainer = document.querySelector('#Acc-task-cont')
const resetButton= document.querySelector("#resetBtn");

let numOfTasks = 0;
let numOfFinishedTask = 0;


// event listener for form submission
form.addEventListener('submit',(e)=>{
   e.preventDefault();
   numOfTasks += 1;
   numOfTasksDisplay.textContent = numOfTasks;
   const formData = userInput.value;
  
  /*  this conditional checks if the value of userInput.value is not an empty string. 
  if this evaluates to true(the user does not input an empty sting), then the code inside
   will execute. if it evaluates to false it wont excute*/
   if(userInput.value !== ""){
    const taskItem = document.createElement("li");
   taskItem.classList.add("flex","li-style");
   const taskDiv = document.createElement('div');
   const taskParagarph = document.createElement('p')
   taskParagarph.textContent = formData;
   taskDiv.append(taskParagarph);
   taskItem.append(taskDiv);

   /* These lines of code are creating new button elements and a span element dynamically using
   JavaScript DOM manipulation. Here's a breakdown of each line: */
   const ctrlDiv = document.createElement('div');
   const doneSpan = document.createElement('span');
   const doneSpanImg = document.createElement('img');
   doneSpanImg.src ="/img/icons8-tick-50.png";
   doneSpanImg.classList.add("icons");
   doneSpanImg.id = "don"
   doneSpan.append(doneSpanImg);
  

   const deleteSpan = document.createElement('span');
   const deleteSpanImg = document.createElement('img');
   deleteSpanImg.src = "/img/icons8-delete-64.png";
   deleteSpanImg.classList.add("icons");
   deleteSpanImg.id= "del"
   deleteSpan.append(deleteSpanImg);


   ctrlDiv.append(doneSpan,deleteSpan);


   taskItem.append(taskDiv,ctrlDiv);
   taskContainer.append(taskItem);
   userInput.value = ""

   resetButton.classList.add("show")
  }
})



// Event listners for click events on the delete and done buttons of each task

taskContainer.addEventListener('click',(e)=>{
  const taskItem = e.target.closest('li')
    
  if(e.target && e.target.nodeName.toLowerCase() ==='img' && e.target.id === "del"){
    numOfTasks -= 1;
    numOfTasksDisplay.textContent = numOfTasks;
   taskItem.remove();
  }else if(e.target && e.target.nodeName.toLowerCase()==="img" && e.target.id ==='don'){
    taskItem.remove();
    numOfTasks -= 1;
    numOfTasksDisplay.textContent = numOfTasks;

    numOfFinishedTask += 1;
    numOfFinishedTaskDisplay.textContent = numOfFinishedTask;

  const doneItem = document.createElement('li');
  const doneParagarph = document.createElement('p');
  doneParagarph.textContent = taskItem.querySelector('p').textContent;;
  doneParagarph.classList.add('done');
  doneItem.classList.add('li-style');
  doneItem.append(doneParagarph);
  doneTaskContainer.append(doneItem);

  

  }
})

resetButton.addEventListener('click',()=>{
  reset();
})

function reset(){
  numOfTasks = 0;
  numOfTasksDisplay.textContent = numOfTasks;
  numOfFinishedTask = 0;
  numOfFinishedTaskDisplay.textContent = numOfFinishedTask;
  resetButton.classList.remove('show');
  // doneItem.remove();
  const lis = document.querySelectorAll('li');

  for(let li of lis){
    li.remove();
  }
  
}