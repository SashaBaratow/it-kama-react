import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import MainSection from "./components/main/MainSection";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
     <Header/>
     <MainSection/>
     <Footer/>
    </div>
  );
}


export default App;
