import React from 'react'

const Analytics = () => {
  return (
    <>
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Traffic</h3>
          <p className="text-2xl font-bold text-gray-800">245,678</p>
          <p className="text-sm text-green-600">+12.5% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Bounce Rate</h3>
          <p className="text-2xl font-bold text-gray-800">42.3%</p>
          <p className="text-sm text-red-600">+2.1% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Avg. Session Duration</h3>
          <p className="text-2xl font-bold text-gray-800">3m 45s</p>
          <p className="text-sm text-green-600">+0.5m from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Conversion Rate</h3>
          <p className="text-2xl font-bold text-gray-800">2.4%</p>
          <p className="text-sm text-green-600">+0.3% from last month</p>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Traffic Sources</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Organic Search</span>
              <span className="text-sm font-medium text-gray-700">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Direct</span>
              <span className="text-sm font-medium text-gray-700">30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Social</span>
              <span className="text-sm font-medium text-gray-700">15%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Referral</span>
              <span className="text-sm font-medium text-gray-700">10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* User Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Age Distribution</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">18-24</span>
                <span className="text-sm font-medium text-gray-700">25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">25-34</span>
                <span className="text-sm font-medium text-gray-700">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">35-44</span>
                <span className="text-sm font-medium text-gray-700">20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">45+</span>
                <span className="text-sm font-medium text-gray-700">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Gender Distribution</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Male</span>
                <span className="text-sm font-medium text-gray-700">55%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Female</span>
                <span className="text-sm font-medium text-gray-700">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-pink-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Top Countries</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg">🇺🇸</span>
              <span className="font-medium text-gray-800">United States</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">45%</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg">🇬🇧</span>
              <span className="font-medium text-gray-800">United Kingdom</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">25%</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg">🇩🇪</span>
              <span className="font-medium text-gray-800">Germany</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">15%</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Device Usage */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Device Usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">Mobile</h4>
            <p className="text-2xl font-bold text-gray-800">65%</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">Desktop</h4>
            <p className="text-2xl font-bold text-gray-800">30%</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">Tablet</h4>
            <p className="text-2xl font-bold text-gray-800">5%</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics 