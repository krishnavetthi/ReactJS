import React from "react";
import Navbar from './Navigate';
import Hero from './Hero';
import Cardsection from './Cardsection';
import AppSection from "./AppSection";
import Footer from "./Footer";

const App = () => {
    return(
        <div>
            <h1>Krishna</h1>
            <Navbar/>
            <Hero/>
            <AppSection/>
            <Cardsection/>
            <Footer/>
            
        </div>
    )
}

export default App;