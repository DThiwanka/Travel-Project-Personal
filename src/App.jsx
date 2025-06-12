import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ProtectedRoute from './components/auth/ProtectedRoute'
import MemberArea from './components/member/MemberArea'
import Dashboard from './components/admin/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member"
          element={
            <ProtectedRoute>
              <MemberArea />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/member" replace />} />
      </Routes>
    </Router>
  )
}

export default App