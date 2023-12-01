import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
// import MoviePage from './components/MoviePage';
import ErrorPage from './components/404'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          {/* <Route path='/:movieId' element={< MoviePage />} /> */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
