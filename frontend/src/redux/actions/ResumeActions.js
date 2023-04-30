import axios from "axios"
import { ACHIEVEMENTS, ACHIEVEMENTS_FAIL, ACHIEVEMENTS_SUCCESS, EDUCATION, EDUCATION_FAIL, EDUCATION_SUCCESS, EXPERIENCE, EXPERIENCE_FAIL, EXPERIENCE_SUCCESS, GETRESUME, GETRESUME_FAIL, GETRESUME_SUCCESS, PERSONAL_INFORMATION, PERSONAL_INFORMATION_FAIL, PERSONAL_INFORMATION_SUCCESS, PROJECTS, PROJECTS_FAIL, PROJECTS_SUCCESS, SKILLS, SKILLS_FAIL, SKILLS_SUCCESS } from "../constnants/ResumeConstants"

export const PersonalInformationAction = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: PERSONAL_INFORMATION
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "token": localStorage.getItem('token')
            },
            withCredentials: true
        }
        const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/resume/personalinfo`, userData, config)
        dispatch({
            type: PERSONAL_INFORMATION_SUCCESS,
            data
        })
    } catch (error) {
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
                'Content-Type': 'application/json',
                "token": localStorage.getItem('token')
            },
            withCredentials: true
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/resume/education`, userData, config)

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
                'Content-Type': 'application/json',
                "token": localStorage.getItem('token')
            },
            withCredentials: true
        }
        const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/resume/experience`, userData, config)

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

export const ProjectsAction = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: PROJECTS
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "token": localStorage.getItem('token')
            },
            withCredentials: true
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/resume/projects`, userData, config)

        dispatch({
            type: PROJECTS_SUCCESS,
            data
        })
    } catch (error) {
        dispatch({
            type: PROJECTS_FAIL
        })
    }
}

export const SkillsAction = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: SKILLS
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "token": localStorage.getItem('token')
            },
            withCredentials: true
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/resume/skills`, userData, config)

        dispatch({
            type: SKILLS_SUCCESS,
            data
        })
    } catch (error) {
        dispatch({
            type: SKILLS_FAIL
        })
    }
}

export const AchievementAction = (userData) => async (dispatch) => {
    try {
        dispatch({
            type: ACHIEVEMENTS
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "token": localStorage.getItem('token')
            },
            withCredentials: true
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/resume/achievements`, userData, config)

        dispatch({
            type: ACHIEVEMENTS_SUCCESS,
            data
        })
    } catch (error) {
        dispatch({
            type: ACHIEVEMENTS_FAIL
        })
    }
}

export const GetResumeAction = () => async (dispatch) => {
    try {
        console.log(11);
        dispatch({
            type:GETRESUME
        })

        const config = {
            headers:{
                'Content-Type': 'application/json',
                "token": localStorage.getItem('token')
            },
            withCredentials:true
        }

        const {data} = await axios.get(`${process.env.REACT_APP_API_HOST}/resume/getresume`,config)
        console.log(data);
        dispatch({
            type:GETRESUME_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:GETRESUME_FAIL
        })
    }
}