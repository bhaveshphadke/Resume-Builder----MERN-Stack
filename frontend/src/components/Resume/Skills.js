import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectsAction, SkillsAction } from '../../redux/actions/ResumeActions';
const Skills = () => {
    const navigate = useNavigate()
    const { loading, success, dataLoaded } = useSelector(state => state.SkillsReducer)
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
        console.log(1);
        if (dataLoaded) {
            setData({
                skill: "",
                description: ""
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
                                <h2 className='text-center my-2'>Skills </h2>
                                <h3 className='text-center my-2'>{headAfterAdd} </h3>
                                <div className="mb-3">
                                    <label htmlFor="skill" className="form-label">Skill</label>
                                    <input type="text" value={data.skill} name='skill' className="form-control" id="skill" onChange={onChange} placeholder="Enter Your Name" required />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Field</label>
                                    <input type="text" value={data.description} name='description' className="form-control" id="description" onChange={onChange} placeholder="Enter Your Name" required />
                                </div>
                                
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/experience')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Add</button>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/achievements')
                                }} disabled={!skiippable}>Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Skills