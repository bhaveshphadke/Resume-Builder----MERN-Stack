import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EducationAction, GetResumeAction } from '../../redux/actions/ResumeActions';
import EducationForm from '../CommonForms/EducationForm';
import Loader from '../layout/Loader'
const Education = () => {
    const navigate = useNavigate()
    const { loading, dataLoaded } = useSelector(state => state.EducationReducer)
    const { resume } = useSelector(state => state.GetResumeReducer)


    const [data, setData] = useState({
        schoolname: "",
        juniorcollege: "",
        collegename: "",
        cgpa: "",
        yearofcompletion: "",
        degree: ""
    })

    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(EducationAction(data))
        await dispatch(GetResumeAction())

    }
    useEffect(() => {
        if (dataLoaded) {
            navigate('/resume/experience')
        }
    }, [dataLoaded,navigate])

    useEffect(() => {
        if (resume && resume.education.length > 0) {
            navigate('/resume/experience')
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
                                <h2 className='text-center my-2'>Education</h2>
                                <EducationForm data={data} onChange={onChange}/>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/personalinformation')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Save & Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Education