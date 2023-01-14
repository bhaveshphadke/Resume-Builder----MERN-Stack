import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import './home.css'
const Home = () => {
  const { resume } = useSelector(state => state.GetResumeReducer)

  const { success } = useSelector((state) => state.VerifyUserReducer)

  const [getStartedText, setGetStartedText] = useState("Get Started For Free")

  useEffect(()=>{
    if(resume){
      setGetStartedText("Complete Your Resume")
    }
  },[resume])
  return (
    <>
      {
        resume && resume.achievements.length>0 ?
          <Details />
          : 
          <>
            <div className=" d-flex flex-column justify-content-center align-items-center py-5 home ">
              <h2 className='text-white text-center'>Welcome to Resume Builder</h2>
              <div className={` d-flex align-items-center ${window.innerWidth >= 600 ? '' : 'flex-column'} justify-content-center my-4`} id="link-hover" >
                <button className="btn btn-dark m-1" disabled={!success} ><Link className='nav-link' to="/resume/personalinformation" >{getStartedText}</Link></button>
              </div>

            </div>
          </>
      }

    </>
  )
}

export default Home