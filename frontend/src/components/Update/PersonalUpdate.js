import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { GetResumeAction, PersonalInformationAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'
import PersonalInfoForm from '../CommonForms/PersonalInfoForm'

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
            <div className="modal fade" id="PersonalUpdate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Personal Information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Personal Information</h2>
                                <PersonalInfoForm data={data} onChange={onChange} />
                                <div className="modal-footer">
                                    <button ref={ref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Update</button>
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