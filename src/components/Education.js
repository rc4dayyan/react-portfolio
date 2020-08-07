import React from 'react'

const Education = ({portfolioData}) => {
    return ( 
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                {
                    portfolioData.education && portfolioData.education
                    .map((edu, index) => {
                        return (
                            <div key={index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{edu.school}</h3>
                                    <div className="subheading mb-3">{edu.areaStudy}</div>
                                    <p>GPA: {edu.gpa}</p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">{edu.periode}</span></div>
                            </div>
                        )

                    })
                }
            </div>
        </section>
     );
}
 
export default Education;