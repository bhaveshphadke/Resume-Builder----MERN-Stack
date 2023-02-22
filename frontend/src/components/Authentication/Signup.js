import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import profile from '../../images/profile.png'
import { SignupUser, VerifyUser } from '../../redux/actions/AuthActions'
import Alert from '../layout/Alert'
import Loader from '../layout/Loader'
const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, signup, message } = useSelector(state => state.SignupUserReducer)
    const verifyuser = useSelector(state=>state.VerifyUserReducer)
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: ""
    })
    const [avatar, setAvatar] = useState(profile)
    const [avatarPreview, setAvatarPreview] = useState(profile)

    const onChange = (e) => {
        if (e.target.name === 'avatar') {
            let reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatar(reader.result)
                    setAvatarPreview(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
       await dispatch(SignupUser(credentials, avatar))
        await dispatch(VerifyUser())

    }
    useEffect(() => {
        if (!verifyuser.success) {
            navigate('/signup')
        } else if (verifyuser.success) {
            navigate('/')
        }
    }, [verifyuser, navigate])
    return (
        <div>
            {
                signup === false && message &&
                <Alert message={message} success="danger" />
            }
            {
                loading ? <Loader /> :
                    <div className="container my-5">

                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" value={credentials.email} name='email' className="form-control" id="email" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" value={credentials.username} name='username' className="form-control" id="username" aria-describedby="username" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={credentials.password} name='password' className="form-control" id="exampleInputPassword1" onChange={onChange} />
                            </div>
                            <div className='my-2 d-flex align-items-center'>
                                <div>

                                    <img style={{
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        marginRight: '100px'
                                    }} src={avatarPreview} className="" alt="..." />
                                </div>
                                <div>

                                    <label htmlFor="formFileLg" className="form-label">Profile Picture</label>
                                    <input className="form-control form-control-lg" id="formFileLg" type="file" name='avatar' onChange={onChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark">Sign Up</button>
                        </form>
                    </div>
            }
        </div>
    )
}

export default Signup