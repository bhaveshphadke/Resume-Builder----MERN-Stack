import React, { useEffect, useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { ExperienceAction, GetResumeAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'
import ExperienceForm from '../CommonForms/ExperienceForm'
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

            <div className="modal fade" id={`ExperienceModal${modal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Experience</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Experince</h2>
                                <ExperienceForm data={data} onChange={onChange}/>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceUpdate