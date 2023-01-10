import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectsAction } from '../../redux/actions/ResumeActions';
const Projects = () => {
    const navigate = useNavigate()
    const { loading, success, dataLoaded } = useSelector(state => state.ProjectReducer)
    const [data, setData] = useState(
        {
            projectname: "",
            description: ""
        }
    )
    const [headAfterAdd, setHeadAfterAdd] = useState("")
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(ProjectsAction(data))
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (dataLoaded) {
            setData({
                projectname: "",
                description: ""
            })
            setHeadAfterAdd("Send Another Response")
        }
    }, [dataLoaded])
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Projects ( OPTIONAL ) </h2>
                                <h3 className='text-center my-2'>{headAfterAdd} </h3>
                                <div className="mb-3">
                                    <label htmlFor="projectname" className="form-label">Field</label>
                                    <input type="text" value={data.projectname} name='projectname' className="form-control" id="projectname" onChange={onChange} placeholder="Enter Your Name" required />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Field</label>
                                    <input type="text" value={data.description} name='description' className="form-control" id="description" onChange={onChange} placeholder="Enter Your Name" required />
                                </div>
                                
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/experience')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Add</button>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/skills')
                                }}>Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Projects