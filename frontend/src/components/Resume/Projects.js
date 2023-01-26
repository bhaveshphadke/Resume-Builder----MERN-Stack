import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { GetResumeAction, ProjectsAction } from '../../redux/actions/ResumeActions';
const Projects = () => {
    const navigate = useNavigate()
    const { loading, dataLoaded } = useSelector(state => state.ProjectReducer)
    const { resume } = useSelector(state => state.GetResumeReducer)
    const [skiippable, setSkiippable] = useState(false)

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
        setSkiippable(true)
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

    useEffect(() => {
        if ( resume && resume.projects.length > 0) {
            navigate('/resume/skills')
        }
    }, [navigate,resume])
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Projects</h2>
                                <h3 className='text-center my-2'>{headAfterAdd} </h3>
                                <div className="mb-3">
                                    <label htmlFor="projectname" className="form-label">Project Name</label>
                                    <input type="text" value={data.projectname} name='projectname' className="form-control" id="projectname" onChange={onChange} placeholder="Enter Your Project Name" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" value={data.description} name='description' className="form-control" id="description" onChange={onChange} placeholder="Enter Your Projects Description" required />
                                </div>

                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/experience')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Save</button>
                                <button disabled={!skiippable} type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/skills')
                                    dispatch(GetResumeAction())
                                }}>Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Projects