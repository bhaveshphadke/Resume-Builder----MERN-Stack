import React, { useEffect, useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { EducationAction, GetResumeAction } from '../../redux/actions/ResumeActions'
import { AiOutlineEdit } from 'react-icons/ai'
import EducationForm from '../CommonForms/EducationForm'

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

      <div className="modal fade" id="educationmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Education</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <h2 className='text-center my-2'>Education</h2>
                <EducationForm data={data} onChange={onChange}/>
                <div className="modal-footer">
                  <button ref={ref} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-dark">Save changes</button>
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