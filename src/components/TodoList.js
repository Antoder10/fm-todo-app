import React from 'react';

import Todo from './Todo';

const TodoList = ({todos, deleteTodo, clearCompletedTodos, clearAllTodos, toggleIsCompleted, filterTodos}) => {

  return (
    <div className="bg-white dark:bg-dark-desaturated-blue dark:text-white rounded-md shadow-md min-w-2/3 h-3/5">
      {todos.map(todo => {
        return(
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleIsCompleted={toggleIsCompleted}
          />
        )
      })}
      <div className="flex flex-col items-center sm:grid sm:grid-cols-3 p-4 text-sm">
        <span className="font-bold mb-4">{todos.length} items left</span>
        <div className="text-center mb-4">
          <button className="active:text-dark-desaturated-blue" name="all" onClick={(e) => filterTodos(e.target.name)}>All</button>
          <button className="mx-4" name="active" onClick={(e) => filterTodos(e.target.name)}>Active</button>
          <button className="" name="completed" onClick={(e) => filterTodos(e.target.name)}>Completed</button>
        </div>
        <div className="text-right">
          <span>Clear:</span>
          <button className="ml-2 mr-2" onClick={() => clearCompletedTodos()}>Completed</button>
          <button className="" onClick={() => clearAllTodos()}>All</button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;