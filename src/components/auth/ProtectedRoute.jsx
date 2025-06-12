import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userType = localStorage.getItem('userType');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if the user is trying to access the correct area
  const isAdminRoute = location.pathname === '/dashboard';
  const isMemberRoute = location.pathname === '/member';

  if (isAdminRoute && userType !== 'admin') {
    return <Navigate to="/member" replace />;
  }

  if (isMemberRoute && userType === 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute; 