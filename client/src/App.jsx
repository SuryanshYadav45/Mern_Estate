import React from 'react'
import { BrowserRouter as Router, Routes,Route, useNavigate, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateProperty from './pages/CreateProperty'


const App = () => {


  return (<>
    <Router>
      <Header/>
      <Routes>
        <Route  element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
          </Route>
        <Route  element={<PrivateRoute/>}>
        <Route path='/create-property' element={<CreateProperty/>} />
          </Route>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
       
      </Routes>
    </Router>
  </>
  )
}

export default App