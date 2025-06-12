import React, { useState } from 'react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const BookingManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showBookingDetails, setShowBookingDetails] = useState(null);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [exportDateRange, setExportDateRange] = useState({
    start: '',
    end: ''
  });
  const [exportFormat, setExportFormat] = useState('detailed');
  const [exportTheme, setExportTheme] = useState('default');

  // Sample booking data
  const bookings = [
    {
      id: 1,
      tripName: 'Paris Spring Special',
      customer: {
        name: 'John Doe',
        email: 'john.doe@example.com'
      },
      bookingDate: '2024-03-15',
      startDate: '2024-04-01',
      endDate: '2024-04-30',
      status: 'confirmed',
      totalAmount: 1200,
      paymentStatus: 'paid',
      guests: 2,
      specialRequests: 'Window seat preferred'
    },
    {
      id: 2,
      tripName: 'Bali Summer Escape',
      customer: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com'
      },
      bookingDate: '2024-03-18',
      startDate: '2024-06-01',
      endDate: '2024-06-30',
      status: 'pending',
      totalAmount: 1500,
      paymentStatus: 'pending',
      guests: 3,
      specialRequests: 'Vegetarian meals'
    },
    {
      id: 3,
      tripName: 'Tokyo Adventure',
      customer: {
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com'
      },
      bookingDate: '2024-03-20',
      startDate: '2024-08-01',
      endDate: '2024-08-15',
      status: 'cancelled',
      totalAmount: 2000,
      paymentStatus: 'refunded',
      guests: 2,
      specialRequests: 'None'
    }
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.tripName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customer.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'refunded':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getThemeColors = (theme) => {
    switch (theme) {
      case 'dark':
        return {
          header: [33, 33, 33],
          alternate: [50, 50, 50],
          text: 255
        };
      case 'light':
        return {
          header: [240, 240, 240],
          alternate: [250, 250, 250],
          text: 0
        };
      default:
        return {
          header: [59, 130, 246],
          alternate: [245, 245, 245],
          text: 255
        };
    }
  };

  const calculateStatistics = (bookings) => {
    const stats = {
      totalBookings: bookings.length,
      totalRevenue: bookings.reduce((sum, booking) => sum + booking.totalAmount, 0),
      averageBookingValue: 0,
      statusBreakdown: {},
      paymentBreakdown: {},
      topDestinations: {}
    };

    if (stats.totalBookings > 0) {
      stats.averageBookingValue = stats.totalRevenue / stats.totalBookings;
    }

    bookings.forEach(booking => {
      // Status breakdown
      stats.statusBreakdown[booking.status] = (stats.statusBreakdown[booking.status] || 0) + 1;
      
      // Payment breakdown
      stats.paymentBreakdown[booking.paymentStatus] = (stats.paymentBreakdown[booking.paymentStatus] || 0) + 1;
      
      // Top destinations
      stats.topDestinations[booking.tripName] = (stats.topDestinations[booking.tripName] || 0) + 1;
    });

    return stats;
  };

  const exportToPDF = () => {
    try {
      // Initialize PDF document
      const doc = new jsPDF('p', 'mm', 'a4');
      const theme = getThemeColors(exportTheme);
      
      // Filter bookings by date range if specified
      let filteredData = [...filteredBookings];
      if (exportDateRange.start && exportDateRange.end) {
        filteredData = filteredData.filter(booking => 
          new Date(booking.startDate) >= new Date(exportDateRange.start) &&
          new Date(booking.startDate) <= new Date(exportDateRange.end)
        );
      }

      const stats = calculateStatistics(filteredData);
      
      // Add title and header information
      doc.setFontSize(20);
      doc.text('Booking Report', 14, 15);
      
      doc.setFontSize(12);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);
      
      if (exportDateRange.start && exportDateRange.end) {
        doc.text(`Date Range: ${exportDateRange.start} to ${exportDateRange.end}`, 14, 35);
      }
      
      doc.text(`Status Filter: ${statusFilter === 'all' ? 'All Bookings' : statusFilter}`, 14, 45);

      let currentY = 55;

      // Add summary statistics
      if (exportFormat === 'detailed') {
        doc.setFontSize(12);
        doc.text('Summary Statistics', 14, currentY);
        currentY += 10;

        doc.setFontSize(10);
        doc.text(`Total Bookings: ${stats.totalBookings}`, 14, currentY);
        currentY += 7;
        doc.text(`Total Revenue: $${stats.totalRevenue.toLocaleString()}`, 14, currentY);
        currentY += 7;
        doc.text(`Average Booking Value: $${stats.averageBookingValue.toLocaleString()}`, 14, currentY);
        currentY += 7;

        // Status breakdown
        doc.text('Status Breakdown:', 14, currentY);
        currentY += 7;
        Object.entries(stats.statusBreakdown).forEach(([status, count]) => {
          doc.text(`${status}: ${count} (${((count/stats.totalBookings)*100).toFixed(1)}%)`, 20, currentY);
          currentY += 7;
        });

        // Payment status breakdown
        doc.text('Payment Status:', 14, currentY);
        currentY += 7;
        Object.entries(stats.paymentBreakdown).forEach(([status, count]) => {
          doc.text(`${status}: ${count} (${((count/stats.totalBookings)*100).toFixed(1)}%)`, 20, currentY);
          currentY += 7;
        });

        // Top destinations
        doc.text('Top Destinations:', 14, currentY);
        currentY += 7;
        Object.entries(stats.topDestinations)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 5)
          .forEach(([destination, count]) => {
            doc.text(`${destination}: ${count} bookings`, 20, currentY);
            currentY += 7;
          });

        currentY += 10;
      }

      // Prepare table data
      const tableData = filteredData.map(booking => [
        booking.id,
        booking.tripName,
        booking.customer.name,
        booking.customer.email,
        booking.startDate,
        booking.endDate,
        booking.status,
        `$${booking.totalAmount}`,
        booking.paymentStatus
      ]);

      // Add table
      autoTable(doc, {
        startY: currentY,
        head: [['ID', 'Trip', 'Customer', 'Email', 'Start Date', 'End Date', 'Status', 'Amount', 'Payment']],
        body: tableData,
        theme: 'grid',
        styles: {
          fontSize: 8,
          cellPadding: 2,
          textColor: theme.text === 255 ? 255 : 0,
        },
        headStyles: {
          fillColor: theme.header,
          textColor: theme.text,
          fontSize: 9,
          fontStyle: 'bold',
        },
        alternateRowStyles: {
          fillColor: theme.alternate,
        },
        columnStyles: {
          0: { cellWidth: 10 },
          1: { cellWidth: 30 },
          2: { cellWidth: 25 },
          3: { cellWidth: 35 },
          4: { cellWidth: 20 },
          5: { cellWidth: 20 },
          6: { cellWidth: 15 },
          7: { cellWidth: 15 },
          8: { cellWidth: 15 },
        },
        margin: { top: currentY },
      });

      // Save the PDF
      doc.save('booking-report.pdf');
      setShowExportOptions(false);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Booking Management</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setShowExportOptions(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Export to PDF</span>
          </button>
        </div>
      </div>

      {/* Export Options Modal */}
      {showExportOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">Export Options</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Date Range</label>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <input
                    type="date"
                    value={exportDateRange.start}
                    onChange={(e) => setExportDateRange(prev => ({ ...prev, start: e.target.value }))}
                    className="border rounded-lg px-3 py-2"
                  />
                  <input
                    type="date"
                    value={exportDateRange.end}
                    onChange={(e) => setExportDateRange(prev => ({ ...prev, end: e.target.value }))}
                    className="border rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Report Format</label>
                <select
                  value={exportFormat}
                  onChange={(e) => setExportFormat(e.target.value)}
                  className="mt-1 block w-full border rounded-lg px-3 py-2"
                >
                  <option value="detailed">Detailed (with statistics)</option>
                  <option value="simple">Simple (table only)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Theme</label>
                <select
                  value={exportTheme}
                  onChange={(e) => setExportTheme(e.target.value)}
                  className="mt-1 block w-full border rounded-lg px-3 py-2"
                >
                  <option value="default">Default (Blue)</option>
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowExportOptions(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={exportToPDF}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setShowBookingDetails(booking)}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{booking.tripName}</div>
                  <div className="text-sm text-gray-500">Booking #{booking.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{booking.customer.name}</div>
                  <div className="text-sm text-gray-500">{booking.customer.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{booking.startDate}</div>
                  <div className="text-sm text-gray-500">to {booking.endDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">${booking.totalAmount}</div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                    {booking.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Cancel</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Details Modal */}
      {showBookingDetails && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Booking Details</h3>
                <button
                  onClick={() => setShowBookingDetails(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Trip</h4>
                  <p className="mt-1 text-sm text-gray-900">{showBookingDetails.tripName}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Customer</h4>
                  <p className="mt-1 text-sm text-gray-900">{showBookingDetails.customer.name}</p>
                  <p className="text-sm text-gray-500">{showBookingDetails.customer.email}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Dates</h4>
                  <p className="mt-1 text-sm text-gray-900">
                    {showBookingDetails.startDate} to {showBookingDetails.endDate}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Guests</h4>
                  <p className="mt-1 text-sm text-gray-900">{showBookingDetails.guests} people</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Special Requests</h4>
                  <p className="mt-1 text-sm text-gray-900">{showBookingDetails.specialRequests}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Payment</h4>
                  <p className="mt-1 text-sm text-gray-900">${showBookingDetails.totalAmount}</p>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPaymentStatusColor(showBookingDetails.paymentStatus)}`}>
                    {showBookingDetails.paymentStatus}
                  </span>
                </div>
                <div className="flex justify-end space-x-3 mt-5">
                  <button
                    onClick={() => setShowBookingDetails(null)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <button
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingManagement; 