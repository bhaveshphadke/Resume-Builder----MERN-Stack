import { LoginReducer, VerifyUserReducer, SignupUserReducer, SignoutUserReducer,ChangeProfileReducer } from "./AuthReducer";
import { PersonalInformationReducer, EducationReducer, ExperienceReducer, ProjectReducer, SkillsReducer, AchievementsReducer, GetResumeReducer } from './ResumeReducers'
import { combineReducers } from "redux";
import { BuildResumeReducer } from "./BuildReducers";
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
    AchievementsReducer,
    GetResumeReducer,
    BuildResumeReducer,
    ChangeProfileReducer
})

export default rootReducer;