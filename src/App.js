import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <Header />
      </div>
      <div className="about">
        <Main />
      </div>
      <div className="work">
        <Projects />
      </div>
      <div className="contact">
        <Footer />
      </div>
    </div>
  )
}

export default App;
