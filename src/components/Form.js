// import React from "react";

import React, { useState } from "react";


{/*
    For one thing, props come from the parent of a component. 
    Our <Form /> will not be inheriting a new name for our task; 
    our <input /> element lives directly inside of <Form />, 
    so <Form/> will be directly responsible for creating that new name. 
    We can't ask <Form /> to spontaneously create its own props, 
    but we can ask it to track some of its own data for us. 
    Data such as this, which a component itself owns, is called state. 
    State is another powerful tool for React because components not only own state, 
    but can update it later. It's not possible to update the props a component receives; 
    only to read them.
      
    | Data which a component itself owns, is called state.
    | components not only own state, but can update it later.
    | It's not possible to update the props a component receives; only to read them.

    @see useState
*/}

// Can't pass data from here to parent (App), and we need a way to pass data from
// Form --> APP so we will have to create a callback prop which will implement 
// a function in App which expects data from Form as an input; function-as-a-prop
// Once we have the callbacl prop we can call it inside form

export default function Form(props){

const [name, setName] = useState('');


  // update Name from Input box
  function handleChange(e) {
    setName(e.target.value);
  }


  function handleSubmit(e) {
    // e.preventDefault();
    // alert('Hello, world!');
    // props.addTask("Say Helo");
    
    e.preventDefault(props);
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );

}
