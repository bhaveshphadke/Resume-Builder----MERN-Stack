import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetResumeAction, PersonalInformationAction } from '../../redux/actions/ResumeActions'
import { useNavigate } from 'react-router-dom'
import Loader from '../layout/Loader'
import PersonalInfoForm from '../CommonForms/PersonalInfoForm'
import { toast } from 'react-toastify'
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
        about: "",
        careerobjective:""
    })

    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        if(data.name.length<3){
            toast("Name should be at least 3 chatracter")
            return
        }
        if(data.role.length < 3){
            toast("Role should be at least 3 chatracter")
            return
        }if(data.email.length<3){
            toast("Email should be at least 10 chatracter")
            return
        }
        if(data.phone.length !== 10){
            toast("Phone must be 10 characters")
            return
        }if(data.location.length<5){
            toast("Location should be at least 5 chatracter")
            return
        }
        if(data.about.length < 15){
            toast("About should be at least 15 chatracter")
            return
        }if(data.careerobjective.length<3){
            toast("Career Objective should be at least 3 chatracter")
            return
        }
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
                                <PersonalInfoForm data={data} onChange={onChange}/>
                                <button type="submit" className="btn btn-dark">Save & Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default PersonalInformation