import { BUILD_RESUME, BUILD_RESUME_FAIl, BUILD_RESUME_SUCCESS } from "../constnants/ResumeConstants";

export const BuildResumeReducer = (state={},action)=>{
    switch (action.type) {
        case BUILD_RESUME:
            
            return{
                success:false,
                loading:true
            }
        case BUILD_RESUME_SUCCESS:
            
            return{
                success:true,
                loading:false,
                data:action.payload
            }
        case BUILD_RESUME_FAIl:
            
            return{
                success:false,
                loading:false
            }
    
        default:
           return state
    }
}
