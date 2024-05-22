import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { MyComponent } from './MyComponent';
import { SecondComponent } from './SencondComponent';
import { ThirdComponent } from './ThirdComponent';

function App() {
=======
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';

function App() {

>>>>>>> 23831e9e0d4112de3304c074c38f8dee0ede394e
  const medicalRecord = {
    height: "160",
    bloodGroup: "RhO+",
    allergies: "None"
  }
<<<<<<< HEAD
 
  
=======

>>>>>>> 23831e9e0d4112de3304c074c38f8dee0ede394e
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
<<<<<<< HEAD
      <SecondComponent/>
      <ThirdComponent
       name="Inés"
       lastName="Oliveros"
       card={medicalRecord}
     />
      <MyComponent/>
=======
        <SecondComponent />
        <ThirdComponent 
          name="Inés"
          lastName="Oliveros"
          card={medicalRecord}
        />
        <MyComponent />
>>>>>>> 23831e9e0d4112de3304c074c38f8dee0ede394e
      </header>
    </div>
  );
}

export default App;
