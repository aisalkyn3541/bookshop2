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
  );
}

export default App;
