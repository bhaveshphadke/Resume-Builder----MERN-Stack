import React from 'react'

const SkillsForm = (props) => {
    const { data, onChange } = props
    return (
        <>
            <div className="mb-3">
                <label htmlFor="skill" className="form-label">Skill</label>
                <input type="text" value={data.skill} name='skill' className="form-control" id="skill" onChange={onChange} placeholder="Enter Your SKill" required />
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description or Level</label>
                <input type="text" value={data.description} name='description' className="form-control" id="description" onChange={onChange} placeholder="eg.  Intermediate" required />
            </div>
        </>
    )
}

export default SkillsForm