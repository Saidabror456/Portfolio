import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Start from "./components/Start/start";
import About from "./components/About/about";
import Projects from "./components/Projects/project";
import Contacts from "./components/Contacts/contacts";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import Footer from "./components/Footer/footer";
import './App.css'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
