import { completedTasks, tasks, todos } from "./todo_signal";

export default function Todos() {

  function addTask() {
    console.log('render todo ..');
    let task = document.getElementById('input').value;
    if (task.length < 2) {
      return;
    }
    tasks.value = [...tasks.value, { title: task, 'completed': false }]
    document.getElementById('input').value = '';
  }

  function updateTask(task) {
    console.log(task);
    tasks.value=tasks.value.map((item) => item.title === task.title ? task : item);
  }

  return (
    <div className='container pt-3'>
      <div className="d-flex flex-row">
        <input type="text" className="form-control w-75 me-5" id='input' placeholder="Enter Task ..." />
        <button className="btn btn-primary" onClick={addTask}>Add Task</button>
      </div>
      <h3 className="mt-5">Todos</h3>
      <div className="card m-2 p-3">
        {todos.value.map((todo) =>
          <div className="mb-3 form-check" key={todo.title}>
            <input type="checkbox" className="form-check-input" checked={todo.completed} onChange={(_) => updateTask({ ...todo, completed: true })} />
            <label className="form-check-label" htmlFor="exampleCheck1">{todo.title}</label>
          </div>
        )}
      </div>

      <h3 className="mt-5">Completed Tasks</h3>
      <div className="card m-2 p-3">
        {completedTasks.value.map((task) =>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" checked={task.completed}  onChange={(_)=>updateTask({...task,completed:false})} id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">{task.title}</label>
            <button className="btn btn-secondary btn-sm float-end" onClick={()=>updateTask({...task,completed:false})}>update</button>

          </div>
        )}
      </div>
    </div>
  )
}
