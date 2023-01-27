import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { AchievementAction, GetResumeAction } from '../../redux/actions/ResumeActions';
import AchievementForm from '../CommonForms/AchievementForm';
const Achievements = () => {
    const navigate = useNavigate()
    const { loading, dataLoaded } = useSelector(state => state.AchievementsReducer)
    const { resume } = useSelector(state => state.GetResumeReducer)


    const [data, setData] = useState(
        {
            achievement: ""
        }
    )
    const [headAfterAdd, setHeadAfterAdd] = useState("")
    const [skiippable, setSkiippable] = useState(false)
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(AchievementAction(data))
        setSkiippable(true)
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (dataLoaded) {
            setData({
                achievement: ""
            })
            setHeadAfterAdd("Send Another Response")
            setSkiippable(true)
        }

    }, [dataLoaded])

    useEffect(() => {
        if (resume && resume.achievements.length > 0) {
            navigate('/')
        }
    },[resume,navigate])
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Achievement </h2>
                                <h3 className='text-center my-2'>{headAfterAdd} </h3>
                               <AchievementForm data={data} onChange={onChange}/>

                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/experience')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Save</button>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/')
                                    dispatch(GetResumeAction())
                                }} disabled={!skiippable}>Submit</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Achievements