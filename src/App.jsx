import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Projects from './pages/Projects';
import About from './pages/About';


function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
