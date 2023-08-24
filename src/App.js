import "./App.css";
import Choice from "./components/Choice/Choice";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
      <Choice />
    </div>
  );
}

export default App;
