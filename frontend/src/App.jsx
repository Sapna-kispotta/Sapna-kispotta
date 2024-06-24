import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from 'F:\resturantweb\frontend\src\pages\home';
import NotFound from 'F:\resturantweb\frontend\src\pages\notfound\notfound.jsx';
import Success from 'F:\resturantweb\frontend\src\pages\Success\Success.jsx';
import './App.css'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
