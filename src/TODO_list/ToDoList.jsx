import React, { useState } from "react";
import './ToDoList.css';

const ToDoList = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const handleTodoItem = () => {
    const newIndex = index + 1;
    const newTodoItem = { id: newIndex, text: text, status: "todo" };

    const updatedTodoItems = [...todoItem, newTodoItem];

    setIndex(newIndex);
    setTodoItem(updatedTodoItems);
    setText("");

    handleList(updatedTodoItems);
  };

  const handleList = (todoItems) => {
    if (todoItems.length > 0) {
      const todoStatus = todoItems.filter((item) => item.status === "todo");
      console.log(todoStatus);
    }
  };

  const removeTodoItem = (id) => {
    setTodoItem(todoItem.filter((item) => item.id !== id));
  };

  const moveItem = (id, newStatus) => {
    setTodoItem(
      todoItem.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  
  return (
    <div className="flex flex-col mainContainer">
      <div className="flex gap-[px] inputField">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          id={"inputField"}
          className="borderI"
          placeholder="Type what would you like to do"
        />
        <button
          type="submit"
          onClick={handleTodoItem}
          disabled={text === "" ? true : false}
          className={`${text === "" ? "cursor-not-allowed": "pointer"
            } border border-gray-500 borderbox`}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col p-3 statusContainer">
        <div className="flex flex-1 gap-[100px] status">
          <div className="flex-1 flex-col todo">
            <h3 style={{backgroundColor : "#2c3e50" , padding : "10px" , fontFamily : "cursive"}}>To-Do</h3>
            <div className="flex flex-col">
              {todoItem
                .filter((item) => item.status === "todo")
                .map((item) => (
                  <div key={item.id} className="flex">
                    <div className="flex flex-1" >{item.text}</div>
                    <button
                      className="border border-gray-600 movebtn"
                      onClick={() => removeTodoItem(item.id)}
                    >
                      Remove
                    </button>
                    <button
                      className="border border-gray-600 movebtn"
                      onClick={() => moveItem(item.id, "progress")}
                    >
                      Progress
                    </button>
                    <button
                      className="border border-gray-600 movebtn"
                      onClick={() => moveItem(item.id, "completed")}
                    >
                      Completed
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex-1 flex-col progress">
            <h3 style={{backgroundColor : "#2c3e50" , padding : "10px" , fontFamily : "cursive"}}>Progress</h3>
            <div className="flex flex-col">
              {todoItem
                .filter((item) => item.status === "progress")
                .map((item) => (
                  <div key={item.id} className="flex">
                    <div className="flex flex-1">{item.text}</div>
                    <button
                      className="border border-gray-600 movebtn"
                      onClick={() => removeTodoItem(item.id)}
                    >
                      Remove
                    </button>
                    <button
                      className="border border-gray-600 movebtn"
                      onClick={() => moveItem(item.id, "completed")}
                    >
                      Completed
                    </button>
                    <button
                      className="border border-gray-600 movebtn"
                      onClick={() => moveItem(item.id, "todo")}
                    >
                      ToDo
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex-1 flex-col completed">
            <h3 style={{backgroundColor : "#2c3e50" , padding : "10px" , fontFamily : "cursive"}}>Completed</h3>
            <div className="flex flex-col">
              {todoItem
                .filter((item) => item.status === "completed")
                .map((item) => (
                  <div key={item.id} className="flex">
                    <div className="flex flex-1">{item.text}</div>
                    <button
                      className="border border-gray-600 movebtn"
                      onClick={() => removeTodoItem(item.id)}
                    >
                      Remove
                    </button>
                    <button
                      className="border border-gray-600 movebtn"
                      onClick={() => moveItem(item.id, "progress")}
                    >
                      Progress
                    </button>
                    <button
                      className="border border-gray-600 movebtn"
                      onClick={() => moveItem(item.id, "todo")}
                    >
                      ToDo
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
