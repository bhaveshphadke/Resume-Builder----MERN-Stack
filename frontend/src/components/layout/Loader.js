import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="d-flex w-100 justify-content-center align-items-center" style={{
                height:'50vh'
            }}>

                <div className="  spinner-border text-dark " role="status">
                    <span className="sr-only text-center"></span>
                </div>
            </div>
        </>
    )
}

export default Loader