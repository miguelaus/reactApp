import './App.css';
import Nav from "./Components/Nav/Nav";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import CartWdiget from './Components/CartWidget/CartWidget';
import Saludo from "./Components/Saludo/Saludo"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting="Bienvenidos a Fede Bistro bar" />
        
        <Nav /> 
        
       

        <Saludo persona="Tutor" apellido="1"/>
        <Saludo persona="Tutor" apellido="2"/>

     
      </header>
      
      
    </div>
  );
}


export default App;
