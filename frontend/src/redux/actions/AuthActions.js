import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, SIGNOUT, SIGNUP_USER, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS, VERIFY_USER, VERIFY_USER_FAIL, VERIFY_USER_SUCCESS } from "../constnants/AuthConstatnts"
import axios from 'axios'
export const VerifyUser = () => async (dispatch) => {
    try {
        dispatch({
            type: VERIFY_USER
        })
        const config = {
            withCredentials: true
        }
        const { data } = await axios.get(`${process.env.REACT_APP_API_HOST}/auth/verifyuser`, config)

        dispatch({
            type: VERIFY_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: VERIFY_USER_FAIL
        })
    }

}
export const LoginUser = (credentials) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_USER
        })
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
        const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/auth/login`, credentials, config)
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAIL
        })
    }
}

export const SignupUser = (credentials, avatar) => async (dispatch) => {
    try {
        dispatch({
            type: SIGNUP_USER
        })
        const userData = {
            username: credentials.username,
            password: credentials.password,
            email: credentials.email,
            avatar
        }
        console.log(avatar);
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
        const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/auth/signup`, userData, config)
        dispatch({
            type: SIGNUP_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SIGNUP_USER_FAIL
        })
    }
}


export const LogoutUser = () => async (dispatch) => {

    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    }
    const { data } = await axios.delete(`${process.env.REACT_APP_API_HOST}/auth/signout`, config)
    console.log(data);
    console.log(1);
    dispatch({
        type: SIGNOUT
    })
}