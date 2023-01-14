import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { ExperienceAction, GetResumeAction } from '../../redux/actions/ResumeActions';
const Experience = () => {
    const navigate = useNavigate()
    const { loading, dataLoaded } = useSelector(state => state.ExperienceReducer)
    const { resume } = useSelector(state => state.GetResumeReducer)

    const [data, setData] = useState(
        {
            field: "",
            years: "",
            role: "",
            description: ""
        }
    )
    const [headAfterAdd, setHeadAfterAdd] = useState("")
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(ExperienceAction(data))
        
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (dataLoaded) {
            setData({
                field: "",
                years: "",
                role: "",
                description: ""
            })
            setHeadAfterAdd("Send Another Response")
        }

    }, [dataLoaded])

    useEffect(() => {
        if (resume &&( resume.projects.length > 0 || resume.experience.length > 0)) {
            navigate('/resume/projects')
        }
    }, [navigate,resume])
    
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Experinece ( OPTIONAL ) </h2>
                                <h3 className='text-center my-2'>{headAfterAdd} </h3>
                                <div className="mb-3">
                                    <label htmlFor="field" className="form-label">Field</label>
                                    <input type="text" value={data.field} name='field' className="form-control" id="field" onChange={onChange} placeholder="Enter Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="years" className="form-label">Years of Working</label>
                                    <input type="text" value={data.years} name='years' className="form-control" id="years" onChange={onChange} placeholder="Enter Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <input type="text" value={data.role} name='role' className="form-control" id="role" onChange={onChange} placeholder="Enter Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Detail</label>
                                    <input type="text" value={data.description} name='description' className="form-control" id="description" aria-describedby="description" onChange={onChange} placeholder="eg. example@domain.com" />
                                </div>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/education')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Save</button>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/projects')
                                    dispatch(GetResumeAction())
                                }}>Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Experience