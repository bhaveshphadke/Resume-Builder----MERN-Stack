import axios from "axios"
import { ACHIEVEMENTS, ACHIEVEMENTS_FAIL, ACHIEVEMENTS_SUCCESS, EDUCATION, EDUCATION_FAIL, EDUCATION_SUCCESS, EXPERIENCE, EXPERIENCE_FAIL, EXPERIENCE_SUCCESS, PERSONAL_INFORMATION, PERSONAL_INFORMATION_FAIL, PERSONAL_INFORMATION_SUCCESS, PROJECTS, PROJECTS_FAIL, PROJECTS_SUCCESS, SKILLS, SKILLS_FAIL, SKILLS_SUCCESS } from "../constnants/ResumeConstants"

export const PersonalInformationAction = (userData) => async (dispatch) => {
    try {
        console.log(1);
        dispatch({
            type: PERSONAL_INFORMATION
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
        const { data } = await axios.post('http://localhost:5500/api/v1/resume/personalinfo', userData, config)
        console.log(2);
        console.log(data);
        dispatch({
            type: PERSONAL_INFORMATION_SUCCESS,
            data
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: PERSONAL_INFORMATION_FAIL
        })
    }
}

export const EducationAction = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: EDUCATION
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }

        const { data } = await axios.post('http://localhost:5500/api/v1/resume/education', userData, config)

        dispatch({
            type: EDUCATION_SUCCESS,
            data
        })

    } catch (error) {
        dispatch({
            type: EDUCATION_FAIL
        })
    }
}


export const ExperienceAction = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: EXPERIENCE
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
        console.log(userData);
        const { data } = await axios.post('http://localhost:5500/api/v1/resume/experience', userData, config)

        dispatch({
            type: EXPERIENCE_SUCCESS,
            data
        })
    } catch (error) {
        dispatch({
            type: EXPERIENCE_FAIL
        })
    }
}

export const ProjectsAction = (userData)=>async(dispatch)=>{
    try {
        dispatch({
            type:PROJECTS
        })

        const config = {
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        }

        const {data} = await axios.post('http://localhost:5500/api/v1/resume/projects',userData,config)

        dispatch({
            type:PROJECTS_SUCCESS,
            data
        })
    } catch (error) {
        dispatch({
            type:PROJECTS_FAIL
        })
    }
}

export const SkillsAction = (userData)=>async(dispatch)=>{
    try {
        dispatch({
            type:SKILLS
        })

        const config = {
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        }

        const {data} = await axios.post('http://localhost:5500/api/v1/resume/skills',userData,config)

        dispatch({
            type:SKILLS_SUCCESS,
            data
        })
    } catch (error) {
        dispatch({
            type:SKILLS_FAIL
        })
    }
}

export const AchievementAction = (userData)=>async(dispatch)=>{
    try {
        dispatch({
            type:ACHIEVEMENTS
        })

        const config = {
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        }

        const {data} = await axios.post('http://localhost:5500/api/v1/resume/achievements',userData,config)

        dispatch({
            type:ACHIEVEMENTS_SUCCESS,
            data
        })
    } catch (error) {
        dispatch({
            type:ACHIEVEMENTS_FAIL
        })
    }
}