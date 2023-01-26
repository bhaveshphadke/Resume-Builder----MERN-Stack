import React, { useEffect, useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { ExperienceAction, GetResumeAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'
const ExperienceUpdate = (props) => {
    const info = props.info
    const modal = props.modal
    const ref = useRef()

    const [data, setData] = useState(
        {
            id: "",
            field: "",
            years: "",
            role: "",
            description: ""
        }
    )
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        ref.current.click()
        await dispatch(ExperienceAction(data))
        await dispatch(GetResumeAction())

    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setData({
            id: info._id,
            field: info.field,
            years: info.years,
            role: info.role,
            description: info.description
        })
    }, [info])
    return (
        <>
            <AiOutlineEdit data-bs-toggle="modal" data-bs-target={`#ExperienceModal${modal}`} />

            <div class="modal fade" id={`ExperienceModal${modal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Experinece ( OPTIONAL ) </h2>
                                <div className="mb-3">
                                    <label htmlFor="field" className="form-label">Working in</label>
                                    <input type="text" value={data.field} name='field' className="form-control" id="field" onChange={onChange} placeholder="eg. IT Company(name of company)" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="years" className="form-label">Years of Working</label>
                                    <input type="text" value={data.years} name='years' className="form-control" id="years" onChange={onChange} placeholder="eg. 5" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Job Type(role)</label>
                                    <input type="text" value={data.role} name='role' className="form-control" id="role" onChange={onChange} placeholder="eg. Data Analyst" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Detail</label>
                                    <input type="text" value={data.description} name='description' className="form-control" id="description" aria-describedby="description" onChange={onChange} placeholder="eg.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore non sequi sint?" />
                                </div>
                                <div class="modal-footer">
                                    <button ref={ref} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-dark">Save changes</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceUpdate