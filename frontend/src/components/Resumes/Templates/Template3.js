import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './template1.css'

const Template3 = () => {
 
    const { resume, avatar } = useSelector((state) => state.GetResumeReducer)
    const [ProfilePicture, setProfilePicture] = useState("")
    useEffect(() => {
        if (avatar) {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setProfilePicture(reader.result);
                }
            }
            fetch(avatar).then((res) => {
                return res.blob()
            }).then((blob) => {
                reader.readAsDataURL(blob);
            })
        }
    }, [resume, ProfilePicture])
    return (
        <div className='main-container'>
            {
                resume &&


                <>
                    <div className="container" id='container'>
                        {
                            resume.personalInfo &&
                            <div className="header">
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap'
                                }}>
                                    <img src={ProfilePicture} alt="" style={{
                                        height:'80px',
                                        width:'80px',
                                        borderRadius:'50%',
                                        border:'1px solid black',
                                        marginRight:'10px'
                                    }}/>

                                    <div className="name" id="name" style={{
                                        marginRight: '10px',
                                        fontSize: '3.5vmax'
                                    }}>{resume.personalInfo[0].name}</div>
                                    <div className="phone" style={{
                                        marginRight: '10px',
                                        fontSize: '1.6vmax'
                                    }}> +91{resume.personalInfo[0].phone} </div>
                                    <div className="email" style={{
                                        marginRight: '10px',
                                        fontSize: '1.6vmax'
                                    }}> {resume.personalInfo[0].email} </div>
                                </div>
                                <div className="about" style={{
                                    fontSize: '1.6vmax'
                                }}>{resume.personalInfo[0].about}</div>
                            </div>
                        }
                        <hr />
                        <div className="data-container" style={{
                            display: 'flex'
                        }}>
                            <div className="left" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '50%',
                                borderRight: '1px solid black'
                            }}>
                                <div className="career-objective">
                                    <h2 style={{
                                        fontSize: '2.5vmax'
                                    }}>Career Objective</h2>
                                    <p style={{
                                        paddingRight: '20px',
                                        textAign: 'start',
                                        fontSize: '1.6vmax'
                                    }}>{resume.personalInfo[0].careerobjective}</p>
                                    <hr />
                                </div>
                                <div className="education">
                                    <h2 style={{
                                        fontSize: '2.5vmax'
                                    }}>Education</h2>
                                    <p style={{
                                        fontSize: '1.5vmax'
                                    }}><b>College</b> : {resume.education[0].collegename} ({resume.education[0].yearofcompletion})</p>
                                    <p style={{
                                        fontSize: '1.6vmax'
                                    }}><b>CGPA</b> : {resume.education[0].cgpa} </p>
                                    <hr style={{
                                        width: '70%'
                                    }} />
                                    <p style={{
                                        fontSize: '1.5vmax'
                                    }}>{resume.education[0].juniorcollege}</p>
                                    <p style={{
                                        fontSize: '1.5vmax'
                                    }}><b>PCMB</b></p>
                                    <hr />
                                </div>
                                <div className="skills">
                                    <h2 style={{
                                        fontSize: '2.5vmax'
                                    }}>Skills</h2>
                                    <ul style={{
                                        textAlign: 'start',
                                        marginLeft: '-20px'

                                    }}>

                                        {
                                            resume.skills.map((item) => {
                                                return (
                                                    <div key={item._id} style={{
                                                        margin: '10px 0',
                                                        display: 'flex'
                                                    }}>
                                                        <li className="skill" style={{
                                                            margin: '0 5px',
                                                            fontSize: '1.6vmax'
                                                        }}>{item.skill} : </li>
                                                        <p style={{
                                                            margin: '0',
                                                            fontSize: '1.6vmax'
                                                        }}>{item.description}</p>
                                                    </div>
                                                )
                                            })
                                        }

                                    </ul>

                                </div>


                                <div className="personal-details"></div>
                            </div>
                            <div className="right" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '50%',
                                padding: '0 20px',
                                marginTop: '0'
                            }}>
                                <div className="projects">
                                    <h2 style={{
                                        fontSize: '2.5vmax'
                                    }}>Projects</h2>
                                    {
                                        resume.projects.map((item) => {
                                            return (
                                                <div key={item._id} style={{
                                                    paddingRight: '10px'
                                                }}>
                                                    <li className="project-name" style={{
                                                        fontWeight: '500',
                                                        margin: '0',
                                                        fontSize: '1.6vmax'
                                                    }}>{item.projectname}</li>
                                                    <p style={{
                                                        margin: 0,
                                                        marginBottom: '10px',
                                                        fontSize: '1.6vmax'
                                                    }}>{item.description}</p>
                                                </div>
                                            )
                                        })
                                    }

                                    <hr />

                                </div>
                                <div className="achievements">
                                    <h2 style={{
                                        fontSize: '2.5vmax'
                                    }}>Achievements</h2>
                                    {
                                        resume.achievements.map((item) => {
                                            return (
                                                <li key={item._id} style={{
                                                    marginBottom: '5px',
                                                    fontSize: '1.6vmax'
                                                }}>{item.achievement}</li>
                                            )
                                        })
                                    }
                                </div>
                                <hr />

                            </div>
                        </div>
                    </div>
                    <hr />
                </>
            }
        </div>
    )
}

export default Template3