import React, {ChangeEvent, useState} from "react";

type FullInputPropsTitle = {
  addMassage: (title:string) => void
}

export function FullInput(props:FullInputPropsTitle) {
  let [title, setTitle] = useState('')
  console.log(title)
  const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }
  
  const onclickButtonHandler=()=> {
    props.addMassage(title)
    setTitle('')
  }
  
  return (
    <div>
      <div>
        <input value={title} onChange={onChangeInputHandler}/>
        <button onClick={onclickButtonHandler}>+</button>
      </div>
    </div>
  )
}