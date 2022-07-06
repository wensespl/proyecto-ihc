import { Route, Routes } from 'react-router-dom'
import { AppScreen } from '../components/dashboard/AppScreen'
import { CommentsScreen } from '../components/dashboard/comment/CommentsScreen'
import { CourseScreen } from '../components/dashboard/course/CourseScreen'
import SearchCourseScreen from '../components/dashboard/searchCourse/SearchCourseScreen'
// import { ProfileScreen } from '../components/dashboard/ProfileScreen'

export const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/profile" element={<ProfileScreen />} /> */}
        <Route path="/course" element={<CourseScreen />} />
        <Route path="/comments" element={<CommentsScreen />} />
        <Route path="/search" element={<SearchCourseScreen />} />
        <Route path="/" element={<AppScreen />} />
      </Routes>
    </div>
  )
}
