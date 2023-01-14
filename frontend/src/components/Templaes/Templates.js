import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import Loader from '../layout/Loader';

const Templates = () => {
  const getResume = useSelector((state) => state.GetResumeReducer)
  // console.log(getResume.resume);

  useEffect(() => {
    // dispatch(GetResumeAction())
    console.log(1);
  }, [getResume])
  
console.log(11111);
  return (
    <>

      {
        getResume.loading ? <Loader /> :
          <>
            {!getResume.success ? <div>Please add your information by clicking on <b>get started for free button</b></div> :
              <>
                Templates
              </>
            }
          </>
      }
    </>
  )
}

export default Templates