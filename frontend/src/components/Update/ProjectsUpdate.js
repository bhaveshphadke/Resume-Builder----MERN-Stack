import React, { useEffect, useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { GetResumeAction, ProjectsAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'
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
            <div class="modal fade" id={`exampleModal${modal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Projects</h2>
                                <div className="mb-3">
                                    <label htmlFor="projectname" className="form-label">Project Name</label>
                                    <input type="text" value={data.projectname} name='projectname' className="form-control" id="projectname" onChange={onChange} placeholder="Enter Your Project Name" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" value={data.description} name='description' className="form-control" id="description" onChange={onChange} placeholder="Enter Your Projects Description" required />
                                </div>


                                <div class="modal-footer">
                                    <button ref={ref} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
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