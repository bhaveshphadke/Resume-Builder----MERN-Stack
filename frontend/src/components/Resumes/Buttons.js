import React from 'react'
import { useSelector } from 'react-redux'

const Buttons = (props) => {
    const { resume } = useSelector((state) => state.GetResumeReducer)
    const { data} = useSelector((state) => state.BuildResumeReducer)

    return (
        <>
            {
                resume &&

                <div className="conatainer d-flex justify-content-center" style={{
                    flexDirection: 'column'
                }}>

                    <button className='btn btn-dark text-center mx-3 my-2' onClick={props.BuildResume}>Build Resume</button>
                    {
                        data &&
                        <a href={data.data.secure_url} rel="noreferrer" className="btn btn-dark mx-3 my-2" target="_blank">
                            Click Here to download the image
                        </a>

                    }
                </div>
            }
        </>
    )
}

export default Buttons