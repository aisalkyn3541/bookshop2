
import './App.css';
import Footer from './components/Footer/Index';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
 
import Hero from './components/Hero';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={'/'}element={<Hero/>}/>
      </Routes>
      <Hero/> 
      <Footer/>
    </>

import "./App.css";
import Choice from "./components/Choice/Choice";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from './components/About/About'



function App() {
  return (
    <div className="App">

      <Header/>
      <Hero/>

      <Header />
      <Hero />
      <Footer />
      <Choice />

      <About/>
      <Footer/>
    </div>
  );
}

export default App;
