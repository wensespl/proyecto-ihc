import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  const { userId } = useSelector((state) => state.auth)

  return !!userId ? children : <Navigate to="/home" />
}
