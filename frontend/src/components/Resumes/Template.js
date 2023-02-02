import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BuldResumeAction } from '../../redux/actions/BuildActions'
import './template.css'
import Loader from '../layout/Loader'
import { useParams } from 'react-router-dom'
import Template1 from './Templates/Template1'
import Buttons from './Buttons'
import Template2 from './Templates/Template2'
import Template3 from './Templates/Template3'
import Template4 from './Templates/Template4'
const Template = (props) => {
    console.log(props);
    const { resume } = useSelector((state) => state.GetResumeReducer)
    const { loading } = useSelector((state) => state.BuildResumeReducer)
    const dispatch = useDispatch()
    const BuildResume = () => {
        dispatch(BuldResumeAction(document.getElementById('temp-container').innerHTML))
    }

    const { number } = useParams()
    const [Template, setTemplate] = useState(<Template1 />)
    useEffect(() => {
        if (number === '1') {
            setTemplate(<Template1 />)
        }
        else if (number === '2') {
            setTemplate(<Template2 />)
        }
        else if (number === '3') {
            setTemplate(<Template3 />)
        }
        else if (number === '4') {
            setTemplate(<Template4 />)
        }
        else {
            setTemplate(<Template1 />)
        }
    }, [number])
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        {
                            resume &&
                            <>
                                <Buttons BuildResume={BuildResume} />
                                <div id='temp-container'>
                                    {Template}
                                </div>
                            </>
                        }
                    </>
            }
        </>
    )
}

export default Template