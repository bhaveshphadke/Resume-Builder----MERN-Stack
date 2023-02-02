import { ACHIEVEMENTS, ACHIEVEMENTS_FAIL, ACHIEVEMENTS_SUCCESS, EDUCATION, EDUCATION_FAIL, EDUCATION_SUCCESS, EXPERIENCE, EXPERIENCE_FAIL, EXPERIENCE_SUCCESS, GETRESUME, GETRESUME_FAIL, GETRESUME_SUCCESS, PERSONAL_INFORMATION, PERSONAL_INFORMATION_FAIL, PERSONAL_INFORMATION_SUCCESS, PROJECTS, PROJECTS_FAIL, PROJECTS_SUCCESS, SKILLS, SKILLS_FAIL, SKILLS_SUCCESS } from "../constnants/ResumeConstants";

export const PersonalInformationReducer = (state={},action)=>{
    switch (action.type) {
        case PERSONAL_INFORMATION:
            
            return{
                success:false,
                loading:true
            }
    
        case PERSONAL_INFORMATION_SUCCESS:
            
            return{
                success:true,
                loading:false,
                dataLoaded:true
            }
    
        case PERSONAL_INFORMATION_FAIL:
            
            return{
                success:false,
                loading:true
            }
    
        default:
            return state
    }
}

export const EducationReducer = (state={}, action)=>{
    switch (action.type) {
        case EDUCATION:
            
            return{
                success:false,
                loading:true
            }
    
        case EDUCATION_SUCCESS:
            
            return{
                success:true,
                loading:false,
                dataLoaded:true
            }
    
        case EDUCATION_FAIL:
            
            return{
                success:false,
                loading:false
            }
    
        default:
            return state
    }
}

export const ExperienceReducer = (state={},action)=>{
    switch (action.type) {
        case EXPERIENCE:
            
            return {
                success:false,
                loading:true
            }
    
        case EXPERIENCE_SUCCESS:
            
            return {
                success:true,
                loading:false,
                dataLoaded:true
            }
    
        case EXPERIENCE_FAIL:
            
            return {
                success:false,
                loading:false
            }
    
        default:
            return state
    }

}

export const ProjectReducer = (state={},action)=>{
    switch (action.type) {
        case PROJECTS:
            return {
                success:false,
                loading:true
            }
    
        case PROJECTS_SUCCESS:
            return {
                success:true,
                loading:false,
                dataLoaded:true
            }
    
        case PROJECTS_FAIL:
            return {
                success:false,
                loading:false
            }
    
        default:
            return state;
    }
}

export const SkillsReducer = (state={},action)=>{
    switch (action.type) {
        case SKILLS:
            return {
                success:false,
                loading:true
            }
    
        case SKILLS_SUCCESS:
            return {
                success:true,
                loading:false,
                dataLoaded:true
            }
    
        case SKILLS_FAIL:
            return {
                success:false,
                loading:false
            }
    
        default:
            return state;
    }
}

export const AchievementsReducer = (state={},action)=>{
    switch (action.type) {
        case ACHIEVEMENTS:
            return {
                success:false,
                loading:true
            }
    
        case ACHIEVEMENTS_SUCCESS:
            return {
                success:true,
                loading:false,
                dataLoaded:true
            }
    
        case ACHIEVEMENTS_FAIL:
            return {
                success:false,
                loading:false
            }
    
        default:
            return state;
    }
}


export const GetResumeReducer = (state={},action)=>{
    switch (action.type) {
        case GETRESUME:
            return {
                success:false,
                loading:true
            }
    
        case GETRESUME_SUCCESS:
            return {
                success:true,
                loading:false,
                dataLoaded:true,
                resume:action.payload.resume,
                avatar:action.payload.avatar
            }
    
        case GETRESUME_FAIL:
            return {
                success:false,
                loading:false
            }
    
        default:
            return state;
    }
}