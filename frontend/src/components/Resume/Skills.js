import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { GetResumeAction, SkillsAction } from '../../redux/actions/ResumeActions';
const Skills = () => {
    const navigate = useNavigate()
    const { loading, dataLoaded } = useSelector(state => state.SkillsReducer)
    const { resume } = useSelector(state => state.GetResumeReducer)

    const [data, setData] = useState(
        {
            skill: "",
            description: ""
        }
    )
    const [headAfterAdd, setHeadAfterAdd] = useState("")
    const [skiippable, setSkiippable] = useState(false)
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(SkillsAction(data))
        
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (dataLoaded) {
            setData({
                skill: "",
                description: ""
            })
            setHeadAfterAdd("Send Another Response")
            setSkiippable(true)
        }
    }, [dataLoaded])

    useEffect(() => {
        if (resume && resume.skills.length > 0) {
            navigate('/resume/achievements')
        }
    }, [resume,navigate])
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Skills </h2>
                                <h3 className='text-center my-2'>{headAfterAdd} </h3>
                                <div className="mb-3">
                                    <label htmlFor="skill" className="form-label">Skill</label>
                                    <input type="text" value={data.skill} name='skill' className="form-control" id="skill" onChange={onChange} placeholder="Enter Your SKill" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description or Level</label>
                                    <input type="text" value={data.description} name='description' className="form-control" id="description" onChange={onChange} placeholder="eg.  Intermediate" required />
                                </div>

                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/experience')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Save</button>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/achievements')
                                    dispatch(GetResumeAction())
                                }} disabled={!skiippable}>Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Skills