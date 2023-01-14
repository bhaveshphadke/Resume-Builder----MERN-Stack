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
                        <div class="card mb-3 mx-5">
                            <div class="card-body">
                                <h3 class="card-title">Skills</h3>
                                {
                                    resume.skills.map((item) => {
                                        return (
                                            <>
                                                <p className="my-2 blockquote">Description : {item.description}</p>
                                                <p className="my-2 blockquote">FieProject Name : {item.skill}</p>
                                                <p className="my-2 blockquote">{item._id}</p>

                                            </>
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