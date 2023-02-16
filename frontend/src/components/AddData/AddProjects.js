import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { GetResumeAction, ProjectsAction } from '../../redux/actions/ResumeActions';
import ProjectForm from '../CommonForms/ProjectForm';
import { toast } from 'react-toastify';
const AddProjects = () => {
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
        if(data.projectname.length<3){
            toast("Project name should be at least 3 chatracter")
            return
        }
        if(data.description.length < 15){
            toast("Description should be at least 15 chatracter")
            return
        }
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
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Projects</h2>
                                <h3 className='text-center my-2'>{headAfterAdd} </h3>
                                <ProjectForm data={data} onChange={onChange}/>


                                <button type="submit" className="btn btn-dark me-2">Save</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default AddProjects