import React, { useEffect, useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { EducationAction, GetResumeAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'

const EducationUpdate = (props) => {
  const info = props.info
  const ref = useRef()


  const [data, setData] = useState({
    schoolname: "",
    juniorcollege: "",
    collegename: "",
    cgpa: "",
    yearofcompletion: "",
    degree: ""
  })

  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()
    ref.current.click()
    await dispatch(EducationAction(data))
    await dispatch(GetResumeAction())

  }

  useEffect(() => {
    setData({


      schoolname: info.schoolname,
      juniorcollege: info.juniorcollege,
      collegename: info.collegename,
      cgpa: info.cgpa,
      yearofcompletion: info.yearofcompletion,
      degree: info.degree
    })
  }, [setData, info])
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AiOutlineEdit  data-bs-toggle="modal" data-bs-target="#educationmodal"/>

      <div class="modal fade" id="educationmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Education</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onSubmit={onSubmit}>
                <h2 className='text-center my-2'>Education</h2>
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
                <div class="modal-footer">
                  <button ref={ref} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-dark">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EducationUpdate