import React from 'react'

const Reports = () => {
  return (
    <>
      {/* Report Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Generate Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Performance Report</option>
              <option>Financial Report</option>
              <option>User Activity Report</option>
              <option>Marketing Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Templates */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Report Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Performance Report</h3>
                <p className="text-sm text-gray-500">Last generated: 2 days ago</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Comprehensive overview of system performance metrics and KPIs.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Financial Report</h3>
                <p className="text-sm text-gray-500">Last generated: 1 week ago</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Detailed financial analysis and revenue metrics.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">User Activity Report</h3>
                <p className="text-sm text-gray-500">Last generated: 3 days ago</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">User engagement and activity patterns analysis.</p>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Reports</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Q1 Performance Report</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">John Doe</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">Mar 15, 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">PDF</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Download</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">February Financial Summary</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Jane Smith</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">Mar 10, 2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Excel</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Scheduled Reports */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Scheduled Reports</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Schedule New Report
          </button>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-800">Weekly Performance Report</h3>
                <p className="text-sm text-gray-500">Every Monday at 9:00 AM</p>
                <p className="text-sm text-gray-500 mt-1">Recipients: john@example.com, sarah@example.com</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-800">Monthly Financial Report</h3>
                <p className="text-sm text-gray-500">1st of every month at 8:00 AM</p>
                <p className="text-sm text-gray-500 mt-1">Recipients: finance@example.com</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reports 