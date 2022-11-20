import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav/Nav";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import CartWdiget from './Components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer></ItemListContainer>
        <Nav></Nav> <CartWdiget></CartWdiget>
      </header>
      
      
    </div>
  );
}


export default App;
