import React from 'react'
import { useSelector } from 'react-redux'

const Projects = () => {
    const {resume} = useSelector(state=>state.GetResumeReducer)
  return (
    <>
    {
        resume &&

        <>
  {
            resume.projects &&
            <div className="card mb-3 mx-5">
              <div className="card-body">
                <h3 className="card-title">Projects</h3>
                {
                  resume.projects.map((item) => {
                    return (
                      <div key={item._id}>
                        <p className="my-2 blockquote">Description : {item.description}</p>
                        <p className="my-2 blockquote">Project Name : {item.projectname}</p>
                        <p className="my-2 blockquote">{item._id}</p>

                      </div>
                    )
                  })
                }
              </div>
            </div>
          }
        </>
    }
    </>
  )
}

export default Projects