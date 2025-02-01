import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UseEffect from './UseEffect';

function App() {
  const [data, inputData] = useState(null);
  const [print, printData] = useState(false);
  function getData(data) {
    let val = data.target.value;
    inputData(val);
  }

  return (
    <div className="App">
      {/* <h1>First React App</h1> */}

      {/* <p>{print ? data : null}</p>
      <input onChange={getData}/>
      <button onClick={()=>printData(print ? false : true)}>Print</button> */}

      <UseEffect/>
    </div>
  );
}

export default App;
