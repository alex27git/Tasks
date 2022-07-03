import {useState} from "react";
import {NewComponent} from "./NewComponetnt";

type FilterType = 'all' | 'RUBLS' | 'Dollars'

export const Money=()=> {
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])
  
  const [filter, setFilter] = useState('all')
  
  let currentMoney=money
  
  if(filter === "RUBLS") {
    currentMoney=money.filter((filteredMoney)=>filteredMoney.banknots==='RUBLS')
  }else if(filter === 'Dollars') {
    currentMoney=money.filter((filteredMoney)=>filteredMoney.banknots==='Dollars')
  }
  
  let onClickFilterMoney= (nameButton:FilterType) => {
    setFilter(nameButton)
    {}
  }
  
  return (
    <>
      <ul>
        { currentMoney.map((objFromMoneyArr, index)=>{
          return(
            <li key={index}>
              <span>{objFromMoneyArr.banknots}</span>
              <span>{objFromMoneyArr.value}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
      <div style={{marginLeft:'35px'}}>
        <button onClick={()=>onClickFilterMoney('all')}>all</button>
        <button onClick={()=>onClickFilterMoney('RUBLS')}>RUBL</button>
        <button onClick={()=>onClickFilterMoney('Dollars')}>Dollars</button>
      </div>
    </>
 
  )
}


