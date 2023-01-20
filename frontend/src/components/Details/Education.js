import React from 'react'
import { useSelector } from 'react-redux'

const Education = () => {
    const { resume } = useSelector(state => state.GetResumeReducer)
    return (
        <>
            {
                resume &&
                <>
                    <div className="card mb-3 mx-5">
                        <div className="card-body">
                            <h3 className="card-title">Education</h3>
                            {
                                resume.education.map((item) => {
                                    return (
                                        <div key={item._id}>
                                            <p className="my-2 blockquote">CGPA : {item.cgpa}</p>
                                            <p className="my-2 blockquote">Junior College : {item.juniorcollege}</p>
                                            <p className="my-2 blockquote">Year Of Completion/Expected : {item.yearofcompletion}</p>
                                            <p className="my-2 blockquote">School Name : {item.schoolname}</p>
                                            <p className="my-2 blockquote">Degree : {item.degree}</p>
                                            <p className="my-2 blockquote">{item._id}</p>
                                            <p className="my-2 blockquote">College Name : {item.collegename}</p>

                                      </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Education