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
                        <div class="card mb-3 mx-5">
                            <div class="card-body">
                                <h3 class="card-title">Achievements</h3>
                                {
                                    resume.achievements.map((item) => {
                                        return (
                                            <>
                                                <p className="my-2 blockquote">Description : {item.achievement}</p>
                                                <p className="my-2 blockquote">{item._id}</p>

                                            </>
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