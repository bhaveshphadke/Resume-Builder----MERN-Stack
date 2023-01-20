import React from 'react'
import { useSelector } from 'react-redux'

const Skills = () => {
    const { resume } = useSelector(state => state.GetResumeReducer)
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
                                {
                                    resume.skills.map((item) => {
                                        return (
                                            <div key={item._id}>
                                                <p className="my-2 blockquote">Description : {item.description}</p>
                                                <p className="my-2 blockquote">FieProject Name : {item.skill}</p>
                                                <p className="my-2 blockquote">{item._id}</p>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Skills