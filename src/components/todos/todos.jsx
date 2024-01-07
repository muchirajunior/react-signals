import NavBar from "../navbar/navbar";
import { filteredTodos, todos } from "./todo_signal";

export default function Todos() {
  console.log('render todos..');
  function addTask() {
    console.log('add todo ..');
    let task = document.getElementById('input').value;
    if (task.length < 2) {
      return;
    }
    todos.value = [...todos.value, { title: task, 'completed': false }]
    document.getElementById('input').value = '';
  }

  function updateTodo(task) {
    console.log(task);
    task.completed = !task.completed;
    todos.value=todos.value.map((item) => item.title === task.title ? task : item);
  }

  function deleteTodo(todo){
    todos.value= todos.value.filter((td)=>td !==todo )
  }

  return (
    <>
    <NavBar />
    <div className='container pt-3'>
      <div className="d-flex flex-row">
        <input type="text" className="form-control mx-auto" id='input' placeholder="Enter Task ..." onKeyDown={(event)=>event.key==="Enter"? addTask():null}  />
      </div>
      <h3 className="mt-5">Todos : </h3>
      <div className="card m-2 p-3">
        {filteredTodos.value.map((todo)=>
          <div className="mb-3 form-check d-flex flex-row" key={todo.title}>
            <input type="checkbox" className="form-check-input me-2" checked={todo.completed} onChange={(_) => updateTodo(todo)} />
            <label className="form-check-label" htmlFor="exampleCheck1">{todo.title}</label>
            <span className="flex-fill"></span>
            <button className="btn btn-info btn-sm me-2" onClick={()=>updateTodo(todo)} >update</button>
            <button className="btn btn-danger btn-sm " onClick={()=>deleteTodo(todo)} >delete</button>
          </div>
        )}
      </div>

    </div>
    </>

  )
}
