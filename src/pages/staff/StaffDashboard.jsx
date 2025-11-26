import React, { useState } from 'react';
import { 
  Camera, 
  Clock, 
  Users, 
  TrendingUp, 
  Bell, 
  LogOut, 
  Menu, 
  X, 
  CheckCircle, 
  Home, 
  History,
  Settings,
  Scan,
  BarChart2,
  AlertCircle,
  Search,
  Filter
} from 'lucide-react';

export default function StaffDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showScanModal, setShowScanModal] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMealFilter, setSelectedMealFilter] = useState('all');

  // Mock staff data
  const staff = {
    name: 'Sarah Johnson',
    staffId: 'STAFF001',
    email: 'sjohnson@uz.ac.zw',
    role: 'Dining Hall Staff',
    shift: 'Morning Shift'
  };

  // Mock real-time stats
  const stats = {
    todayServed: 156,
    currentQueue: 23,
    avgWaitTime: '8 mins',
    upcomingBookings: 45
  };

  // Mock queue data
  const currentQueue = [
    { id: 1, qrCode: 'Q-042', student: 'Tanaka Moyo', regNo: 'R123456A', meal: 'Lunch', time: '12:30 PM', status: 'waiting' },
    { id: 2, qrCode: 'Q-043', student: 'Chipo Ndlovu', regNo: 'R123457B', meal: 'Lunch', time: '12:35 PM', status: 'waiting' },
    { id: 3, qrCode: 'Q-044', student: 'Farai Mushonga', regNo: 'R123458C', meal: 'Lunch', time: '12:40 PM', status: 'waiting' },
    { id: 4, qrCode: 'Q-045', student: 'Rufaro Chikwava', regNo: 'R123459D', meal: 'Lunch', time: '12:45 PM', status: 'waiting' }
  ];

  // Mock today's bookings
  const todaysBookings = [
    { id: 1, meal: 'Breakfast', totalBookings: 45, served: 45, pending: 0, timeSlot: '07:00 - 09:00' },
    { id: 2, meal: 'Lunch', totalBookings: 120, served: 75, pending: 45, timeSlot: '12:00 - 14:00' },
    { id: 3, meal: 'Dinner', totalBookings: 89, served: 0, pending: 89, timeSlot: '18:00 - 20:00' }
  ];

  // Mock recent scans
  const recentScans = [
    { id: 1, qrCode: 'Q-041', student: 'John Doe', meal: 'Lunch', time: '12:28 PM', status: 'completed' },
    { id: 2, qrCode: 'Q-040', student: 'Jane Smith', meal: 'Lunch', time: '12:25 PM', status: 'completed' },
    { id: 3, qrCode: 'Q-039', student: 'Mike Brown', meal: 'Lunch', time: '12:20 PM', status: 'completed' },
    { id: 4, qrCode: 'Q-038', student: 'Emma Wilson', meal: 'Lunch', time: '12:15 PM', status: 'completed' },
    { id: 5, qrCode: 'Q-037', student: 'David Lee', meal: 'Lunch', time: '12:10 PM', status: 'completed' }
  ];

  const handleScanQR = () => {
    // Simulate QR code scanning
    setTimeout(() => {
      setScanResult({
        qrCode: 'Q-042',
        student: 'Tanaka Moyo',
        regNo: 'R123456A',
        meal: 'Lunch',
        time: '12:30 PM',
        status: 'valid'
      });
    }, 1500);
  };

  const confirmScan = () => {
    // In real app, mark booking as served
    console.log('Confirming scan:', scanResult);
    setShowScanModal(false);
    setScanResult(null);
  };

  const handleLogout = () => {
    window.location.href = '/staff-login';
  };

  const navigation = [
    { name: 'Dashboard', icon: Home, key: 'dashboard' },
    { name: 'Scan QR', icon: Scan, key: 'scan' },
    { name: 'Queue', icon: Users, key: 'queue' },
    { name: 'Analytics', icon: BarChart2, key: 'analytics' },
    { name: 'Settings', icon: Settings, key: 'settings' }
  ];

  const filteredQueue = currentQueue.filter(item => {
    const matchesSearch = item.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.qrCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMeal = selectedMealFilter === 'all' || item.meal.toLowerCase() === selectedMealFilter;
    return matchesSearch && matchesMeal;
  });

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
