import React from 'react'

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActivePage('overview')}
                className={`w-full text-left px-4 py-2 rounded ${activePage === 'overview' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
              >
                Overview
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActivePage('analytics')}
                className={`w-full text-left px-4 py-2 rounded ${activePage === 'analytics' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
              >
                Analytics
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActivePage('reports')}
                className={`w-full text-left px-4 py-2 rounded ${activePage === 'reports' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
              >
                Reports
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActivePage('settings')}
                className={`w-full text-left px-4 py-2 rounded ${activePage === 'settings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
              >
                Settings
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar 