import React, { useState } from "react";

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<string[]>([]);
  const [list, setList] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [editValue, setEditValue] = useState<string>("");

  const add = (): void => {
    if (editIndex !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = editValue;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditValue("");
    } else if (list) {
      setTodos([...todos, list]);
      setList("");
    }
  };

  const change = (index: number): void => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const remove = (index: number): void => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="max-w-[1000px] mx-auto bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase text-center">
            To-Do List
          </h1>
        </div>

        {editIndex !== -1 ? (
          <form
            className="w-full max-w-sm mx-auto px-4 py-2 "
            onSubmit={(e) => {
              e.preventDefault();
              add();
            }}
          >
            <div className="flex items-center border-b-2 border-blue-700 py-2">
              <input
                onChange={(e) => setEditValue(e.target.value)}
                value={editValue}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Edit task"
              />
              <button
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <form className="w-full max-w-sm mx-auto px-4 py-2">
            <div className="flex items-center border-b-2 border-teal-500 py-2 ">
              <input
                onChange={(e) => setList(e.target.value)}
                value={list}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
                type="text"
                placeholder="Add a task"
              />
              <button
                onClick={add}
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Add
              </button>
            </div>
          </form>
        )}

        <ul className="bg-gray-100 rounded block p-4 h-full items-center m-4">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded ms-2 "
                onClick={() => change(index)}
              >
                Edit
              </button>
              <button
                className=" flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded ms-2"
                onClick={() => remove(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}