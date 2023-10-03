import React from "react";
import "./App.css";

import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const hdlDelete = (obj) => {
    setToDos(toDos.filter((curObj) => curObj.id !== obj.id));
  };
  const hdlMultiDel = () => {
    setToDos(toDos.filter((obj) => !obj.status));
  };
  const hdlStatus = (obj, e) => {
    setToDos(
      toDos.filter((obj2) => {
        if (obj2.id === obj.id) {
          obj2.status = e.target.checked;
        }
        return obj2;
      })
    );
  };

  const hdlToDos = () => {
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo("");
  };

  return (
    <div className="app p-3 rounded-md  ">
      <div className="mainHeading">
        <h1 className="text-center text-white">ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 className="text-center text-white" >---- Happy day😀 ----</h2> <br />
        <button onClick={(e) => hdlMultiDel()} className="bin text-3xl block mx-auto border-none rounded-md bg-transparent">
          🚮
        </button>
      </div>

      <div className="input flex items-center justify-center w-80 text-lg p-1 rounded-md bg-white mx-auto mt-3">
        <input
        className="w-full h-9 outline-none border-none"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />

        <i onClick={() => hdlToDos()} className="fas fa-plus cursor-pointer text-xl text-gray-400 font-black me-1"></i>
      </div>

      <div className="todos mt-2 ">
        {toDos.map((obj, i) => {
          return (
            <div className="todo w-80 text-lg p-1 rounded-md flex justify-between bg-white mt-3 items-center">
              <div className="left flex items-center">
                <input
                  className=" outline-none border-none"
                  onChange={(e) => hdlStatus(obj, e)}
                  type="checkbox"
                  name=""
                  id="checkBox"
                  checked={obj.status}
                />
                <p className="ms-2 text-lg font-bold text-gray-500 whitespace-normal">{obj.text}</p>
              </div>

              <div className="right">
                <i
                  onClick={(e) => {
                    setToDos(toDos.filter((curObj) => curObj.id !== obj.id));
                  }}
                  className="fas fa-times  cursor-pointer text-xl text-gray-400 font-black me-1"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
