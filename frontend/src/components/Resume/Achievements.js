import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { AchievementAction, ProjectsAction, SkillsAction } from '../../redux/actions/ResumeActions';
const Achievements = () => {
    const navigate = useNavigate()
    const { loading, success, dataLoaded } = useSelector(state => state.AchievementsReducer)
    const [data, setData] = useState(
        {
            achievement:""
        }
    )
    const [headAfterAdd, setHeadAfterAdd] = useState("")
    const [skiippable, setSkiippable] = useState(false)
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(AchievementAction(data))
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        console.log(1);
        if (dataLoaded) {
            setData({
                achievement:""
            })
            setHeadAfterAdd("Send Another Response")
            setSkiippable(true)
            console.log(!skiippable);
        }
    }, [dataLoaded])
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Achievement </h2>
                                <h3 className='text-center my-2'>{headAfterAdd} </h3>
                                <div className="mb-3">
                                    <label htmlFor="achievement" className="form-label">achievement</label>
                                    <input type="text" value={data.achievement} name='achievement' className="form-control" id="achievement" onChange={onChange} placeholder="Enter Your Name" required />
                                </div>
                                
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/experience')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Add</button>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/templates')
                                }} disabled={!skiippable}>Submit</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Achievements