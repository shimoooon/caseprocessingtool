import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './TodoModel';



const App:React.FC = () =>{
  const [todos, setTodos ] = useState<Todo[]>([]);

  //New task proess
  const todoAddHandler = (text: string, database:string) => {
    if(text === "") return;
    setTodos(prevTodos => [...prevTodos,
      {id: Math.random().toString(), text: text, database: database},
    ]);
  };

  //Delete process
  const todoDelteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  };

  return (

    <div className="App">
      <NewTodo  onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDelteHandler}/>
    </div>
  );

};



export default App;
