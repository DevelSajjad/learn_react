import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState, Component } from 'react';
import UseEffect from './UseEffect';
import ArrayList from './ArrayList';
import NestedArray from './NestedArray';
import PureComponent from './PureComponent';

// function App() {
//   const [data, inputData] = useState(null);
//   const [print, printData] = useState(false);
//   function getData(data) {
//     let val = data.target.value;
//     inputData(val);
//   }

//   return (
//     <div className="App">
//       <h1>First React App</h1>

//       <p>{print ? data : null}</p>
//       <input onChange={getData}/>
//       <button onClick={()=>printData(print ? false : true)}>Print</button>

//       <UseEffect/>

      
      
//       <ArrayList/>

//       <NestedArray/>

//     </div>
//   );
// }

// export default App;

class App extends Component {
  constructor() {
    super();
    this.state= {
      count:1,
    }
  }
  render() {
    return(
      <div className='App'>
        <PureComponent data={this.state.count} />
        <button onClick={()=>this.setState({count: 1})}>Increment Count</button>
      </div>
    );
  }
}

export default App;

