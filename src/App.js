import logo from './logo.svg';
import './App.css';
import Student from './Student';
import { useState } from 'react';

function App() {
  const [data, setName] = useState('Sajjad');
  const [email, setEmail] = useState('sajjad@gmail.com');
  const [phone, setPhone] = useState('0171904166');
  const [incre, setIncre] = useState(0);
  function updateData () {
    setName('Raja Babu');
    setEmail('raja@gmail.com');
    setPhone('01719041636');
  }
  return (
    <div className="App">
      <h1>First React App</h1>
      <h1> {incre} </h1>
      <h1> {data} </h1>
      <Student name={data} email={email} phone={phone}/>
      <button onClick={updateData} >Update</button>
      <button onClick={()=> setIncre(incre + 1)} >Increment</button>
    </div>
  );
}

export default App;
