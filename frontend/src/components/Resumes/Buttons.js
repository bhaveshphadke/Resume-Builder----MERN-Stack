import React from 'react'
import { useSelector } from 'react-redux'

const Buttons = (props) => {
    // console.log();
    const { resume } = useSelector((state) => state.GetResumeReducer)
    const { data, success, loading } = useSelector((state) => state.BuildResumeReducer)
    return (
        <>
           {
            resume &&

            <div className="conatainer d-flex justify-content-center">

            {
                data ?
                    <a href={data.data.secure_url} className="btn btn-dark mx-3 my-2" target="_blank">
                        Click Here to download the image
                    </a>

                    :

                    <button className='btn btn-dark text-center mx-3 my-2' onClick={props.BuildResume}>Build Resume</button>
            }
        </div>
           }
        </>
    )
}

export default Buttons