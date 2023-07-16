import React from 'react'
import './App.css';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <MainPage />}></Route>
        </Routes>
      </Router>

    </>
    
  );
}

export default App;
