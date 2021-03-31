import React, {useState, useEffect} from 'react';

import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([{todoString: 'read', isCompleted: false, id: uuidv4()}, {todoString: 'write', isCompleted: false, id: uuidv4()}]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (filter === 'completed') {
      setFilteredTodos(todos.filter(todo => todo.isCompleted));
    }
    else if (filter === 'active') {
      setFilteredTodos(todos.filter(todo => !todo.isCompleted));
    }
    else if (filter === 'all') {
      setFilteredTodos(todos);
    }
  }, [filter, todos])

  const addTodo = value => {
    setTodos([...todos, {
      todoString: value,
      isCompleted: false,
      id: uuidv4()
    }])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  }

  const clearAllTodos = () => {
    setTodos([]);
  }

  const toggleIsCompleted = id => {
    let completed = todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted } : { ...todo});
    setTodos(completed);
  }

  return (
    <div className="container flex flex-col min-h-screen">
      <Header />
      <section className="flex flex-col min-w-full flex-1 px-4 justify-center items-center bg-gray-200 py-8 dark:bg-very-dark-blue-top">
        <AddTodoForm addTodo={addTodo}/>
        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          clearCompletedTodos={clearCompletedTodos}
          clearAllTodos={clearAllTodos}
          toggleIsCompleted={toggleIsCompleted}
          filterTodos={setFilter}
        />
      </section>
    </div>
  );
}

export default App;
