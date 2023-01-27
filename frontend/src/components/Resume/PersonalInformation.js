import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetResumeAction, PersonalInformationAction } from '../../redux/actions/ResumeActions'
import { useNavigate } from 'react-router-dom'
import Loader from '../layout/Loader'
import PersonalInfoForm from '../CommonForms/PersonalInfoForm'
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