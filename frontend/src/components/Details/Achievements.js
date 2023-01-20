import React from 'react'
import { useSelector } from 'react-redux'

const Achievements = () => {

    const { resume } = useSelector(state => state.GetResumeReducer)
    return (
        <>
            {
                resume &&

                <>
                    {
                        resume.achievements &&
                        <div className="card mb-3 mx-5">
                            <div className="card-body">
                                <h3 className="card-title">Achievements</h3>
                                {
                                    resume.achievements.map((item) => {
                                        return (
                                            <div key={item._id}>
                                                <p className="my-2 blockquote">Description : {item.achievement}</p>
                                                <p className="my-2 blockquote">{item._id}</p>

                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Achievements