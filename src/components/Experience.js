import React from 'react';

const Experience = ({portfolioData}) => {
    return ( 
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                {
                    portfolioData.experiences && portfolioData.experiences
                    .map((experience, index) => {
                        return (
                            <div key={index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{experience.title}</h3>
                                    <div className="subheading mb-3">{experience.companyName}</div>
                                    <ul className="fa-ul">
                                        {
                                            experience.description && experience.description
                                            .map((note, key) => {
                                                return (
                                                    <li key={key}>
                                                        <span className="fa-li"><i className="fas fa-check"></i></span>
                                                        {note.descNote}
                                                    </li>
                                                )
                                                
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">{experience.periode}</span></div>
                            </div>
                        )
                    })
                }
                
                
                
            </div>
        </section>
     );
}
 
export default Experience;