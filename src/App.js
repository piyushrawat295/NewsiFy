
// App.js
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import lightbackground from './components/lightbackground.jpg';
import darkbackground from './components/darkbackground.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/compo.css';

class App extends Component {
  state = {
    mode: 'light', // Initial mode
  };

  toggleMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { mode } = this.state;

    const containerStyle = {
      backgroundImage: `url(${mode === 'light' ? lightbackground : darkbackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Changed from 'center' to 'flex-start'
      justifyContent: 'center',
    };

    return (
      <Router>
        <Navbar mode={mode} toggleMode={this.toggleMode} />
        <div style={containerStyle}>
          <Routes>
          <Route path="/" element={<News key="/" pagesize={20} country="in" category="general" mode={this.state.mode} />} />
            <Route path="/business" element={<News key="business" pagesize={20} country="in" category="business" mode={this.state.mode} />} />
            <Route path="/entertainment" element={<News key="entertainment" pagesize={20} country="in" category="entertainment" mode={this.state.mode} />} />
            <Route path="/science" element={<News key="science" pagesize={20} country="in" category="science"mode={this.state.mode}  />} />
            <Route path="/sports" element={<News key="sports" pagesize={20} country="in" category="sports" mode={this.state.mode}/>} />
            <Route path="/health" element={<News key="health" pagesize={20} country="in" category="health" mode={this.state.mode}/>} />
            <Route path="/technology" element={<News key="technology" pagesize={20} country="in" category="technology"mode={this.state.mode} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
