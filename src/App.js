import logo from './logo.svg';
import './App.css';

import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { useState } from 'react';
import { Child } from './Child';
import { FourthComponent } from './FourtComponent';


function App() {
  const [name, setName] = useState("BRIGITTE")
  const [message, setMessage] = useState("")

  const addMessage = (message) => {
    console.log(message);
    setMessage(message)
  }
  const medicalRecord = {
    height: "160",
    bloodGroup: "RhO+",
    allergies: "None"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <div>
          <hr/>
          <FourthComponent/>
          <hr/>
        </div>

        <h2>Mensaje del hijo: </h2>
        <p>{ message }</p>
        <Child name={name} setName={setName} addMessage={addMessage}/>
        <SecondComponent />
        <ThirdComponent 
          name="Brigitte"
          lastName="Bolaños"
          card={medicalRecord}
        />
        <MyComponent />

      </header>
    </div>
  );
}

export default App;
