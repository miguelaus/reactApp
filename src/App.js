import {Routes, Route, Link} from  "react-router-dom";
import './App.css';
import Nav from "./Components/Nav/Nav";
import Title from "./Components/Title/Title";
import ItemList from './Components/ItemList/ItemList';
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Users from "./Components/Users/Users";
//import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


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
                  <Route caseSensitive path="*" element={<NotFound/>} />
                      
                    
                </Routes>

              <Users />

            </Layout>
    </div>
  );
}


export default App;
