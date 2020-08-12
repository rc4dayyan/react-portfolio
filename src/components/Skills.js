import React from 'react'

const Skills = ({portfolioData}) => {
    return ( 
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>

                <div className="subheading mb-3">Highlights</div>
                <ul className="fa-ul">
                    {
                        portfolioData.skills.highlight && portfolioData.skills.highlight
                        .map((highlight, index)=>{
                            return (
                                <li key={index}>
                                    <span className="fa-li"><i className="fas fa-check"></i></span>
                                    {highlight.desc}
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    {
                        portfolioData.skills.programLanguage && portfolioData.skills.programLanguage
                        .map((lang, index)=>{
                            return (
                                <li key={index} className="list-inline-item"><i className={"fab "+ lang.classname}></i></li>
                            )
                        })
                    }
                </ul>
                
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    {
                        portfolioData.skills.workflow && portfolioData.skills.workflow
                        .map((flow, index)=>{
                            return (
                                <li key={index}>
                                    <span className="fa-li"><i className="fas fa-check"></i></span>
                                    {flow.desc}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
     );
}
 
export default Skills;