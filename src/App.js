import React, { useEffect } from 'react';
import './App.css';
import portfolioData from './portfolioData';
import MenuNavbar from './components/MenuNavbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {

    useEffect(() => {
        const $ = window.$;
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (
                window.location.pathname.replace(/^\//, "") ===
                    this.pathname.replace(/^\//, "") &&
                window.location.hostname === this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top,
                        },
                        1000,
                        "easeInOutExpo"
                    );
                    return false;
                }
            }
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $(".js-scroll-trigger").click(function () {
            $(".navbar-collapse").collapse("hide");
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $("body").scrollspy({
            target: "#sideNav",
        });
    }, [])
  return (
    <div className="App">
        <MenuNavbar portfolioData={portfolioData} />

        <div className="container-fluid p-0">
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
        
        </div>
    </div>
  );
}

export default App;
