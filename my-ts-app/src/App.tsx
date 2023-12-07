import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigationComponent/Navigation'
import Home from './components/homeComponent/Home'
import About from './components/aboutComponent/About'
import ErrorPage from './components/404Component/404'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </header>
        </div>
    )
}

export default App
