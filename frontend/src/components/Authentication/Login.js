import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, VerifyUser } from '../../redux/actions/AuthActions'
import Loader from '../layout/Loader'
import { useNavigate } from 'react-router-dom'
import Alert from '../layout/Alert'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, loggedin, message } = useSelector(state => state.LoginReducer)

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(LoginUser(credentials))
        await dispatch(VerifyUser())
        console.log(loggedin);

    }
    useEffect(() => {
        if (loggedin === false) {
            navigate('/signin')
        } else if (loggedin === true) {
            navigate('/')
        }
        console.log(1);
        console.log(process.env.REACT_APP_API_HOST);
        console.log(process.env.REACT_APP_API_HOST);
    }, [loggedin, navigate])

    return (
        <>

            {loading ? <Loader /> :
                <>
                    {
                        loggedin === false && message &&
                        <Alert message={message} success="danger" />
                    }
                    <div className="container my-5">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" value={credentials.username} name='username' className="form-control" id="username" aria-describedby="username" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={credentials.password} name='password' className="form-control" id="exampleInputPassword1" onChange={onChange} />
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </>}

        </>
    )
}

export default Login