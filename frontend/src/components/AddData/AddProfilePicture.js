import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import profile from '../../images/profile.png'
import { ChangeProfilePicture, VerifyUser } from '../../redux/actions/AuthActions'
import Alert from '../layout/Alert'
import Loader from '../layout/Loader'

const AddProfilePicture = ({reference}) => {
    const dispatch = useDispatch()
    const fetchuser = useSelector(state => state.VerifyUserReducer)
    const [previewImage, setPreviewImage] = useState("")
    const [imageToSave, setImageToSave] = useState(profile)
    const {message,loading} = useSelector(state => state.ChangeProfileReducer)
    const onChange = (e) => {
        let reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImageToSave(reader.result)
                setPreviewImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(ChangeProfilePicture(imageToSave))
        reference.current.click()
        await dispatch(VerifyUser())

    }
    useEffect(()=>{
        if(fetchuser && fetchuser.user){
            setPreviewImage(fetchuser.user.avatar[0].secure_url)
            setImageToSave(fetchuser.user.avatar[0].secure_url)
        }
    },[fetchuser,setPreviewImage])
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <div className="container my-5">
                            {
                               message && <Alert message={message} success="success"/>
                            }
                            <form onSubmit={onSubmit}>
                                <h2 className='text-center my-2'>Projects</h2>
                                <div className='d-flex'>
                                    <div>

                                        <img style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            marginRight: '10px'
                                        }} src={previewImage} className="" alt="..." />
                                    </div>
                                    <div>

                                        <label htmlFor="formFileLg" className="form-label">Profile Picture</label>
                                        <input className="form-control form-control-lg" id="formFileLg" type="file" name='avatar' onChange={onChange} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark me-2 text-center m-auto w-100 mt-4">Save</button>

                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default AddProfilePicture