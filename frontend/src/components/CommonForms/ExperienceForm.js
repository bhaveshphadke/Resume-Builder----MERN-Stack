import React from 'react'

const ExperienceForm = (props) => {
    const {data, onChange} = props
  return (
  <>
  <div className="mb-3">
                                    <label htmlFor="field" className="form-label">Working in</label>
                                    <input type="text" value={data.field} name='field' className="form-control" id="field" onChange={onChange} placeholder="eg. IT Company(name of company)" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="years" className="form-label">Years of Working</label>
                                    <input type="text" value={data.years} name='years' className="form-control" id="years" onChange={onChange} placeholder="eg. 5" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Job Type(role)</label>
                                    <input type="text" value={data.role} name='role' className="form-control" id="role" onChange={onChange} placeholder="eg. Data Analyst" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Detail</label>
                                    <input type="text" value={data.description} name='description' className="form-control" id="description" aria-describedby="description" onChange={onChange} placeholder="eg.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore non sequi sint?" />
                                </div>
  </>
  )
}

export default ExperienceForm