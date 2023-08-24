import './App.css';
import Footer from './components/Footer/Index';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About/About'



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
