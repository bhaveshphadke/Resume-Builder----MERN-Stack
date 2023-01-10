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



function App() {
  const dispatch = useDispatch()
  const { success } = useSelector((state) => state.VerifyUserReducer)

  useEffect(() => {
    dispatch(VerifyUser())
  }, [])
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/signin' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/resume/personalinformation' element={<PersonalInformation />}></Route>
        <Route exact path='/resume/education' element={<Education />}></Route>
        <Route exact path='/resume/experience' element={<Experience />}></Route>
        <Route exact path='/resume/projects' element={<Projects />}></Route>
        <Route exact path='/resume/skills' element={<Skills />}></Route>
        <Route exact path='/resume/achievements' element={<Achievements />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
