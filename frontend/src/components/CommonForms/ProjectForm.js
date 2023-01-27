import React from 'react'

const ProjectForm = (props) => {
    const { data, onChange } = props
    return (
        <>
            <div className="mb-3">
                <label htmlFor="projectname" className="form-label">Project Name</label>
                <input type="text" value={data.projectname} name='projectname' className="form-control" id="projectname" onChange={onChange} placeholder="Enter Your Project Name" required />
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" value={data.description} name='description' className="form-control" id="description" onChange={onChange} placeholder="Enter Your Projects Description" required />
            </div>


        </>
    )
}

export default ProjectForm