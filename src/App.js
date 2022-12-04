import {Routes, Route, Link} from  "react-router-dom";
import './App.css';
import Nav from "./Components/Nav/Nav";
import Title from "./Components/Title/Title";
import ItemList from './Components/ItemList/ItemList';
import Layout from "./Components/Layout/Layout";
//import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App bg-black alert alert-info white-link">
      <Title greeting="Bienvenidos a Fede Bistro Bar" />
        <Layout>

            <Routes>      
                   


              <Route caseSensitive path="ItemList"> <ItemList />  </Route>
                  
                
            </Routes>

        </Layout>
    </div>
  );
}


export default App;
