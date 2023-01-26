import React from 'react'

const Alert = (props) => {
    const {message, success} = props
    return (
        <>
            <div className={`alert alert-${success} alert-dismissible fade show`} role="alert"><b>{message}</b>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}

export default Alert