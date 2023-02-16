import React from 'react'
import { useSelector } from 'react-redux'
import PersonalUpdate from '../Update/PersonalUpdate'
import { useNavigate } from 'react-router-dom'
const Personal = () => {
    const navigate = useNavigate()
    const { resume } = useSelector(state => state.GetResumeReducer)
    return (
        <>
            {
                resume &&
                <>
                    <div className="card mb-3 mx-5">
                        <div className="card-body">
                
                           <div className='d-flex align-items-center'>
                           <h3 className="card-title mx-2">Personal Information</h3>
                            <PersonalUpdate info={resume.personalInfo[0]} /> 
                           </div>
                            {
                                resume.personalInfo.map((item) => {
                                    return (
                                        <div key={item._id}>
                                            <p className="my-2 blockquote">Name : {item.name}</p>
                                            <p className="my-2 blockquote">Email : {item.email}</p>
                                            <p className="my-2 blockquote">About : {item.about}</p>
                                            <p className="my-2 blockquote">Role : {item.role}</p>
                                            <p className="my-2 blockquote">Phone : {item.phone}</p>
                                            <p className="my-2 blockquote">Location : {item.location}</p>

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

export default Personal