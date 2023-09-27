import React from 'react';
import './App.css';

import { useState } from 'react'; 



function App() {

  const [toDo,setToDo] = useState('');
  const [toDos,setToDos] = useState([]);

  // const singleDeleteHandler=obj=>{
  //       setToDos(toDos.filter(curObj=>curObj.id !== obj.id))
  // }
  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2> <br />
        <button onClick={(e)=>{ setToDos(toDos.filter(obj=>!obj.status )) }} 
         className='bin'>🚮</button>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{
          setToDo(e.target.value)
        }}  type="text" placeholder="🖊️ Add item..." />
        <i onClick={(e)=>{
          setToDos([...toDos,{id:Date.now(), text:toDo, status:false}]);
          setToDo('');
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj,i)=>{
          return(
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setToDos(
                    toDos.filter(obj2=>{
                    if (obj2.id === obj.id){
                      obj2.status = e.target.checked ;
                    } return obj2 ;
                  })) ;}}
                type="checkbox" name="" id="checkBox" checked={obj.status} />
                <p>{`${i+1}.) ${obj.text}`}</p>
              </div>
              <div className="right">
                <i onClick={(e)=>{
                    setToDos(toDos.filter(curObj=>curObj.id !== obj.id))
                }} 
                className="fas fa-times"></i>
              </div>
            </div>
          )
        })}

        {toDos.map(obj=>{
          if (obj.status){
             return (<h1>{obj.text}</h1>)
          }return null
        })}

        
      </div>
    </div>
  );
}

export default App;
