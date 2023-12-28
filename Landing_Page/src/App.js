import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes, // Import the Routes component
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Home />
            <Blog />
            <Services />
            <Contact />
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
