/* This JavaScript code snippet is creating a simple to-do list application. Here's a breakdown of what
each part of the code is doing: */
/* These lines of code are selecting specific elements from the HTML document using their respective
CSS selectors. */
const form = document.querySelector('form')
const task = document.querySelector('.task')
const userInput = document.querySelector('#userInput')

/* The line `form.addEventListener('submit',(e)=>{` is adding an event listener to the form element.
Specifically, it is listening for the 'submit' event on the form. When the form is submitted (e.g.,
by pressing Enter or clicking a submit button), the callback function provided `(e)=>{}` will be
executed. In this case, the callback function prevents the default form submission behavior using
`e.preventDefault();` and then proceeds to handle the form data input by the user to create a new
task item in the to-do list. */
form.addEventListener('submit',(e)=>{
   e.preventDefault();
  /* `const formData = userInput.value;` is retrieving the value entered by the user in the input field
  referenced by the `userInput` variable. It captures the text input by the user before creating a
  new task item in the to-do list with that input value. */
   const formData = userInput.value;
 /* The `while(userInput.value !== "")` statement is creating a loop that continues to execute as long
 as the value of the `userInput` field is not an empty string. This loop ensures that the code block
 inside it, which creates a new task item in the to-do list based on the user input, will run
 repeatedly as long as the user continues to input text into the `userInput` field. It allows for
 the continuous addition of new tasks to the list without the need to refresh the page or manually
 trigger the addition process. */
  while(userInput.value !== ""){
  /* The code snippet `const taskItem = document.createElement("li"); taskItem.textContent = formData;`
  is creating a new list item element (`<li>`) in the HTML document and setting its text content to
  the value entered by the user in the input field (`formData`). This process dynamically generates
  a new task item in the to-do list with the text content provided by the user. */
   const taskItem = document.createElement("li");
   taskItem.textContent = formData;

   /* These lines of code are creating new button elements and a span element dynamically using
   JavaScript DOM manipulation. Here's a breakdown of each line: */
   const deleteBtn = document.createElement('button');
   const doneBtn = document.createElement('button');
   const btnSpan = document.createElement('span');

   /* The lines `deleteBtn.textContent = 'Delete';` and `doneBtn.textContent = 'Done';` are setting the
   text content of the dynamically created button elements. Specifically, `deleteBtn` is being
   assigned the text 'Delete', and `doneBtn` is being assigned the text 'Done'. This sets the
   visible text that will be displayed on the buttons when they are created and appended to the task
   item in the to-do list. */
   deleteBtn.textContent = 'Delete';
  /* `doneBtn.textContent = 'Done';` is setting the text content of the dynamically created button
  element `doneBtn` to 'Done'. This line of code ensures that when the 'Done' button is created and
  appended to a task item in the to-do list, it will display the text 'Done' on the button for the
  user to see and interact with. */
   doneBtn.textContent = 'Done';

   /* The lines `deleteBtn.setAttribute("class","delBtn");` and
   `doneBtn.setAttribute("class","doneBtn-2");` are setting the CSS class attributes for the
   dynamically created delete button (`deleteBtn`) and done button (`doneBtn`) respectively. */
   deleteBtn.setAttribute("class","delBtn");
   doneBtn.setAttribute("class","doneBtn-2");

  /* The code snippet `btnSpan.append(deleteBtn, doneBtn);` is appending the dynamically created delete
  button (`deleteBtn`) and done button (`doneBtn`) to the `btnSpan` element. This means that both
  buttons will be added as child elements to the `btnSpan` element. */
   btnSpan.append(deleteBtn,doneBtn);
   taskItem.appendChild(btnSpan);
   task.append(taskItem);
   userInput.value = ""

 /* The `doneBtn.addEventListener('click',()=>{}` code snippet is adding an event listener to the
 'Done' button (`doneBtn`). Specifically, it is listening for a 'click' event on the 'Done' button.
 When the 'Done' button is clicked by the user, the callback function provided `( )=>{}` will be
 executed. */
   doneBtn.addEventListener('click',()=>{
       taskItem.style.textDecoration = "line-through";
   })
   
  /* The `deleteBtn.addEventListener('click',()=>{}` code snippet is adding an event listener to the
  dynamically created delete button (`deleteBtn`). Specifically, it is listening for a 'click' event
  on the delete button. When the delete button is clicked by the user, the callback function
  provided `( )=>{}` will be executed. */
   deleteBtn.addEventListener('click',()=>{
       task.removeChild(taskItem);
   })

} 
})


