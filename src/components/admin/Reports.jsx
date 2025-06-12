import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  const [timeRange, setTimeRange] = useState('month');

  // Sample data for charts
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const bookingsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bookings',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
    ],
  };

  const tripDistributionData = {
    labels: ['Paris', 'Bali', 'Tokyo', 'New York', 'London'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  // Sample statistics data
  const statistics = [
    {
      title: 'Total Revenue',
      value: '$123,456',
      change: '+12.5%',
      trend: 'up',
    },
    {
      title: 'Total Bookings',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
    },
    {
      title: 'Average Booking Value',
      value: '$1,234',
      change: '-2.1%',
      trend: 'down',
    },
    {
      title: 'Customer Satisfaction',
      value: '4.8/5',
      change: '+0.3',
      trend: 'up',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Reports & Analytics</h2>
        <div className="flex space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`flex items-center ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <svg
                  className={`w-5 h-5 ${stat.trend === 'up' ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Revenue Trend</h3>
          <div className="h-80">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </div>

        {/* Bookings Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Booking Volume</h3>
          <div className="h-80">
            <Bar data={bookingsData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trip Distribution */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Trip Distribution</h3>
          <div className="h-64">
            <Doughnut data={tripDistributionData} options={doughnutOptions} />
          </div>
        </div>

        {/* Top Destinations */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Top Destinations</h3>
          <div className="space-y-4">
            {[
              { destination: 'Paris', bookings: 234, revenue: '$280,800' },
              { destination: 'Bali', bookings: 189, revenue: '$283,500' },
              { destination: 'Tokyo', bookings: 156, revenue: '$312,000' },
              { destination: 'New York', bookings: 145, revenue: '$290,000' },
              { destination: 'London', bookings: 132, revenue: '$198,000' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{item.destination}</p>
                  <p className="text-sm text-gray-500">{item.bookings} bookings</p>
                </div>
                <p className="font-medium text-gray-900">{item.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New booking', user: 'John Doe', time: '2 minutes ago' },
              { action: 'Payment received', user: 'Jane Smith', time: '15 minutes ago' },
              { action: 'Booking cancelled', user: 'Mike Johnson', time: '1 hour ago' },
              { action: 'New review', user: 'Sarah Wilson', time: '2 hours ago' },
              { action: 'Trip updated', user: 'Admin', time: '3 hours ago' },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.action}</p>
                  <p className="text-sm text-gray-500">
                    by {item.user} • {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 