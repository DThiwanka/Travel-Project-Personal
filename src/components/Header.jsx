import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ activePage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem('isAuthenticated');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <header className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {activePage === 'overview' ? 'Welcome back!' : 
           activePage === 'analytics' ? 'Analytics Dashboard' : 
           activePage === 'reports' ? 'Reports Dashboard' :
           'Settings'}
        </h1>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </motion.button>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </header>
  )
}

export default Header 