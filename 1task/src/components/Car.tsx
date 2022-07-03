import React from "react";

type CarPropsType= {
  manufacturer: string
  model: string
}
type topCarProps={
  topCat: Array<CarPropsType>
}

export const NewComponents = (props:topCarProps) => {
  return (
    <ul>
      {props.topCat.map((objTopCar, index)=>{
        return(
            <li key={index}>
              {objTopCar.manufacturer}
              {objTopCar.model}
            </li>
        )
      })}
    </ul>
  )
}