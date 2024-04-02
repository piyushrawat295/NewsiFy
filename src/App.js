import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import lightbackground from './components/lightbackground.jpg';
import darkbackground from './components/darkbackground.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/compo.css';

const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const containerStyle = {
    backgroundImage: `url(${mode === 'light' ? lightbackground : darkbackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div style={containerStyle}>
        <Routes>
          <Route
            path="/"
            element={<News key="/" pagesize={20} country="in" category="general" mode={mode} />}
          />
          <Route
            path="/business"
            element={<News key="business" pagesize={20} country="in" category="business" mode={mode} />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" pagesize={20} country="in" category="entertainment" mode={mode} />}
          />
          <Route
            path="/science"
            element={<News key="science" pagesize={20} country="in" category="science" mode={mode} />}
          />
          <Route
            path="/sports"
            element={<News key="sports" pagesize={20} country="in" category="sports" mode={mode} />}
          />
          <Route
            path="/health"
            element={<News key="health" pagesize={20} country="in" category="health" mode={mode} />}
          />
          <Route
            path="/technology"
            element={<News key="technology" pagesize={20} country="in" category="technology" mode={mode} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;