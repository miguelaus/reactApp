import {Routes, Route, Link} from  "react-router-dom";
import './App.css';
import Title from "./Components/Title/Title";
import ItemList from './Components/ItemList/ItemList';
import Layout from "./Components/Layout/Layout";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
//import Users from "./Components/Users/Users";



function App() {
  return (
    <div className="App bg-black alert alert-info white-link">
      <Title greeting="Bienvenidos a Fede Bistro Bar" />
        
        
            <Layout>

                <Routes>    

                  <Route caseSensitive path="/" element={<Home/>} />   
                  <Route caseSensitive path="/Home" element={<Home/>} />
                  <Route caseSensitive path="/AboutUs" element={<AboutUs/>} />
                  <Route caseSensitive path="/Contact" element={<Contact/>} />  
                  <Route caseSensitive path="/ItemList" element={<ItemList/>}  />

                  <Route path='/' element={ <ItemListContainer saludo={saludo} greeting='hello' />}/>
                  <Route path='/categoria/:categoriaId' element={ <ItemListContainer saludo={saludo} greeting='hello' />}/>
                  <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
                  <Route caseSensitive path="*" element={<NotFound/>} />
                      
                    
                </Routes>
                

              

            </Layout>
          
    </div>
  );
}


export default App;
