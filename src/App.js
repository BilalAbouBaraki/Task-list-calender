//import logo from './logo.svg';
import './App.css';
import React from 'react';
import  ReactDOM  from 'react-dom';
import { eventWrapper } from '@testing-library/user-event/dist/utils';



const MainContainer=()=>{
return(
 <>
 </>

);
};
function CreateDiv(){
  let newdiv=document.createElement("div")
  newdiv.className='ContainerStyle1'
  MainContainer.
}
const Button1=()=>{
  return(
  <button onclick={CreateDiv()}></button>
  )
}
function App() {

  return (

    <>
    <div className="ContainerStyle"><MainContainer/></div>
    <Button1/>
    </>
  
  );
}

export default App;
