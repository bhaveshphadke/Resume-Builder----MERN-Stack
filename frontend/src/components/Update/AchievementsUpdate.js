import React, { useEffect, useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { AchievementAction, GetResumeAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'
import AchievementForm from '../CommonForms/AchievementForm'

const AchievementsUpdate = (props) => {
    const info = props.info
    const modal = props.modal
    const ref = useRef()
    const [data, setData] = useState(
        {
            id: "",
            achievement: ""
        }
    )
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        ref.current.click()
        await dispatch(AchievementAction(data))
        await dispatch(GetResumeAction())
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setData({
            id: info._id,
            achievement: info.achievement
        })
    }, [info])
    return (
        <>
            <AiOutlineEdit  data-bs-toggle="modal" data-bs-target={`#skill${modal}`}/>

            <div className="modal fade" id={`skill${modal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Achievement</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div classname="modal-body">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Achievement</h2>
                                <AchievementForm data={data} onChange={onChange}/>

                                <div classname="modal-footer">
                            <button ref={ref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-dark">Update</button>
                        </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default AchievementsUpdate