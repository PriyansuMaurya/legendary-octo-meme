import "./App.css";
import Intro from "./components/Intro";
import Sidebar from "./components/Sidebar";
// import ContactMe from './components/ContactMe';
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  
  const [bg, setBg] = useState("red");

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar setBg={setBg} />
      </header>
  
      <div className="under-construction" style={{ backgroundColor: bg }}>
        <Intro />
        🔨
        <p>Under Construction</p>
      </div>
      {/* <ContactMe/> */}
      <Footer />
    </div>
  );
}

export default App;
