import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Technologies from "./Components/Technologies";
import Error from "./Components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./Components/Education";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          

            

            <Route path="/" element={<Home />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/project" element={<Project />} />
            <Route path="/education" element={<Education />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<Error/>} />
            
            
            
            
            

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
