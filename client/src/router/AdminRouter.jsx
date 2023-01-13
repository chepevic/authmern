import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { CoursePage } from '../pages'
import HomePage from '../pages/HomePage'

export const AdminRouter = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/courses" element={<CoursePage/>}/>
    </Routes>
    </>
  )
}
