import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  QrCode, 
  Bell, 
  User, 
  LogOut, 
  Menu, 
  X, 
  CheckCircle, 
  AlertCircle, 
  Home, 
  History, 
  Settings,
  TrendingUp,
  Utensils,
  Download
} from 'lucide-react';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Mock student data
  const student = {
    name: 'Tanaka Moyo',
    regNumber: 'R123456A',
    email: 'tmoyo@uz.ac.zw',
    mealPlan: 'Full Board',
    profileImage: null
  };

  // Mock upcoming bookings
  const upcomingBookings = [
    { id: 1, meal: 'Lunch', date: '2025-11-22', time: '12:30 PM', slot: '12:00 - 14:00', status: 'confirmed', qrCode: 'Q-042', queueNumber: 'Q-042' },
    { id: 2, meal: 'Dinner', date: '2025-11-22', time: '06:00 PM', slot: '18:00 - 20:00', status: 'confirmed', qrCode: 'Q-089', queueNumber: 'Q-089' }
  ];

  // Mock booking history
  const bookingHistory = [
    { id: 1, meal: 'Breakfast', date: '2025-11-21', time: '07:30 AM', status: 'completed', queueNumber: 'Q-023' },
    { id: 2, meal: 'Lunch', date: '2025-11-21', time: '12:00 PM', status: 'completed', queueNumber: 'Q-056' },
    { id: 3, meal: 'Dinner', date: '2025-11-20', time: '06:30 PM', status: 'completed', queueNumber: 'Q-034' },
    { id: 4, meal: 'Breakfast', date: '2025-11-20', time: '08:00 AM', status: 'completed', queueNumber: 'Q-018' },
    { id: 5, meal: 'Lunch', date: '2025-11-19', time: '01:00 PM', status: 'completed', queueNumber: 'Q-067' }
  ];

  // Available time slots
  const availableSlots = {
    breakfast: ['07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM'],
    lunch: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'],
    dinner: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM']
  };

  const handleBookMeal = () => {
    if (selectedMeal && selectedTime) {
      // In real app, make API call to book the slot
      console.log(`Booking ${selectedMeal} at ${selectedTime}`);
      alert(`Booking confirmed for ${selectedMeal} at ${selectedTime}`);
      setShowBookingModal(false);
      setSelectedMeal(null);
      setSelectedTime('');
      // Refresh bookings list
    }
  };

  const handleLogout = () => {
    // In real app, clear session/token
    navigate('/student-login');
  };

  const viewQRCode = (booking) => {
    setSelectedBooking(booking);
    setShowQRModal(true);
  };

  const downloadQR = () => {
    // In real app, generate and download QR code
    console.log('Downloading QR code for:', selectedBooking);
  };

  const navigation = [
    { name: 'Dashboard', icon: Home, key: 'dashboard' },
    { name: 'My Bookings', icon: Calendar, key: 'bookings' },
    { name: 'History', icon: History, key: 'history' },
    { name: 'Settings', icon: Settings, key: 'settings' }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f3f4f6'}}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden" 
          style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-64 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{backgroundColor: '#1e3a8a'}}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6" style={{borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
            <div>
              <h1 className="text-2xl font-bold" style={{color: 'white'}}>
                <span>Eat</span><span style={{color: '#ea580c'}}>Easy</span>
              </h1>
              <p className="text-xs" style={{color: '#93c5fd'}}>Student Portal</p>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden" style={{color: 'white'}}>
              <X className="w-6 h-6" />
            </button>
          </div>