import { Card } from './components/Card';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);
 
   useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => setData(res))
     }
   , [])

   
  return (
    <div className="App">
  
  <Card data={data}/>
  
  


 
 
    </div>
  );
}

export default App;
