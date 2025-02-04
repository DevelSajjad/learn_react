import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState, Component } from 'react';
import UseEffect from './UseEffect';
import ArrayList from './ArrayList';
import NestedArray from './NestedArray';
import PureComponent from './PureComponent';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import ControlComponent from './ControlComponent';


function App() {
  const [data, inputData] = useState(null);
  const [print, printData] = useState(false);
  function getData(data) {
    let val = data.target.value;
    inputData(val);
  }

  return (
    <div className="App">
      {/* <h1>First React App</h1>

      <p>{print ? data : null}</p>
      <input onChange={getData}/>
      <button onClick={()=>printData(print ? false : true)}>Print</button>

      <UseEffect/>

      
      
      <ArrayList/>

      <NestedArray/> */}

      {/* <UseMemo></UseMemo> */}

      {/* <UseRef/> */}

      {/* <ControlComponent/> */}

      <Hoc count={Counter} />

      <HocGreen count={Counter} />
    </div>
  );
}

function Hoc(props) {
  return <h1> <props.count/> </h1>
}
function HocGreen(props) {
  return <h1 style={{ backgroundColor:'green', width:300}} > <props.count/> </h1>
}
function Counter() {
  const [incre, setIncre] = useState(1);
  return <div>
    <h1> {incre} </h1>
    <button onClick={()=>setIncre(incre + 1)} >Increment</button>
  </div>
}

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state= {
//       count:1,
//     }
//   }
//   render() {
//     return(
//       <div className='App'>
//         <PureComponent data={this.state.count} />
//         <button onClick={()=>this.setState({count: 1})}>Increment Count</button>
//       </div>
//     );
//   }
// }

// export default App;

