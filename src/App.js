import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Titulo from "./Components/Titulo/Titulo"
import CartWdiget from './Components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo></Titulo>
        <Nav></Nav> <CartWdiget></CartWdiget>
      </header>
      
      
    </div>
  );
}


export default App;
