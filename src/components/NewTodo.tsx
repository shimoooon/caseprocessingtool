import React, { useRef } from 'react';
import './NewTodo.css';



type NewTodoProps = {
  onAddTodo: (todoText: string, todoData: string) => void;
};

// New task create
const NewTodo :React.FC<NewTodoProps> = props =>{
  const textInputRef = useRef<HTMLInputElement>(null);
  const textInputRef1 = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    const enteredText1 = textInputRef1.current!.value;
    props.onAddTodo(enteredText, enteredText1);
  };

return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor="todo-text">DataBase Number</label>
        <input type="text" id="todo-text" ref={ textInputRef }/>
        <label htmlFor="todo-text">Sponsor Number</label>
        <input type="text" id="todo-text" ref={ textInputRef1 }/> 
      </div>
      <button type="submit">症例追加</button>
    </form>
  );
};



export default NewTodo;
