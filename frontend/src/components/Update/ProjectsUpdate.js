import React, { useEffect, useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { GetResumeAction, ProjectsAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'
import ProjectForm from '../CommonForms/ProjectForm'
const ProjectsUpdate = (props) => {
    const info = props.info
    const modal = props.modal
    const ref = useRef()

    const [data, setData] = useState(
        {
            id:"",
            projectname: "",
            description: ""
        }
    )
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        ref.current.click()
        await dispatch(ProjectsAction(data))
        await dispatch(GetResumeAction())
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        setData({
            id:info._id,
            projectname: info.projectname,
            description: info.description
        })
    },[info])
    return (
        <>
       <AiOutlineEdit  data-bs-toggle="modal" data-bs-target={`#exampleModal${modal}`}/>
            <div className="modal fade" id={`exampleModal${modal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Project</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Projects</h2>
                                <ProjectForm data={data} onChange={onChange}/>
                                <div className="modal-footer">
                                    <button ref={ref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectsUpdate