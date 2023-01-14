import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetResumeAction, PersonalInformationAction } from '../../redux/actions/ResumeActions'
import { useNavigate } from 'react-router-dom'
import Loader from '../layout/Loader'
const PersonalInformation = () => {
    const navigate = useNavigate()
    const { loading, dataLoaded } = useSelector(state => state.PersonalInformationReducer)
    const { resume } = useSelector(state => state.GetResumeReducer)

    const [data, setData] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        location: "",
        about: ""
    })

    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(PersonalInformationAction(data))
        await dispatch(GetResumeAction())
    }
    useEffect(() => {
        if (dataLoaded) {
            navigate('/resume/education')
        }

    }, [dataLoaded, navigate])

    useEffect(() => {
        if (resume && resume.personalInfo.length > 0) {
            navigate('/resume/education')
        }
    },[navigate,resume])
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Personal Information</h2>
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">Name</label>
                                    <input type="text" value={data.name} name='name' className="form-control" id="name" onChange={onChange} placeholder="Enter Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" value={data.email} name='email' className="form-control" id="email" aria-describedby="email" onChange={onChange} placeholder="eg. example@domain.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <input type="text" value={data.role} name='role' className="form-control" id="role" onChange={onChange} placeholder="eg. student" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" value={data.phone} name='phone' className="form-control" id="phone" onChange={onChange} placeholder="eg. +91 000 000 0000" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">Location</label>
                                    <input type="text" value={data.location} name='location' className="form-control" id="location" onChange={onChange} placeholder="eg. Navi Mumbai, Panvel 410206" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="about" className="form-label">About</label>
                                    <textarea className="form-control" name='about' onChange={onChange} value={data.about} id="about" rows="3" placeholder='eg. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, adipisci!' required></textarea>
                                </div>

                                <button type="submit" className="btn btn-dark">Save & Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default PersonalInformation