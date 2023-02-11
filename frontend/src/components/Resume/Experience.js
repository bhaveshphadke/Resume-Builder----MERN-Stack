import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { ExperienceAction, GetResumeAction } from '../../redux/actions/ResumeActions';
import ExperienceForm from '../CommonForms/ExperienceForm';
import { toast } from 'react-toastify';
const Experience = () => {
    const navigate = useNavigate()
    const { loading, dataLoaded } = useSelector(state => state.ExperienceReducer)
    const { resume } = useSelector(state => state.GetResumeReducer)

    const [data, setData] = useState(
        {
            field: "",
            years: "",
            role: "",
            description: ""
        }
    )
    const [headAfterAdd, setHeadAfterAdd] = useState("")
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        if(data.field.length<4){
            toast("Company name should be at least 4 chatracter")
            return
        }
        if(data.years === ""){
            toast("Years cannot be empty")
            return
        }
        if(data.role.length<5){
            toast("Role should be atleast 5 characters")
            return
        }
        if(data.description.length < 8){
            toast("description should be at least greater than 8")
            return
        }
        await dispatch(ExperienceAction(data))
        
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (dataLoaded) {
            setData({
                field: "",
                years: "",
                role: "",
                description: ""
            })
            setHeadAfterAdd("Send Another Response")
        }

    }, [dataLoaded])

    useEffect(() => {
        if (resume &&( resume.projects.length > 0 || resume.experience.length > 0)) {
            navigate('/resume/projects')
        }
    }, [navigate,resume])
    
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Experinece ( OPTIONAL ) </h2>
                                <h3 className='text-center my-2'>{headAfterAdd} </h3>
                                <ExperienceForm data={data} onChange={onChange}/>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/education')
                                }}>Back</button>
                                <button type="submit" className="btn btn-dark me-2">Save</button>
                                <button type="button" className="btn btn-dark me-2" onClick={() => {
                                    navigate('/resume/projects')
                                    dispatch(GetResumeAction())
                                }}>Next</button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default Experience