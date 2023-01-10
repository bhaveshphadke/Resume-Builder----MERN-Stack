import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from'react-router-dom'
import { LogoutUser, VerifyUser } from '../../redux/actions/AuthActions'
const Navbar = () => {
    const {success} = useSelector(state=>state.VerifyUserReducer)
    const dispatch = useDispatch()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/me">Profile</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/templates">Templates</Link> 
                            </li>
                        </ul>
                        <div className='text-white d-flex'>
                            {!success && <div className={`${window.innerWidth >= 990 ? 'mx-1' :'mr-1'}`}>
                                <button className="btn btn-dark"><Link className="nav-link active" aria-current="page" to="/signin">Sign in</Link> </button>
                            </div>}
                            {!success && <div className='mx-1'>
                                <button className="btn btn-dark"><Link className="nav-link active" aria-current="page" to="/signup">Sign up</Link> </button>
                            </div>}
                            {success && <div className='mx-1'>
                                <button className="btn btn-dark" onClick={async()=>{await dispatch(LogoutUser());await dispatch(VerifyUser())}}>Signout</button>
                            </div>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar