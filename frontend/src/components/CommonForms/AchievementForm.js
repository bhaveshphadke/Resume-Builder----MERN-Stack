import React from 'react'

const AchievementForm = (props) => {
    const {data, onChange}= props
  return (
   <>
    <div className="mb-3">
                                    <label htmlFor="achievement" className="form-label">achievement</label>
                                    <input type="text" value={data.achievement} name='achievement' className="form-control" id="achievement" onChange={onChange} placeholder="Enter Your Achivement" required />
                                </div>
                                
   </>
  )
}

export default AchievementForm