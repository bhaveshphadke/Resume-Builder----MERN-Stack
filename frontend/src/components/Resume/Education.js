import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EducationAction } from '../../redux/actions/ResumeActions';
import Loader from '../layout/Loader'
const Education = () => {
    const navigate = useNavigate()
    const { loading, success, dataLoaded } = useSelector(state => state.EducationReducer)
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

    }

    useEffect(() => {
        if (dataLoaded) {
            navigate('/resume/experience')
        }
    }, [dataLoaded])

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
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">School Name</label>
                                    <input type="text" value={data.schoolname} name='schoolname' className="form-control" id="schoolname" onChange={onChange} placeholder="Enter Your School Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="text" className="form-label">Junior College</label>
                                    <input type="text" value={data.juniorcollege} name='juniorcollege' className="form-control" id="juniorcollege" aria-describedby="juniorcollege" onChange={onChange} placeholder="eg. example@domain.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">College Name</label>
                                    <input type="text" value={data.collegename} name='collegename' className="form-control" id="collegename" onChange={onChange} placeholder="eg. student" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">CGPA</label>
                                    <input type="text" value={data.cgpa} name='cgpa' className="form-control" id="cgpa" onChange={onChange} placeholder="eg. +91 000 000 0000" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">Year Of Completion</label>
                                    <input type="text" value={data.yearofcompletion} name='yearofcompletion' className="form-control" id="yearofcompletion" onChange={onChange} placeholder="eg. Navi Mumbai, Panvel 410206" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="degree" className="form-label">Year Of Completion</label>
                                    <input type="text" value={data.degree} name='degree' className="form-control" id="degree" onChange={onChange} placeholder="eg. Navi Mumbai, Panvel 410206" required />
                                </div>
                                <button TYPE="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/personalinformation')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Education