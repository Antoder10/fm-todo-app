import React from 'react';

const Todo = ({todo, deleteTodo, toggleIsCompleted}) => {
  const {todoString, isCompleted, id} = todo;

  return (
    <div className="flex items-center border-b-2 border-gray-300 dark:border-gray-200 p-4 dark:bg-dark-desaturated-blue dark:text-white">
      <input
        type="checkbox"
        name="colors"
        value="blue"
        className="cursor-pointer rounded-full w-6 h-6 mr-8"
        onClick={() => toggleIsCompleted(id)}
      />
      <span className={`text-lg ${isCompleted ? "line-through text-gray-300" : "no-underline"}`}>{todoString}</span>
      <button className="ml-auto" onClick={() => deleteTodo(id)}>✕</button>
    </div>
  );
}

export default Todo;