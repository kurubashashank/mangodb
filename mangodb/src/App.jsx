import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from "react-router-dom";
import './App.css'
import Signup from './signup'
import Login from './login';
import Dashboard from './Dashboard';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>


      </Routes>
      
      </Router>
    </>
  )
}

export default App
