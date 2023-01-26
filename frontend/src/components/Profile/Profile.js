import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { user } = useSelector(state => state.VerifyUserReducer)
    return (
        <>
            {
                user &&
                <>
                    <div style={{
                            width: '100%',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '50vh'
                    }}>
                        <div className="card mb-3" style={{
                            maxWidth: '540px'
                        }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img style={{
                                        height:'100%'
                                    }} src={user.avatar[0].secure_url} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p>user id : {user._id}</p>
                                        <h5 className="card-title">username : {user.username}</h5>
                                        <p className="card-text">role : {user.role}.</p>
                                        <p className="card-text"><small className="text-muted">email : {user.email}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Profile