import './App.css';
import Nav from "./Components/Nav/Nav";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemList from './Components/ItemList/ItemList';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting="Bienvenidos a Fede Bistro bar" />
        
        <Nav /> 

        <ItemList />

        
        

   
     
      </header>
      
      
    </div>
  );
}


export default App;
