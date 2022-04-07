import React from 'react'
import './App.css';
import MainLayout from './layout/MainLayout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <MainLayout />
    </Router>
    </>

    );
}

export default App;
