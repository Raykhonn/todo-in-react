import React, { useState } from "react";

// export default function App() {
//   const [todos, setTodos] = useState<string[]>([]);
//   const [list, setList] = useState<string>("");

//   const add = () => {
//     if (list) {
//       setTodos([...todos, list]);
//       setList("");
//     }
//   };

//   const change = (index: number) => {
//     const po = [...todos];
//     po.splice(index, 1);
//     setTodos(po);
//   };

//   return (
//     <div>
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
//         <div className="px-4 py-2">
//           <h1 className="text-gray-800 font-bold text-2xl uppercase">
//             To-Do List
//           </h1>
//         </div>

//         <form className="w-full max-w-sm mx-auto px-4 py-2">
//           <div className="flex items-center border-b-2 border-teal-500 py-2">
//             <input
//               onChange={(e) => setList(e.target.value)}
//               value={list}
//               className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//               type="text"
//               placeholder="Add a task"
//             />
//             <button
//               onClick={add}
//               className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
//               type="button"
//             >
//               Add
//             </button>
//           </div>
//         </form>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>
//               {todo}
//               <button className="bg-red-600 ml-2" onClick={() => change(index)}>
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }












export default function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [list, setList] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [editValue, setEditValue] = useState<string>("");

  const add = () => {
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

  const change = (index: number) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const remove = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">
            To-Do List
          </h1>
        </div>

        {editIndex !== -1 ? (
          <form
            className="w-full max-w-sm mx-auto px-4 py-2"
            onSubmit={(e) => {
              e.preventDefault();
              add();
            }}
          >
            <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input
                onChange={(e) => setEditValue(e.target.value)}
                value={editValue}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Edit task"
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <form className="w-full max-w-sm mx-auto px-4 py-2">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input
                onChange={(e) => setList(e.target.value)}
                value={list}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="bg-red-600 ml-2"
                onClick={() => change(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 ml-2"
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