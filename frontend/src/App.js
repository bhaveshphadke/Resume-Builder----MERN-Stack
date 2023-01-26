import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyUser } from './redux/actions/AuthActions';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/layout/Home';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import PersonalInformation from './components/Resume/PersonalInformation';
import Education from './components/Resume/Education';
import Experience from './components/Resume/Experience';
import Projects from './components/Resume/Projects';
import Skills from './components/Resume/Skills';
import Achievements from './components/Resume/Achievements';
import { GetResumeAction } from './redux/actions/ResumeActions';
import Profile from './components/Profile/Profile';
import Template from './components/Resumes/Template';
import Templates from './components/Resumes/Templates';
import Error404 from './components/layout/Error404';
// import TempTemplate1 from './components/Resumes/Template1';



function App() {
  const dispatch = useDispatch()
  const { success } = useSelector((state) => state.VerifyUserReducer)
  const { resume } = useSelector(state => state.GetResumeReducer)

  useEffect(() => {
    dispatch(VerifyUser())
    dispatch(GetResumeAction())
    console.log(1);
  }, [dispatch])
  return (
    <>

      <Router>
        {window.location.pathname === '/temp' ? "" : <Navbar />}
        <Routes>

          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/signin' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          {
            success &&
            <>
              <Route exact path='/resume/personalinformation' element={<PersonalInformation />}></Route>
              {resume && <Route exact path='/resume/education' element={<Education />}></Route>}
              <Route exact path='/me' element={<Profile />}></Route>
              {resume && resume.education.length > 0 && <Route exact path='/resume/experience' element={<Experience />}></Route>}
              {resume && resume.education.length > 0 && <Route exact path='/resume/projects' element={<Projects />}></Route>}
              {resume && resume.projects.length > 0 && <Route exact path='/resume/skills' element={<Skills />}></Route>}
              {resume && resume.skills.length > 0 && <Route exact path='/resume/achievements' element={<Achievements />}></Route>}
              {resume && <Route exact path='/resume/templates' element={<Templates />}></Route>}
              {resume && resume.achievements.length > 0 && <Route exact path='/template/:number' element={<Template />}></Route>}
              {/* {resume && <Route exact path='/resume/update/personalInfo' element={<PersonalInfo />}></Route>} */}
            </>
          }


          <Route path="*" element={<Error404/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
