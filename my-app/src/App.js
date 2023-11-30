import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import ErrorPage from './components/404.js';
import Navigation from './components/Navigation.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
                <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='*' element={< ErrorPage />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
