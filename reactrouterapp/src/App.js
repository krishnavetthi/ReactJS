import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"


import { Outlet } from "react-router-dom";

function App() {
  return ( 
  <>
    <Navbar/>

    <Outlet/> 
    <Cards/>

    <Footer/>
  
  </>
  );
}

export default App;