import React, { useEffect, useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { GetResumeAction, PersonalInformationAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'


const PersonalInfo = (props) => {
    const info = props.info

    const ref = useRef()
    const [data, setData] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        location: "",
        about: "",
        careerobjective: ""
    })

    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        ref.current.click()
        await dispatch(PersonalInformationAction(data))
        await dispatch(GetResumeAction())
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setData({
            name: info.name,
            role: info.role,
            email: info.email,
            phone: info.phone,
            location: info.location,
            about: info.about,
            careerobjective: info.careerobjective
        })
    }, [info])
    return (
        <>
            <AiOutlineEdit data-bs-toggle="modal" data-bs-target="#PersonalUpdate" />
            <div class="modal fade" id="PersonalUpdate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Personal Information</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="container">
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
                                <div className="mb-3">
                                    <label htmlFor="careerobjective" className="form-label">Carreer Objective</label>
                                    <textarea className="form-control" name='careerobjective' onChange={onChange} value={data.careerobjective} id="about" rows="3" placeholder='eg. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, adipisci!' required></textarea>
                                </div>
                                <div class="modal-footer">
                                    <button ref={ref} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo