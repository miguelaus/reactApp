import {BrowserRouter, Routes, Route} from  "react-router-dom";
import './App.css';
import Title from "./Components/Title/Title";
import Layout from "./Components/Layout/Layout";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";



function App() {
  
  return (
    <div className="App bg-black alert alert-info white-link">
       
 
              <Title greeting="Bienvenidos a Fede Bistro Bar" />
              
                <Layout />

                <Routes>
                  <Route path="/home" element={ <Home />} />      
                  <Route path='/aboutUs' element={ <AboutUs   />}/>
                  <Route path='/contact' element={ <Contact />}/>     
                  <Route path='/' element={ <ItemListContainer  />}/>
                  <Route path='/categoria/:categoriaId' element={ <ItemListContainer  />}/>
                  <Route path='/item/:itemId' element={ <ItemDetailContainer  />}/>
                  <Route path='/cart' element={ <Cart/>}/>
                </Routes>

              <Footer />

        
    </div>
    
  );
}


export default App;
