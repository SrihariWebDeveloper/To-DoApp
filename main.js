let addTask = document.getElementById('add');
let task = document.getElementById('todo');
let inputText = document.getElementById('input-text');

let taskArea = document.getElementById('todo-lists');

function addTasklist(){
  if (inputText.value == '') {
    alert('Please Enter a task');
  }else{
    taskArea.innerHTML = taskArea.innerHTML + `
    <div class="todo" id="todo">
        <p>${inputText.value}</p>
        <i class="fa-solid fa-xmark remove" id="remove"></i>
      </div>
    `
    let removeTask = document.querySelectorAll('.remove');
    for (var i = 0; i < removeTask.length; i++) {
      removeTask[i].onclick = function(){
        this.parentNode.remove();
      }
    }
    inputText.value = '';
  }
}
addTask.addEventListener('click', addTasklist);
