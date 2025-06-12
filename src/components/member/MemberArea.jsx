import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MemberArea = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    roomType: 'standard',
    specialRequests: ''
  });
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/25' },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '09/24' }
  ]);

  // Sample trips data (replace with actual data from your backend)
  const trips = [
    {
      id: 1,
      name: 'Paris Adventure',
      description: 'Experience the magic of Paris with our exclusive tour package.',
      price: 1299,
      duration: '7 days',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      location: 'Paris, France',
      availableDates: ['2024-04-01', '2024-04-15', '2024-05-01']
    },
    {
      id: 2,
      name: 'Bali Paradise',
      description: 'Discover the beauty of Bali with our premium vacation package.',
      price: 1499,
      duration: '8 days',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      location: 'Bali, Indonesia',
      availableDates: ['2024-04-10', '2024-04-25', '2024-05-10']
    },
    {
      id: 3,
      name: 'Tokyo Explorer',
      description: 'Immerse yourself in the vibrant culture of Tokyo.',
      price: 1699,
      duration: '6 days',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      location: 'Tokyo, Japan',
      availableDates: ['2024-04-05', '2024-04-20', '2024-05-05']
    }
  ];

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    // Redirect to login page
    navigate('/login');
  };

  const handleBooking = (trip) => {
    setSelectedTrip(trip);
    setShowBookingModal(true);
  };

  const handleNewBooking = () => {
    setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking details to your backend
    console.log('Booking submitted:', bookingDetails);
    setShowBookingModal(false);
    // Reset form
    setBookingDetails({
      destination: '',
      startDate: '',
      endDate: '',
      travelers: 1,
      roomType: 'standard',
      specialRequests: ''
    });
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Quick Actions Handlers
  const handleQuickBook = () => {
    setShowBookingModal(true);
  };

  const handleSupport = () => {
    setShowSupportModal(true);
  };

  const handlePayment = () => {
    setShowPaymentModal(true);
  };

  const handleAddPayment = () => {
    setShowAddPaymentModal(true);
  };

  const handleProfile = () => {
    setShowProfileModal(true);
  };

  // Modal Close Handlers
  const handleCloseSupportModal = () => {
    setShowSupportModal(false);
  };

  const handleClosePayment = () => {
    setShowPaymentModal(false);
    setShowAddPaymentModal(false);
  };

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    // Here you would typically integrate with a payment processor like Stripe
    // For now, we'll just add a mock payment method
    const newPaymentMethod = {
      id: paymentMethods.length + 1,
      type: 'New Card',
      last4: '1234',
      expiry: '12/25'
    };
    setPaymentMethods([...paymentMethods, newPaymentMethod]);
    setShowAddPaymentModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Member Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="h-14 w-14 rounded-full ring-4 ring-white shadow-lg"
                />
                <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white"></span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Member since 2024</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">Gold Member</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 flex items-center space-x-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-72 flex-shrink-0">
            <nav className="space-y-1 bg-white rounded-xl shadow-sm p-3">
              {[
                { id: 'profile', label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                { id: 'bookings', label: 'My Bookings', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                { id: 'trips', label: 'Available Trips', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { id: 'history', label: 'Travel History', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { id: 'preferences', label: 'Preferences', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
                { id: 'rewards', label: 'Rewards', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { id: 'deals', label: 'Special Deals', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon} />
                  </svg>
                  <span className="font-medium">{tab.label}</span>
                  {tab.id === 'deals' && (
                    <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-red-100 text-red-600 rounded-full">
                      New
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Quick Stats */}
            <div className="mt-6 space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Available Points</p>
                    <p className="text-3xl font-bold">2,500</p>
                  </div>
                  <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="h-2 bg-white bg-opacity-20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-xs opacity-90">50% to Platinum</p>
                    <p className="text-xs font-medium">2,500 more points</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <button
                  onClick={handleQuickBook}
                  className="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white p-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 flex items-center justify-center overflow-hidden hover:-translate-y-1 aspect-square"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={handleSupport}
                  className="group relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white p-4 rounded-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 flex items-center justify-center overflow-hidden hover:-translate-y-1 aspect-square"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={handlePayment}
                  className="group relative bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white p-4 rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 flex items-center justify-center overflow-hidden hover:-translate-y-1 aspect-square"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={handleProfile}
                  className="group relative bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 text-white p-4 rounded-xl hover:shadow-2xl hover:shadow-gray-500/30 transition-all duration-500 flex items-center justify-center overflow-hidden hover:-translate-y-1 aspect-square"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="relative h-40 bg-gradient-to-r from-blue-500 to-blue-600">
                      <div className="absolute -bottom-16 left-6">
                        <div className="relative">
                          <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Profile"
                            className="h-32 w-32 rounded-full ring-4 ring-white shadow-lg"
                          />
                          <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="pt-20 pb-6 px-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
                          <p className="text-gray-500">john.doe@example.com</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          <span>Edit Profile</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Profile Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Total Bookings</p>
                          <p className="text-2xl font-bold text-gray-800">12</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-full">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Points Earned</p>
                          <p className="text-2xl font-bold text-gray-800">25,000</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-full">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Member Since</p>
                          <p className="text-2xl font-bold text-gray-800">2024</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-full">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-6">Profile Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value="John Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value="john.doe@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value="+1 (555) 123-4567"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value="1990-01-01"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'bookings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Bookings Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">My Bookings</h2>
                      <p className="text-gray-500">Manage your trips and view booking history</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={handleNewBooking}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        New Booking
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <span>Filter</span>
                      </button>
                    </div>
                  </div>

                  {/* Bookings Tabs */}
                  <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                      {['Upcoming', 'Past', 'Cancelled'].map((tab) => (
                        <button
                          key={tab}
                          className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                            tab === 'Upcoming'
                              ? 'border-blue-500 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Upcoming Trips */}
                  <div className="space-y-6">
                    {/* Paris Trip */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex items-start space-x-4">
                            <img
                              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                              alt="Paris"
                              className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">Paris, France</h3>
                              <p className="text-gray-500">Luxury Hotel & Spa</p>
                              <div className="mt-2 flex items-center space-x-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Confirmed
                                </span>
                                <span className="text-sm text-gray-500">Booking #12345</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="text-2xl font-bold text-gray-800">$1,299</div>
                            <div className="text-sm text-gray-500">Total Amount</div>
                          </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Check-in</h4>
                            <p className="mt-1 text-gray-800">June 15, 2024</p>
                            <p className="text-sm text-gray-500">2:00 PM</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Check-out</h4>
                            <p className="mt-1 text-gray-800">June 20, 2024</p>
                            <p className="text-sm text-gray-500">11:00 AM</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Duration</h4>
                            <p className="mt-1 text-gray-800">5 nights</p>
                            <p className="text-sm text-gray-500">2 Adults, 1 Room</p>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            View Details
                          </button>
                          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                            Modify Booking
                          </button>
                          <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                            Cancel Booking
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Tokyo Trip */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex items-start space-x-4">
                            <img
                              src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                              alt="Tokyo"
                              className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">Tokyo, Japan</h3>
                              <p className="text-gray-500">Premium Resort & Spa</p>
                              <div className="mt-2 flex items-center space-x-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  Pending
                                </span>
                                <span className="text-sm text-gray-500">Booking #12346</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="text-2xl font-bold text-gray-800">$2,499</div>
                            <div className="text-sm text-gray-500">Total Amount</div>
                          </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Check-in</h4>
                            <p className="mt-1 text-gray-800">July 10, 2024</p>
                            <p className="text-sm text-gray-500">3:00 PM</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Check-out</h4>
                            <p className="mt-1 text-gray-800">July 17, 2024</p>
                            <p className="text-sm text-gray-500">12:00 PM</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Duration</h4>
                            <p className="mt-1 text-gray-800">7 nights</p>
                            <p className="text-sm text-gray-500">2 Adults, 1 Room</p>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            View Details
                          </button>
                          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                            Modify Booking
                          </button>
                          <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                            Cancel Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Booking Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">2</div>
                        <div className="text-sm text-blue-700">Upcoming Trips</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">5</div>
                        <div className="text-sm text-green-700">Past Trips</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-600">1</div>
                        <div className="text-sm text-gray-700">Cancelled Trips</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'trips' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">Available Trips</h2>
                        <p className="text-sm text-gray-500 mt-1">Discover amazing destinations around the world</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            placeholder="Search trips..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <svg
                            className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">All Destinations</option>
                          <option value="europe">Europe</option>
                          <option value="asia">Asia</option>
                          <option value="americas">Americas</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {trips.map((trip) => (
                        <motion.div
                          key={trip.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all group"
                        >
                          <div className="relative">
                            <img
                              src={trip.image}
                              alt={trip.name}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                              {trip.duration}
                            </div>
                            <div className="absolute bottom-4 left-4">
                              <h3 className="text-xl font-bold text-white">{trip.name}</h3>
                              <div className="flex items-center text-white/90 mt-1">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-sm">{trip.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <p className="text-gray-600 mb-4 line-clamp-2">{trip.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span>4.8 (120 reviews)</span>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500">From</p>
                                <p className="text-2xl font-bold text-blue-600">${trip.price}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleBooking(trip)}
                              className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group-hover:bg-blue-700"
                            >
                              <span>Book Now</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'history' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* History Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Travel History</h2>
                      <p className="text-gray-500">Your journey through memories and experiences</p>
                    </div>
                  </div>

                  {/* Travel Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Total Trips</p>
                          <p className="text-2xl font-bold text-gray-800">12</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-full">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Countries Visited</p>
                          <p className="text-2xl font-bold text-gray-800">8</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-full">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Total Nights</p>
                          <p className="text-2xl font-bold text-gray-800">45</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-full">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Points Earned</p>
                          <p className="text-2xl font-bold text-gray-800">12,500</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-full">
                          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Travel Timeline */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-6">Travel Timeline</h3>
                      <div className="space-y-8">
                        {/* 2024 */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-4">2024</h4>
                          <div className="space-y-6">
                            {/* Rome Trip */}
                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-24 text-right">
                                <p className="text-sm font-medium text-gray-800">March 15</p>
                                <p className="text-xs text-gray-500">5 nights</p>
                              </div>
                              <div className="flex-shrink-0 w-6 flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                <div className="w-0.5 h-full bg-gray-200"></div>
                              </div>
                              <div className="flex-1">
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h5 className="font-medium text-gray-800">Rome, Italy</h5>
                                      <p className="text-sm text-gray-500">Luxury Hotel & Spa</p>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      Completed
                                    </span>
                                  </div>
                                  <div className="mt-4 flex items-center space-x-4">
                                    <button className="text-sm text-blue-600 hover:text-blue-700">View Details</button>
                                    <button className="text-sm text-gray-600 hover:text-gray-700">Add Photos</button>
                                    <button className="text-sm text-gray-600 hover:text-gray-700">Write Review</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Barcelona Trip */}
                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-24 text-right">
                                <p className="text-sm font-medium text-gray-800">February 1</p>
                                <p className="text-xs text-gray-500">4 nights</p>
                              </div>
                              <div className="flex-shrink-0 w-6 flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                <div className="w-0.5 h-full bg-gray-200"></div>
                              </div>
                              <div className="flex-1">
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h5 className="font-medium text-gray-800">Barcelona, Spain</h5>
                                      <p className="text-sm text-gray-500">Beach Resort</p>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      Completed
                                    </span>
                                  </div>
                                  <div className="mt-4 flex items-center space-x-4">
                                    <button className="text-sm text-blue-600 hover:text-blue-700">View Details</button>
                                    <button className="text-sm text-gray-600 hover:text-gray-700">Add Photos</button>
                                    <button className="text-sm text-gray-600 hover:text-gray-700">Write Review</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 2023 */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-4">2023</h4>
                          <div className="space-y-6">
                            {/* London Trip */}
                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-24 text-right">
                                <p className="text-sm font-medium text-gray-800">December 10</p>
                                <p className="text-xs text-gray-500">6 nights</p>
                              </div>
                              <div className="flex-shrink-0 w-6 flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                <div className="w-0.5 h-full bg-gray-200"></div>
                              </div>
                              <div className="flex-1">
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h5 className="font-medium text-gray-800">London, UK</h5>
                                      <p className="text-sm text-gray-500">City Center Hotel</p>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      Completed
                                    </span>
                                  </div>
                                  <div className="mt-4 flex items-center space-x-4">
                                    <button className="text-sm text-blue-600 hover:text-blue-700">View Details</button>
                                    <button className="text-sm text-gray-600 hover:text-gray-700">Add Photos</button>
                                    <button className="text-sm text-gray-600 hover:text-gray-700">Write Review</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Amsterdam Trip */}
                            <div className="flex gap-4">
                              <div className="flex-shrink-0 w-24 text-right">
                                <p className="text-sm font-medium text-gray-800">September 5</p>
                                <p className="text-xs text-gray-500">4 nights</p>
                              </div>
                              <div className="flex-shrink-0 w-6 flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                <div className="w-0.5 h-full bg-gray-200"></div>
                              </div>
                              <div className="flex-1">
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h5 className="font-medium text-gray-800">Amsterdam, Netherlands</h5>
                                      <p className="text-sm text-gray-500">Boutique Hotel</p>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      Completed
                                    </span>
                                  </div>
                                  <div className="mt-4 flex items-center space-x-4">
                                    <button className="text-sm text-blue-600 hover:text-blue-700">View Details</button>
                                    <button className="text-sm text-gray-600 hover:text-gray-700">Add Photos</button>
                                    <button className="text-sm text-gray-600 hover:text-gray-700">Write Review</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Travel Map */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Travel Map</h3>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Map visualization will be displayed here
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'preferences' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Preferences Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Preferences</h2>
                      <p className="text-gray-500">Customize your travel experience</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Save Changes
                    </button>
                  </div>

                  {/* Preferences Form */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 space-y-8">
                      {/* Language */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                        </select>
                      </div>
                      {/* Time Zone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>(GMT-08:00) Pacific Time</option>
                          <option>(GMT-05:00) Eastern Time</option>
                          <option>(GMT+00:00) UTC</option>
                          <option>(GMT+01:00) Central European Time</option>
                        </select>
                      </div>
                      {/* Date Format */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>MM/DD/YYYY</option>
                          <option>DD/MM/YYYY</option>
                          <option>YYYY-MM-DD</option>
                        </select>
                      </div>
                      {/* Notifications */}
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Notifications</h3>
                        <div className="space-y-4">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                            <span className="text-sm text-gray-700">Booking updates</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <span className="text-sm text-gray-700">Special deals & offers</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                            <span className="text-sm text-gray-700">Travel reminders</span>
                          </label>
                        </div>
                      </div>
                      {/* Travel Style */}
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Travel Style</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {['Luxury', 'Budget', 'Adventure', 'Relaxation', 'Cultural', 'Family', 'Romantic', 'Business'].map(style => (
                            <label key={style} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <span className="text-sm text-gray-700">{style}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'rewards' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Rewards Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Rewards & Benefits</h2>
                      <p className="text-gray-500">Earn points and unlock exclusive benefits</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Redeem Points</span>
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span>View History</span>
                      </button>
                    </div>
                  </div>

                  {/* Points Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Available Points</p>
                          <p className="text-3xl font-bold text-gray-800">12,500</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-full">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Next Tier: Platinum</span>
                          <span className="font-medium text-gray-800">2,500 more points</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Points Earned This Month</p>
                          <p className="text-3xl font-bold text-gray-800">2,500</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-full">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">From 3 completed trips</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Points Expiring Soon</p>
                          <p className="text-3xl font-bold text-gray-800">1,000</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-full">
                          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">Expires in 30 days</p>
                      </div>
                    </div>
                  </div>

                  {/* Membership Tiers */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-6">Membership Tiers</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Silver Tier */}
                        <div className="border border-gray-200 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-gray-800">Silver</h4>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                              Current
                            </span>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">5% points bonus</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">Priority support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">Basic room upgrades</span>
                            </div>
                          </div>
                        </div>

                        {/* Gold Tier */}
                        <div className="border-2 border-yellow-400 rounded-lg p-6 bg-yellow-50">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-gray-800">Gold</h4>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                              Next Tier
                            </span>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">10% points bonus</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">24/7 VIP support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">Premium room upgrades</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">Free breakfast</span>
                            </div>
                          </div>
                        </div>

                        {/* Platinum Tier */}
                        <div className="border border-gray-200 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-bold text-gray-800">Platinum</h4>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                              Elite
                            </span>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">15% points bonus</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">Dedicated concierge</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">Suite upgrades</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-600">All-inclusive benefits</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rewards Catalog */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-6">Rewards Catalog</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Hotel Stay */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Hotel Stay"
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-bold text-gray-800">Luxury Hotel Stay</h4>
                            <p className="text-sm text-gray-500 mb-4">1 night at select hotels</p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-blue-600">10,000 points</span>
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Redeem
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Flight Upgrade */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Flight Upgrade"
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-bold text-gray-800">Flight Upgrade</h4>
                            <p className="text-sm text-gray-500 mb-4">Upgrade to business class</p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-blue-600">15,000 points</span>
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Redeem
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Spa Treatment */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Spa Treatment"
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-bold text-gray-800">Spa Treatment</h4>
                            <p className="text-sm text-gray-500 mb-4">60-minute massage</p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-blue-600">5,000 points</span>
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Redeem
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Points History */}
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-6">Points History</h3>
                      <div className="space-y-4">
                        {[
                          { action: 'Trip to Paris', points: '+2,500', date: 'March 15, 2024', type: 'earned' },
                          { action: 'Redeemed Hotel Stay', points: '-10,000', date: 'February 28, 2024', type: 'redeemed' },
                          { action: 'Trip to Barcelona', points: '+2,000', date: 'February 1, 2024', type: 'earned' },
                          { action: 'Referral Bonus', points: '+1,000', date: 'January 15, 2024', type: 'bonus' }
                        ].map((transaction, index) => (
                          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                            <div>
                              <p className="text-sm font-medium text-gray-800">{transaction.action}</p>
                              <p className="text-xs text-gray-500">{transaction.date}</p>
                            </div>
                            <span className={`text-sm font-medium ${
                              transaction.type === 'earned' ? 'text-green-600' :
                              transaction.type === 'redeemed' ? 'text-red-600' :
                              'text-blue-600'
                            }`}>
                              {transaction.points}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {showBookingModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-xl shadow-xl max-w-lg w-full mx-4"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800">Book Your Trip</h3>
                      <button
                        onClick={handleCloseBookingModal}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Start Date
                        </label>
                        <input
                          type="date"
                          value={bookingDetails.startDate}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, startDate: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          End Date
                        </label>
                        <input
                          type="date"
                          value={bookingDetails.endDate}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, endDate: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Guests
                        </label>
                        <input
                          type="number"
                          min="1"
                          value={bookingDetails.travelers}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, travelers: parseInt(e.target.value) })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Room Type
                        </label>
                        <select
                          name="roomType"
                          value={bookingDetails.roomType}
                          onChange={handleBookingChange}
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="standard">Standard Room</option>
                          <option value="deluxe">Deluxe Room</option>
                          <option value="suite">Suite</option>
                          <option value="family">Family Room</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requests
                        </label>
                        <textarea
                          name="specialRequests"
                          value={bookingDetails.specialRequests}
                          onChange={handleBookingChange}
                          placeholder="Any special requirements or requests?"
                          rows="3"
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={handleCloseBookingModal}
                          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Confirm Booking
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            )}

            {showSupportModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Support</h3>
                    <button onClick={handleCloseSupportModal} className="text-gray-500 hover:text-gray-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Subject</label>
                      <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Modal */}
            {showPaymentModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 w-full max-w-md">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Payment Methods</h3>
                    <button onClick={handleClosePayment} className="text-gray-500 hover:text-gray-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {!showAddPaymentModal ? (
                    <>
                      <div className="space-y-4 mb-6">
                        {paymentMethods.map((method) => (
                          <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="bg-gray-100 p-2 rounded">
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium">{method.type} ending in {method.last4}</p>
                                <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                              </div>
                            </div>
                            <button className="text-red-500 hover:text-red-700">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={handleAddPayment}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Add New Payment Method
                      </button>
                    </>
                  ) : (
                    <form onSubmit={handleSubmitPayment} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="flex space-x-3">
                        <button
                          type="submit"
                          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Add Card
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowAddPaymentModal(false)}
                          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}

            {showProfileModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Profile Settings</h3>
                    <button onClick={handleCloseProfileModal} className="text-gray-500 hover:text-gray-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Special Deals Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Special Deals</h2>
                  <p className="text-gray-600 mt-1">Exclusive offers just for you</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    All Deals
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Filter
                  </button>
                </div>
              </div>

              {/* Featured Deals */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Featured Deals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Flash Sale Card */}
                  <div className="group relative bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Flash Sale</span>
                          <h3 className="text-xl font-bold mt-3">Bali Getaway</h3>
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-bold">40%</span>
                          <span className="text-sm block">OFF</span>
                        </div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <p className="text-white/90">5 nights at luxury resort with breakfast included</p>
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Valid until: Dec 31, 2024</span>
                        </div>
                      </div>
                      <button className="w-full bg-white text-red-600 px-4 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                        <span>Book Now</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Member Exclusive Card */}
                  <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Member Exclusive</span>
                          <h3 className="text-xl font-bold mt-3">European Tour</h3>
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-bold">25%</span>
                          <span className="text-sm block">OFF</span>
                        </div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <p className="text-white/90">10-day tour across 5 countries with premium hotels</p>
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Valid until: Mar 15, 2024</span>
                        </div>
                      </div>
                      <button className="w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                        <span>Book Now</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Early Bird Card */}
                  <div className="group relative bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Early Bird</span>
                          <h3 className="text-xl font-bold mt-3">Caribbean Cruise</h3>
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-bold">30%</span>
                          <span className="text-sm block">OFF</span>
                        </div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <p className="text-white/90">7-day luxury cruise with all-inclusive package</p>
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Valid until: Feb 28, 2024</span>
                        </div>
                      </div>
                      <button className="w-full bg-white text-green-600 px-4 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                        <span>Book Now</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Offers */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">More Exclusive Offers</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-800">Weekend Getaway</h4>
                          <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">20% OFF</span>
                        </div>
                        <p className="text-sm text-gray-600">20% off on all weekend bookings</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                        <span>View Details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-800">Family Package</h4>
                          <span className="text-xs font-medium bg-green-100 text-green-600 px-2 py-0.5 rounded-full">KIDS FREE</span>
                        </div>
                        <p className="text-sm text-gray-600">Kids stay free at selected resorts</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                        <span>View Details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-800">Last Minute Deals</h4>
                          <span className="text-xs font-medium bg-red-100 text-red-600 px-2 py-0.5 rounded-full">50% OFF</span>
                        </div>
                        <p className="text-sm text-gray-600">Up to 50% off on last-minute bookings</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                        <span>View Details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-800">Loyalty Bonus</h4>
                          <span className="text-xs font-medium bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">10% OFF</span>
                        </div>
                        <p className="text-sm text-gray-600">Extra 10% off for loyal members</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                        <span>View Details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rewards Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Rewards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Points Summary */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Your Points</h3>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-purple-100">Available Points</p>
                      <p className="text-3xl font-bold">2,450</p>
                    </div>
                    <div className="text-right">
                      <p className="text-purple-100">Tier Status</p>
                      <p className="text-xl font-bold">Gold</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Next Tier: Platinum</span>
                      <span className="text-sm">550 points needed</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Hotel Booking</p>
                        <p className="text-sm text-gray-600">Bali Resort & Spa</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+500 points</p>
                        <p className="text-sm text-gray-600">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Flight Booking</p>
                        <p className="text-sm text-gray-600">Singapore Airlines</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+300 points</p>
                        <p className="text-sm text-gray-600">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Points Expired</p>
                        <p className="text-sm text-gray-600">Annual expiration</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-600">-200 points</p>
                        <p className="text-sm text-gray-600">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MemberArea; 