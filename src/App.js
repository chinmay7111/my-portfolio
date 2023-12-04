import './App.css';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Technologies from './Components/Technologies';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <Navbar/>
    <Education/>
    <Technologies/>
    <Project/>
    <Footer/>
    </>
  );
}

export default App;