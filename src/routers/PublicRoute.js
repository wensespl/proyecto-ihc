import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
  const { userId } = useSelector((state) => state.auth)

  return !!userId ? <Navigate to="/" /> : children
}
