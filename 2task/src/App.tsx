import React, {ChangeEvent, useState} from 'react';

import './App.css';
import {FullInput} from "./component/FullInput";
import {Input} from "./component/Input";
import {Button} from "./component/Button";

function App() {
  let [massage, setMassage] = useState([
    {massage: 'massage1'},
    {massage: 'massage1'},
    {massage: 'massage1'},
  ])
  
  let [title, setTitle] = useState('')
  console.log(title)
  
  const addMassage = (title:string) => {
   let newMassage = {massage: title}
    setMassage([newMassage, ...massage])
  }
  
  const callBackBottomHandler= () => {
    addMassage(title)
    setTitle('')
  
  }
  
  return (
    <div className="App">
      <Input setTitle={setTitle} title={title}/>
      <Button name={'+'} callBack={callBackBottomHandler}/>
      {/*<FullInput addMassage={addMassage}/>*/}
      {massage.map((el, index) => {
        return (
          <div key={index}>{el.massage}</div>
        )
      })}
    </div>
  );
}

export default App;
