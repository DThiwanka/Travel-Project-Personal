import React from 'react';
import RevenueChart from './RevenueChart';

const Overview = () => {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
          <p className="text-2xl font-bold text-gray-800">$45,231</p>
          <p className="text-green-500 text-sm">+20.1% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
          <p className="text-2xl font-bold text-gray-800">2,338</p>
          <p className="text-green-500 text-sm">+15.3% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-gray-500 text-sm font-medium">New Orders</h3>
          <p className="text-2xl font-bold text-gray-800">1,234</p>
          <p className="text-red-500 text-sm">-3.2% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-gray-500 text-sm font-medium">Conversion Rate</h3>
          <p className="text-2xl font-bold text-gray-800">3.2%</p>
          <p className="text-green-500 text-sm">+1.1% from last month</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <RevenueChart />
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">User Growth</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="w-full h-48 flex items-end space-x-2">
              {[20, 35, 50, 65, 80, 95, 100].map((height, index) => (
                <div key={index} className="flex-1 bg-green-500 rounded-t" style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>
      </div>

      {/* Tasks and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Tasks */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Tasks</h2>
            <button className="text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Review project proposal', status: 'In Progress', priority: 'High' },
              { title: 'Update documentation', status: 'Pending', priority: 'Medium' },
              { title: 'Schedule team meeting', status: 'Completed', priority: 'Low' },
              { title: 'Prepare quarterly report', status: 'In Progress', priority: 'High' }
            ].map((task, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-800">{task.title}</p>
                    <p className="text-sm text-gray-500">{task.status}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  task.priority === 'High' ? 'bg-red-100 text-red-800' :
                  task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Create New Project
            </button>
            <button className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Generate Report
            </button>
            <button className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Schedule Meeting
            </button>
            <button className="w-full p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-medium">JD</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">John Doe</p>
                <p className="text-sm text-gray-500">Completed purchase #1234</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-medium">AS</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Alice Smith</p>
                <p className="text-sm text-gray-500">Created new account</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview; 