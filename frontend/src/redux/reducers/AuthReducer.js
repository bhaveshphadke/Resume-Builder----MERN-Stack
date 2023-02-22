import { CHANGE_PROFILE_PICTURE, CHANGE_PROFILE_PICTURE_FAIL, CHANGE_PROFILE_PICTURE_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, SIGNOUT, SIGNUP_USER, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS, VERIFY_USER, VERIFY_USER_FAIL, VERIFY_USER_SUCCESS } from "../constnants/AuthConstatnts";

export const VerifyUserReducer = (state = {}, action) => {
    switch (action.type) {
        case VERIFY_USER:
            return ({
                success: false,
                loading: true
            })

        case VERIFY_USER_SUCCESS:
            // console.log(action.payload);
            return ({
                success: true,
                loading: false,
                user: action.payload.user
            })

        case VERIFY_USER_FAIL:
            console.log('p');
            return ({
                success: false,
                loading: false

            })

        default:
            return state
    }
}


export const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER:

            return ({
                success: false,
                loading: true
            })

        case LOGIN_USER_SUCCESS:
            return ({
                success: true,
                loading: false,
                loggedin: true
            })

        case LOGIN_USER_FAIL:
            return ({
                success: false,
                loading: false,
                loggedin: false,
                message:"Invalid username or password"
            })

        default:
            return state;
    }
}

export const SignupUserReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_USER:

            return ({
                success: false,
                loading: true
            })
        case SIGNUP_USER_SUCCESS:

            return ({
                success: true,
                loading: false,
                signup:true

            })
        case SIGNUP_USER_FAIL:

            return ({
                success: false,
                loading: false,
                signup:false,
                message:"Internal Server Error! Please refill the details."
            })
        default:
            return state
    }
}

export const ChangeProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_PROFILE_PICTURE:
            return ({
                success: false,
                loading: true,
                message:"Profile Picture Changed Successfully!!"
            })
        case CHANGE_PROFILE_PICTURE_SUCCESS:

            return ({
                success: true,
                loading: false

            })
        case CHANGE_PROFILE_PICTURE_FAIL:

            return ({
                success: false,
                loading: false,
                message:"Internal Server Error! Please refill the details."
            })
        default:
            return state
    }
}

export const SignoutUserReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNOUT:

            return ({
                success: true
            })
        default:
            return state
    }
} 