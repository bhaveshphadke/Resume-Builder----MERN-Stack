import React from 'react'
import { useSelector } from 'react-redux'
import AchievementsUpdate from '../Update/AchievementsUpdate'

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
                              <ul>

                                {
                                    resume.achievements.map((item) => {
                                        return (
                                            <div key={item._id}>
                                                <li className="my-2 blockquote">Description : {item.achievement} <AchievementsUpdate info={item} modal={item._id}/></li>

                                        </div>
                                        )
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Achievements