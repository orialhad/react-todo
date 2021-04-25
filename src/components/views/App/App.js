import './App.css';
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainUseReducer from "../Main/Main-useReudcer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainUseReducer/>
            <Footer/>
        </div>
    );
}

export default App;
