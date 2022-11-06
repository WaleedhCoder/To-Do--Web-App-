const input_todo=document.getElementById("input-todo");
const add_btn=document.getElementById("add-btn");
const todo_list=document.getElementById("todo-list");
const delete_btn=document.getElementById("delete-btn");

//todos
const todos= [
    
];


loadTodo();


//add todo
add_btn.onclick=()=>addTodo();
function addTodo(){
    todos.push(input_todo.value);
    loadTodo();
  
}

//load todo
function  loadTodo(){
    todo_list.innerHTML = "";
todos.forEach((e)=>{
    todo_list.innerHTML += `  <li class="list-group-item d-flex justify-content-between">
    ${e}
   <button class="btn btn-sm btn-light" id="delete-btn">
    <img src="assets/delete.png" alt="" height="20" width="20" />
   </button>
  </li>`;
});
}