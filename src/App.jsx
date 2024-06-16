


// src/App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutUs from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Insights from './pages/Insight';
import OurWork from './pages/Ourwork.jsx';
import Nav from './components/nav/Nav.jsx';




const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
    
  );
}

export default App;