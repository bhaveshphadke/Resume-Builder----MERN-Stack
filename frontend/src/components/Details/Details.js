import React from 'react'
import { useSelector } from 'react-redux'
import Achievements from './Achievements';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import Projects from './Projects';
import Skills from './Skills';

const Details = () => {
  const { resume } = useSelector(state => state.GetResumeReducer)
  const { user } = useSelector(state => state.VerifyUserReducer)
  console.log(user);
  return (
    <>
    {user && <h2 className='m-5 text-center'>Hello, {user.username}</h2>}
      {
        resume &&
        <>
          <Personal />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
        </>
      }
    </>
  )
}

export default Details