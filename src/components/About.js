import React from 'react';

const About = ({portfolioData}) => {
    return ( 
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    {portfolioData.firstname}
                    <span className="text-primary">{portfolioData.lastname}</span>
                </h1>
                <div className="subheading mb-5">
                    {portfolioData.city}, {portfolioData.country} ·
                    <a href="mailto:name@email.com">{portfolioData.email}</a>
                </div>
                <p className="lead mb-5">
                    {portfolioData.aboutDescription}
                </p>
                <div className="social-icons">
                    {
                        portfolioData.socialLinks && portfolioData.socialLinks
                        .map((social, index) => {
                            return (
                                <a key={index} className="social-icon" href={social.url}><i className={"fab "+ social.className}></i></a>
                                
                            )
                        })
                    }
                </div>
            </div>
        </section>
            
    );
}
 
export default About;