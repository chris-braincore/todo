// import React from "react";
import React, { useState } from "react";

export default function Todo(props) {
// console.log(`Todo.js :  ${JSON.stringify(props)}`)
//
// const [complete, setComplete] = useState('');

// This changes the template view for editing or not
const [isEditing, setEditing] = useState(false);
// this updates the newName field and saves current name as this.
const [newName, setNewName] = useState('');


function handleChange(e) {
  setNewName(e.target.value);
  // I believe here we update a DB call in production App
}

function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}


const editingTemplate = (
  <form 
        className="stack-small" 
        onSubmit={ handleSubmit }
  >
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        New name for { props.name }
      </label>
        {/*Here we tie the updated value of newName using the handleChange*/}
        <input 
            id={props.id} 
            className="todo-text" 
            type="text" 
            value={newName}
            onChange={ handleChange }
        />
    </div>
    <div className="btn-group">
      <button 
        type="button" 
        className="btn todo-cancel" 
        onClick={() => setEditing(false)}
      >
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        Save
        <span className="visually-hidden">new name for {props.name}</span>
      </button>
    </div>
  </form>
);

const viewTemplate = (
  <div className="stack-small">
    <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button 
          type="button" 
          className="btn" 
          onClick={() => setEditing(true)} 
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.myFunction(props.id)}
        >
          MyFunction <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
  </div>
);

return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

}

{/* OLD RETURN STATEMENT UNUSED
  return (
  <li className="todo stack-small">
    <div className="c-cb">

      <input 
        id={props.id} 
        type="checkbox" 
        defaultChecked={ props.completed } 
        onChange={()=> props.toggleTaskCompleted(props.id)}
      />

      <label className="todo-label" htmlFor={ props.id }>
        { props.name }
      </label>

    </div>
    <div className="btn-group">

      <button type="button" className="btn">
        Edit <span className="visually-hidden">{ props.name }</span>
      </button>

      <button 
        type="button" 
        className="btn btn__danger"
        onClick={()=> props.deleteTask(props.id)}
      >
        Delete <span className="visually-hidden">{ props.name }</span>
      </button>
    </div>
  </li>
  ); */}

