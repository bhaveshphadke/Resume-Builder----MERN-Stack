import { LoginReducer, VerifyUserReducer, SignupUserReducer, SignoutUserReducer } from "./AuthReducer";
import { PersonalInformationReducer, EducationReducer, ExperienceReducer, ProjectReducer, SkillsReducer, AchievementsReducer } from './ResumeReducers'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    LoginReducer,
    VerifyUserReducer,
    SignupUserReducer,
    SignoutUserReducer,
    PersonalInformationReducer,
    EducationReducer,
    ExperienceReducer,
    ProjectReducer,
    SkillsReducer,
    AchievementsReducer
})

export default rootReducer;