import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './templates.css'
import template1 from '../../images/template1.png'
import template2 from '../../images/template2.png'
import template3 from '../../images/template3.png'
import template4 from '../../images/template4.png'

const Templates = () => {
  const { resume } = useSelector((state) => state.GetResumeReducer)
  return (
    <>
      {
        resume &&
        <>
        <h1 className='text-center my-4'>Select Templates</h1>
          <div className="conatainer template-container">
            <div className="each-template">
              <Link className='nav-link' to="/template/1"> <img src={template1} alt="" style={{
                width:'250px'
              }}/>
              </Link>
            </div>
            <div className="each-template">
              <Link className='nav-link' to="/template/2"><img src={template2} alt="" style={{
                width:'250px'
              }}/></Link>
            </div>
            <div className="each-template">
              <Link className='nav-link' to="/template/3"><img src={template3} alt="" style={{
                width:'250px'
              }}/></Link>
            </div>
            <div className="each-template">
              <Link className='nav-link' to="/template/4"><img src={template4} alt="" style={{
                width:'250px'
              }}/></Link>
            </div>

          </div>
        </>
      }
    </>
  )
}

export default Templates