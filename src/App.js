import './App.css';
import { useState } from 'react';

function App() {
  const [num,setNum] = useState(1)
  function add(){
    console.log("hello")
    setNum(num+1)
    

  }
  function minus(){
    setNum(num-1)
  }

  return (
    <div className="App">
      <h1>
        Punt Hasbulla
      </h1>
      <p>
        Times punted: {num}
      </p>
      <button onClick={add}>
        punt
      </button>
      <button onClick={minus}>
        save hasbulla
      </button>
      <div>
        <img src='https://www.mansworldindia.com/wp-content/uploads/2022/06/Hasbulla.jpg' alt="Hasbulla with glasses"style={{width: "100%"}} />


      </div>
       
    </div>
  );
}

export default App;
