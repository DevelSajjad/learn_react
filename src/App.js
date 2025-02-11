import logo from './logo.svg';
import './App.css';
import InputForm from './InputForm';
import Login from './Login';
import Voucher from './Components/Voucher';
import { useState } from 'react';

function App() {
  const [data, setData]= useState(0)
  function addEmail() {
      setData((data)=>data+1)
      console.log(data);
      
  }
  return (
    <div className="App">
      {/* <InputForm/> */}
      
      {/* <Login /> */}
      <div>
        {data}
      </div>

      <Voucher/>
    </div>
  );
}

export default App;
