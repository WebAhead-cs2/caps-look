import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useMatch
} from 'react-router-dom'
import Projects from './pages/Projects/index'
import NavBar from './components/NavBar'
import Home from './pages/Home/index'
import Absence from './pages/Absence/index'
import Cadence from './pages/Cadence/index'
import Employee from './pages/Employes/index'
import Sidebar from './components/Sidebar'
import Login from './pages/Login/Login'
import Style from './style.module.scss'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import './reset.scss'
import './App.scss'
import React, { useEffect } from 'react'
import useAuth from './middleware/useAuth'
function App() {

  const logToken = useAuth(document.cookie.valueOf('userToken'))
  const flag = logToken
  
  const isLoggedIn = document.cookie.indexOf('userToken') !== -1
  useEffect(() => {
    if (
      window.location.pathname !== '/' &&
      document.cookie.indexOf('userToken') === -1
    ) {
      window.location.href = '/'
    }
  }, [])
  if (window.location.pathname === '/' || !isLoggedIn) {
    return (
      <div style={{ textAlign: 'center' }}>
        <NavBar />
        <Login />
      </div>
    )
  }
  // if(flag === 'scrum_master'){
  return (
    <div style={{ textAlign: 'center' }}>
      <Router>
        <NavBar />
        <div className={Style.pageBody}>
          <Sidebar />
          <div className={Style.mainPage}>
            <Routes>
             {(flag === 'scrum_master') && <Route path="/home" element={<Home />} />}
             {(flag === 'scrum_master') &&  <Route path="/Projects" element={<Projects />} />}
             {(flag === 'scrum_master') &&  <Route path="/Absence" element={<Absence />} />}
             {(flag === 'scrum_master') &&<Route path="/Employes" element={<Employee />} />}
             {(flag === 'scrum_master') &&  <Route path="/Cadence" element={<Cadence />} />}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}
export default App
