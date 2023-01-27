import React from 'react'

const PersonalInfoForm = (props) => {
  const { data, onChange } = props
  return (
    <>

      <div className="mb-3">
        <label htmlFor="text" className="form-label">Name</label>
        <input type="text" value={data.name} name='name' className="form-control" id="name" onChange={onChange} placeholder="Enter Your Name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label sm">Email</label>
        <input type="email" value={data.email} name='email' className="form-control" id="email" aria-describedby="email" onChange={onChange} placeholder="eg. example@domain.com" required />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <input type="text" value={data.role} name='role' className="form-control" id="role" onChange={onChange} placeholder="eg. student" required />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="text" value={data.phone} name='phone' className="form-control" id="phone" onChange={onChange} placeholder="eg. +91 000 000 0000" required />
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">Location</label>
        <input type="text" value={data.location} name='location' className="form-control" id="location" onChange={onChange} placeholder="eg. Navi Mumbai, Panvel 410206" required />
      </div>
      <div className="mb-3">
        <label htmlFor="about" className="form-label">About</label>
        <textarea className="form-control" name='about' onChange={onChange} value={data.about} id="about" rows="3" placeholder='eg. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, adipisci!' required></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="careerobjective" className="form-label">Carreer Objective</label>
        <textarea className="form-control" name='careerobjective' onChange={onChange} value={data.careerobjective} id="about" rows="3" placeholder='eg. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, adipisci!' required></textarea>
      </div></>
  )
}

export default PersonalInfoForm