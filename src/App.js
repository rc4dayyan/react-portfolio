import React, { useState } from 'react';
import './App.css';
import portfolioData from './portfolioData';
import MenuNavbar from './components/MenuNavbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaHeart } from 'react-icons/fa';
import Works from './components/Works';

function App() {

    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

  return (
    <div className="app">
        
        <MenuNavbar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />

        <main>
            <div className="btn-toggle" onClick={()=>handleToggleSidebar(!toggled)}>
                <FaBars />
            </div>
            {/* About */}
            <About portfolioData={portfolioData} />
            <hr className="m-0" />

            {/* Experience */}
            <Experience portfolioData={portfolioData} />
            <hr className="m-0" />

            {/* Education */}
            <Education portfolioData={portfolioData} />
            <hr className="m-0" />
            
            {/* Skills */}
            <Skills portfolioData={portfolioData} />
            <hr className="m-0" />

            {/* work */}
            <Works portfolioData={portfolioData} />


            <footer>
                <small>
                © 2020 made with <FaHeart style={{ color: 'red' }} /> by -{' '}
                <a target="_blank" rel="noopener noreferrer" href="#!">
                    me
                </a>
                </small>
            </footer>
        </main>
    </div>
  );
}

export default App;
