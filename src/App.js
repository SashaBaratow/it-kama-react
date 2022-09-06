import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import MainSection from "./components/main/MainSection";
import Header from "./components/header/Header";

function App(props) {
  return (
    <div className="App">
     <Header/>
     <MainSection state={props.state} />
     <Footer/>
    </div>
  );
}
export default App;
