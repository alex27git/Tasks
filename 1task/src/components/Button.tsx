import {Button} from "./Buttons";
import {useState} from "react";

export const UniversalButton=() =>{
  const Button1Foo=(subscriber:string)=> {
    console.log(subscriber)
  }
  const Button2Foo=(subscriber:string)=> {
    console.log(subscriber)
  }

  const StupidButton=()=> {
    console.log('Stupid Button')
  }
  let [a, setA] = useState(1)
  const onClickHandler = () => {
    setA(++a)
    console.log(a)
  }
  const Default = (num:number) => {
    setA(num)
    console.log(num)
  }
  return (
    <div>
      <Button name={"YoutubeChanel_1"} callBack={()=>Button1Foo('Im Vasya')}/>
      <Button name={"YoutubeChanel_2"} callBack={()=>Button2Foo('Im Ivan')}/>
      <Button name={"StupidButton"} callBack={StupidButton}/>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={()=>Default(0)}>0</button>
    </div>
  )
}