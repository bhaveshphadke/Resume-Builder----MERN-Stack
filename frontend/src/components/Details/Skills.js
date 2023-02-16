import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SkillsUpdate from '../Update/SkillsUpdate'

const Skills = () => {
    const { resume } = useSelector(state => state.GetResumeReducer)
    const navigate = useNavigate()
    return (
        <>
            {
                resume &&

                <>
                    {
                        resume.skills &&
                        <div className="card mb-3 mx-5">
                            <div className="card-body">
                                <h3 className="card-title">Skills</h3>
                                <ul>

                                    {
                                        resume.skills.map((item) => {
                                            return (
                                                <li key={item._id}>
                                                    <p className="my-2 blockquote">Skill : {item.skill} <SkillsUpdate info={item} modal={item._id} /></p>
                                                    <p className="my-2 blockquote">Level : {item.description}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <button className="btn btn-dark" onClick={()=>{
                                    navigate('/update/resume/skills')
                                }}>Add</button>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Skills