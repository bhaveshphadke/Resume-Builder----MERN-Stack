import React from 'react'
import { useSelector } from 'react-redux'

const Personal = () => {

    const { resume } = useSelector(state => state.GetResumeReducer)
    return (
        <>
            {
                resume &&
                <>
                    <div class="card mb-3 mx-5">
                        <div class="card-body">
                            <h3 class="card-title">Personal Information</h3>
                            {
                                resume.personalInfo.map((item) => {
                                    return (
                                        <>
                                            <p className="my-2 blockquote">Name : {item.name}</p>
                                            <p className="my-2 blockquote">Email : {item.email}</p>
                                            <p className="my-2 blockquote">About : {item.about}</p>
                                            <p className="my-2 blockquote">Role : {item.role}</p>
                                            <p className="my-2 blockquote">Phone : {item.phone}</p>
                                            <p className="my-2 blockquote">{item._id}</p>
                                            <p className="my-2 blockquote">Location : {item.location}</p>

                                        </>
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

export default Personal