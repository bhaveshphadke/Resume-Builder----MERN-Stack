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
            <div class="card mb-3 mx-5">
              <div class="card-body">
                <h3 class="card-title">Projects</h3>
                {
                  resume.projects.map((item) => {
                    return (
                      <>
                        <p className="my-2 blockquote">Description : {item.description}</p>
                        <p className="my-2 blockquote">Project Name : {item.projectname}</p>
                        <p className="my-2 blockquote">{item._id}</p>

                      </>
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