import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { incNumber,decNumber } from "./action/index"

function App() {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>
      <div style={{backgroundColor:'pink', height:50, alignItems:'center', justifyItems:'center',}}>
        <a style={{height:10, width:10}} title="Decrement" onClick={()=>{dispatch(decNumber())}}><span>-</span></a>
        <input name='quantity' type='text' className='qunatity_input' value={myState} />
        <a className='quantity_minus' title="Decrement" onClick={()=>{dispatch(incNumber())}}><span>+</span></a>
      </div>
    </div>
  );
}

export default App;
