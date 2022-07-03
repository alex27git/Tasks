import React from 'react';
import './App.css';
import {NewComponents} from "./components/Car";
import {Header} from "./sity/Header";
import {Body} from "./sity/Body";
import {Footer} from "./sity/Footer";
import {UniversalButton} from "./components/Button";
import {Money} from "./components/Money";

function App() {
  
  // const topCars = [
  //   {manufacturer:'BMW', model:'m5cs'},
  //   {manufacturer:'Mercedes', model:'e63s'},
  //   {manufacturer:'Audi', model:'rs6'}
  // ]
  return (
    <>
      {/*<Header titleForHeader={'New Body'}/>*/}
      {/*<Body titleForBody={'New Body'}/>*/}
      {/*<Footer titleForFooter={'New Footer'}/>*/}
      {/*<NewComponents topCat={topCars}/>*/}
      {/*<UniversalButton/>*/}
      <Money/>
    </>

  //<NewComponents/>
)
}

export default App;
