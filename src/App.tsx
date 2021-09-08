import React, {useState} from 'react';
// import {} from "react-router-dom"
import { Todo } from "./todo.model"

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

const todosHandler = (text: string) => {
  setTodos(prevTodos => 
    [...prevTodos,
      {id: Math.random().toString(), text: text}
    ])
}

const onDeleteTodoHandler = (todoId: string) => {
  setTodos(prevTodos => {
   return prevTodos.filter(todo => todo.id !== todoId)
})
}

  return (
    <div className="App">
      {/* A component that adds todos */}
      <NewTodo onAddTodo={todosHandler} />
      <TodoList items={todos} onDeleteTodo={onDeleteTodoHandler} />
    </div>
  );
};

export default App;
