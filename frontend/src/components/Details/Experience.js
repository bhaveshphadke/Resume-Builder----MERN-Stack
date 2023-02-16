import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ExperienceUpdate from '../Update/ExperienceUpdate'

const Experience = () => {
    const navigate = useNavigate()
    const { resume } = useSelector(state => state.GetResumeReducer)
    return (
        <>
            {
                resume &&
                <>

                    {
                        resume.experience &&
                        <div className="card mb-3 mx-5">
                            <div className="card-body">
                                <h3 className="card-title">Experience</h3>
                                <ul>

                                    {
                                        resume.experience.map((item) => {
                                            return (
                                                <li key={item._id}>
                                                    <p className="my-2 blockquote">Description : {item.description} <ExperienceUpdate info={item} modal={item._id} /></p>
                                                    <p className="my-2 blockquote">Field : {item.field}</p>
                                                    <p className="my-2 blockquote">Role : {item.role}</p>
                                                    <p className="my-2 blockquote">Years : {item.years}</p>

                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            <button className='btn btn-dark' onClick={() => {
                                navigate('/update/resume/experience')
                            }}>Add</button>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Experience