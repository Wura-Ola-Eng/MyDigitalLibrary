
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Navbar from './components/Navbar';



function App() {
  return (
  
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/about" element={<About />}/>
          <Route  path="/dashboard" element={<Dashboard />}/>
          <Route  path="/upload" element={<Upload />}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
