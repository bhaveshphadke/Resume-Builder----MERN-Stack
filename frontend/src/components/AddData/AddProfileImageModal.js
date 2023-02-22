import React, { useRef } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import AddProfilePicture from './AddProfilePicture'

const AddProfileImageModal = () => {
    const ref = useRef()
    return (
        <>

            <AiOutlineEdit type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" />


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Change Profile Picture</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <AddProfilePicture reference={ref}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={ref}>Close</button>
                          
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default AddProfileImageModal