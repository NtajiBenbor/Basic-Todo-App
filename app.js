const form = document.querySelector('form')
const task = document.querySelector('.task')
const userInput = document.querySelector('#userInput')

form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const formData = userInput.value;
  while(userInput.value !== ""){
   const taskItem = document.createElement("li");
   taskItem.textContent = formData;

   const deleteBtn = document.createElement('button');
   const doneBtn = document.createElement('button');
   const btnSpan = document.createElement('span');

   deleteBtn.textContent = 'Delete';
   doneBtn.textContent = 'Done';

   deleteBtn.setAttribute("class","delBtn");
   doneBtn.setAttribute("class","doneBtn-2");

   btnSpan.append(deleteBtn,doneBtn);
   taskItem.appendChild(btnSpan);
   task.append(taskItem);
   userInput.value = ""

   doneBtn.addEventListener('click',()=>{
       taskItem.style.textDecoration = "line-through";
   })
   
   deleteBtn.addEventListener('click',()=>{
       task.removeChild(taskItem);
   })

} 
})


