import React from 'react'
import { useSelector } from 'react-redux'
import ProjectsUpdate from '../Update/ProjectsUpdate'

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
                <ul>

                {
                  resume.projects.map((item) => {
                    return (
                      <li key={item._id}>
                        <p className="my-2 blockquote">Project Name : {item.projectname}   <ProjectsUpdate info={item} modal={item._id}/></p>
                        <p className="my-2 blockquote">Description : {item.description}</p>
                      
                      </li>
                      
                    )
                  })
                }
                </ul>
                
              </div>
            </div>
          }
        </>
    }
    </>
  )
}

export default Projects