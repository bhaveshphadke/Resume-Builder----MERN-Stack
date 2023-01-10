import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, SIGNOUT, SIGNUP_USER, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS, VERIFY_USER, VERIFY_USER_FAIL, VERIFY_USER_SUCCESS } from "../constnants/AuthConstatnts";

export const VerifyUserReducer = (state={},action)=>{
    switch (action.type) {
        case VERIFY_USER:
           return({
            success:false,
            loading:true
           })
    
        case VERIFY_USER_SUCCESS:
           return({
            success:true,
            loading:false
           })
    
        case VERIFY_USER_FAIL:
           return({
            success:false,
            loading:false

           })
    
        default:
           return state
    }
}


export const LoginReducer = (state={},action)=>{
    switch (action.type) {
        case LOGIN_USER:
            
            return ({
                success:false,
                loading:true
            })
    
        case LOGIN_USER_SUCCESS:
            return ({
                success:true,
                loading:false
            })
    
        case LOGIN_USER_FAIL:
            return ({
                success:false,
                loading:false
            })
    
        default:
            return state;
    }
}

export const SignupUserReducer = (state={},action)=>{
    switch (action.type) {
        case SIGNUP_USER:
            
            return({
                success:false,
                loading:true
            })
        case SIGNUP_USER_SUCCESS:
            
            return({
                success:true,
                loading:false
            })
        case SIGNUP_USER_FAIL:
            
            return({
                success:false,
                loading:false
            })
        case SIGNUP_USER:
            
            return({
                success:false,
                loading:true
            })
        default:
            return state
    }
}

export const SignoutUserReducer = (state={},action)=>{
switch (action.type) {
    case SIGNOUT:
        
        return({
            success:true
        })
    default:
        return state
}
} 