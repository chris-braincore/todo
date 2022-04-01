// import React from 'react'
import React, { useState } from "react";
import { nanoid } from "nanoid";

import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

// import logo from './logo.svg';
// import './App.css';

// What we are doing here is creating a function addTask in the parent component
// we then pass it in as a prop value in the child component(Form)
// and then in the child create a function that calls the parent task passing in a 
// state value update to update the parent state

function App(props) {

  // getting state from passed in props (defined on index.js)(DATA)
  const [tasks, setTasks] = useState(props.tasks);
  const [isEditing, setEditing] = useState(false);


  const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
  const headingText = `${tasks.length} ${tasksNoun} remaining`;

  const taskList = tasks.map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id} 
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));



  // Function used and called by child component(Form) for submitting and 
  // passing data from form child
  
  // pass the name state as a string to an object along with completed data
  function addTask(name) {
    // alert(name);
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks,newTask]);
  }

  // check SET tasks
  function checkTasks(){
    console.log(JSON.stringify(tasks))
  }

  // console.log(`App.js : ${JSON.stringify(props.tasks)}`)
  // const taskList = props.tasks?.map(task => task.name);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
    // checkTasks();
  }

  //Create the function call in the parent - and call in the child
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }


  function deleteTask(id) {
    console.log(`removing ${id}`)
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      {/*  form  */}

      <Form addTask={ addTask } />

      <div className="filters btn-group stack-exception">

        <FilterButton />
        <FilterButton />
        <FilterButton />

        { 
            /*
              <button type="button" className="btn toggle-btn" aria-pressed="true">
                <span className="visually-hidden">Show </span>
                <span>all</span>
                <span className="visually-hidden"> tasks</span>
              </button>
              <button type="button" className="btn toggle-btn" aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Active</span>
                <span className="visually-hidden"> tasks</span>
              </button>
              <button type="button" className="btn toggle-btn" aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Completed</span>
                <span className="visually-hidden"> tasks</span>
              </button>
            */ 
        }

      </div>

      <h2 id="list-heading">
        { headingText }
        {/* \{/*tasks.length}  tasks remaining */}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        { taskList }

        {/*      <Todo name="Eat" completed={ false } id="todo-0" />
          <Todo name="Sleep" completed={ false } id="todo-1" />
            <Todo name="Repeat" completed={ false } id="todo-2" /> */}

        { /*}
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
            </li> */}
      </ul>
    </div>
  );
}





// OLD PROP EXAMPLE
/*
function App(props) {
const subject = props.subject //`React [${React.version}]`;
console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <p>
         Hello, {subject}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      ); 

      } 
*/

export default App;
