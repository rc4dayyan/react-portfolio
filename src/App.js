import React, { useEffect } from 'react';
import './App.css';

function App() {

    useEffect(() => {
        const $ = window.$;
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (
                window.location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                window.location.hostname == this.hostname
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Rifa Dayyan</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.png" alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                </ul>
            </div>
        </nav>

        <div className="container-fluid p-0">
            {/* About */}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Your
                        <span className="text-primary">Name</span>
                    </h1>
                    <div className="subheading mb-5">
                        Bandung, Indonesia ·
                        <a href="mailto:name@email.com">youremail@email.com</a>
                    </div>
                    <p className="lead mb-5">
                        Senior Web Developer specializing in back end development. Experienced with all stages of the development cycle for dynamic web projects. Well- versed in numerous programming languages including HTML5, PHP OOP, JavaScript, ReactJs, CSS, MySQL. Enthusiastic about new technology and happy to learn new technology.
                    </p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />

            {/* Experience */}
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Company name, Indonesia</div>
                            <ul className="fa-ul">
                                <li>
                                    <span className="fa-li"><i className="fas fa-check"></i></span>
                                    Develop project concepts and maintain optimal workflow.
                                </li>
                                <li>
                                    <span className="fa-li"><i className="fas fa-check"></i></span>
                                    Complete detailed programming and development tasks for back end and front end public and internal websites.
                                </li>
                                <li>
                                    <span className="fa-li"><i className="fas fa-check"></i></span>
                                    Carry out quality assurance tests to discover errors and optimize usability.
                                </li>
                            </ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2015 to present</span></div>
                    </div>
                    
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Company name, Indonesia</div>
                            <p>Worked as Junior Web Developer in this company. My role was to understand and execute the client's requirement in efficiently and timely manner.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2010 to 2013</span></div>
                    </div>
                    
                </div>
            </section>
            <hr className="m-0" />

            {/* Education */}
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">University</h3>
                            <div className="subheading mb-3">Technology Education</div>
                            <p>GPA: 3.3</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2010 - 2013</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">University</h3>
                            <div className="subheading mb-3">Information Technology</div>
                            <p>GPA: 3.13</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2005 - 2010</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            
            {/* Skills */}
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">Highlights</div>
                    <ul className="fa-ul">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Strong decision maker
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Complex problem solver
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Innovative
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Service-focused
                        </li>
                    </ul>

                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-php"></i></li>
                        <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    </ul>

                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
        
        </div>
    </div>
  );
}

export default App;
