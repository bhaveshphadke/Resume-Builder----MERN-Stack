import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Loader from '../layout/Loader';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';

const Templates = () => {
  const { resume } = useSelector((state) => state.GetResumeReducer)
  return (
    <>
      {
        resume &&
        <>
          <div className="conatainer d-flex" style={{
            margin: 'auto',
            width:'80%',
            flexWrap:'wrap',
            alignItems:'center',
            justifyContent:'center'
          }}>
            <div className="each-template" style={{

              border: '2px solid black',
              margin: '10px',
              borderRadius: '10px',
              width:'100%'
            }}>
              <Link className='nav-link' to="/template/1"> <Template1 /></Link>
            </div>
            <div className="each-template" style={{

              border: '2px solid black',
              margin: '10px',
              borderRadius: '10px',
              width:'100%'
            }}>
              <Link className='nav-link' to="/template/2"><Template2 /></Link>
            </div>

          </div>
        </>
      }
    </>
  )
}

export default Templates