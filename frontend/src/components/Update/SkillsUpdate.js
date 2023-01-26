import React, { useEffect, useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { GetResumeAction, SkillsAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'

const SkillsUpdate = (props) => {
    const info = props.info
    const modal = props.modal
    const ref = useRef()

    const [data, setData] = useState(
        {
            id:"",
            skill: "",
            description: ""
        }
    )
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        ref.current.click()
        await dispatch(SkillsAction(data))
        await dispatch(GetResumeAction())
        
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        setData({
            id:info._id,
            skill: info.skill,
            description: info.description
        })
    }, [info])
    return (
        <>
            <AiOutlineEdit data-bs-toggle="modal" data-bs-target={`#skill${modal}`}/>


            <div class="modal fade" id={`skill${modal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Skills </h2>
                                <div className="mb-3">
                                    <label htmlFor="skill" className="form-label">Skill</label>
                                    <input type="text" value={data.skill} name='skill' className="form-control" id="skill" onChange={onChange} placeholder="Enter Your SKill" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description or Level</label>
                                    <input type="text" value={data.description} name='description' className="form-control" id="description" onChange={onChange} placeholder="eg.  Intermediate" required />
                                </div>

                                <div class="modal-footer">
                            <button ref={ref} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-dark">Update</button>
                        </div>
                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsUpdate