import React from 'react'

const EducationForm = (props) => {
    const { data, onChange } = props
    return (
        <>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">School Name</label>
                <input type="text" value={data.schoolname} name='schoolname' className="form-control" id="schoolname" onChange={onChange} placeholder="Enter Your School Name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Junior College</label>
                <input type="text" value={data.juniorcollege} name='juniorcollege' className="form-control" id="juniorcollege" aria-describedby="juniorcollege" onChange={onChange} placeholder="eg. Changu Kana Thakur College" required />
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">College Name</label>
                <input type="text" value={data.collegename} name='collegename' className="form-control" id="collegename" onChange={onChange} placeholder="eg. Changu Kana Thakur College of Arts, Commerce and Science" required />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">CGPA</label>
                <input type="text" value={data.cgpa} name='cgpa' className="form-control" id="cgpa" onChange={onChange} placeholder="eg. 10.00" required />
            </div>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Year Of Completion</label>
                <input type="text" value={data.yearofcompletion} name='yearofcompletion' className="form-control" id="yearofcompletion" onChange={onChange} placeholder="eg. 2022 or expected(2023)" required />
            </div>
            <div className="mb-3">
                <label htmlFor="degree" className="form-label">Degree</label>
                <input type="text" value={data.degree} name='degree' className="form-control" id="degree" onChange={onChange} placeholder="eg. Computer Science" required />
            </div>
        </>
    )
}

export default EducationForm