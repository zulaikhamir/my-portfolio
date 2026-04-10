import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <Navbar />
      <main className="mx-auto max-w-4xl space-y-14 px-4 py-6 md:px-6 md:py-8">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
