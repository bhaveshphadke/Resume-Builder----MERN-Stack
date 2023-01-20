import React from 'react'
import { useSelector } from 'react-redux'

const Experience = () => {
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
                                {
                                    resume.experience.map((item) => {
                                        return (
                                                <div key={item._id}>
                                                <p className="my-2 blockquote">Description : {item.description}</p>
                                                <p className="my-2 blockquote">Field : {item.field}</p>
                                                <p className="my-2 blockquote">Role : {item.role}</p>
                                                <p className="my-2 blockquote">{item._id}</p>
                                                <p className="my-2 blockquote">Years : {item.years}</p>
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

export default Experience