import { Navigate, Outlet } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';
import type { UserRole } from '../../types';

interface ProtectedRouteProps {
  requiredRole?: UserRole;
  redirectTo?: string;
}

export default function ProtectedRoute({
  requiredRole = 'user',
  redirectTo = '/login'
}: ProtectedRouteProps) {
  const { isLoggedIn, checkRole } = useApp();

  // Check if user is logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has required role
  if (!checkRole(requiredRole)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}
