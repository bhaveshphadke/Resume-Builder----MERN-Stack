import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
const Home = () => {
  console.log(window.innerWidth >= 600 ?'':'flex-column');
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center py-5 home ">
        <h2 className='text-white text-center'>Welcome to Resume Builder</h2>
        <div className={` d-flex align-items-center ${window.innerWidth >= 600 ?'':'flex-column'} justify-content-center my-4`}>
          <button className="btn btn-dark m-1"><Link className='nav-link' to="/resume/personalinformation">Get Started for Free</Link></button>
          <button className="btn btn-dark m-1">Join with US</button>
        </div>

      </div>

    </>
  )
}

export default Home