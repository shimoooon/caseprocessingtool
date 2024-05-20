import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./TodoModel";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  //New task proess
  const todoAddHandler = (database: string, text: string) => {
    if (database === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random().toString(),
        text: text,
        database: database,
      },
    ]);
  };

  const todoUpdateHandler = (updatedTodo: any) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id
          ? {
              ...todo,
              text: updatedTodo.text,
              database: updatedTodo.databaseNumber,
            }
          : todo
      )
    );
  };

  //Delete process
  const todoDelteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList
        items={todos}
        onDeleteTodo={todoDelteHandler}
        todoUpdateHandler={todoUpdateHandler}
      />
    </div>
  );
};

export default App;
