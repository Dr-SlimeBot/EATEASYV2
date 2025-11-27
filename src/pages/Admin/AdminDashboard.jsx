import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Settings, 
  TrendingUp, 
  Bell, 
  LogOut, 
  Menu, 
  X, 
  CheckCircle, 
  Home, 
  BarChart2,
  Shield,
  Clock,
  UserPlus,
  Edit,
  Trash2,
  Search,
  Plus,
  Download,
  FileText,
  AlertCircle,
  UserCheck,
  Utensils,
  Activity
} from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showAddSlotModal, setShowAddSlotModal] = useState(false);
  const [userType, setUserType] = useState('student');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock admin data
  const admin = {
    name: 'Admin User',
    adminId: 'ADMIN001',
    email: 'admin@uz.ac.zw',
    role: 'System Administrator'
  };

  // Mock system stats
  const systemStats = {
    totalStudents: 1245,
    totalStaff: 12,
    activeBookings: 234,
    todayMeals: 567,
    systemUptime: '99.9%',
    avgResponseTime: '120ms'
  };

  // Mock students list
  const students = [
    { id: 1, name: 'Tanaka Moyo', regNo: 'R123456A', email: 'tmoyo@uz.ac.zw', mealPlan: 'Full Board', status: 'active', bookings: 45 },
    { id: 2, name: 'Chipo Ndlovu', regNo: 'R123457B', email: 'cndlovu@uz.ac.zw', mealPlan: 'Full Board', status: 'active', bookings: 38 },
    { id: 3, name: 'Farai Mushonga', regNo: 'R123458C', email: 'fmushonga@uz.ac.zw', mealPlan: 'Lunch Only', status: 'active', bookings: 22 },
    { id: 4, name: 'Rufaro Chikwava', regNo: 'R123459D', email: 'rchikwava@uz.ac.zw', mealPlan: 'Full Board', status: 'suspended', bookings: 15 }
  ];

  // Mock staff list
  const staffList = [
    { id: 1, name: 'Sarah Johnson', staffId: 'STAFF001', email: 'sjohnson@uz.ac.zw', role: 'Dining Hall Staff', shift: 'Morning', status: 'active' },
    { id: 2, name: 'Michael Brown', staffId: 'STAFF002', email: 'mbrown@uz.ac.zw', role: 'Dining Hall Staff', shift: 'Afternoon', status: 'active' },
    { id: 3, name: 'Emma Wilson', staffId: 'STAFF003', email: 'ewilson@uz.ac.zw', role: 'Kitchen Staff', shift: 'Morning', status: 'active' }
  ];

  // Mock time slots
  const timeSlots = [
    { id: 1, meal: 'Breakfast', timeRange: '07:00 - 09:00', capacity: 100, currentBookings: 45, status: 'active' },
    { id: 2, meal: 'Lunch', timeRange: '12:00 - 14:00', capacity: 150, currentBookings: 120, status: 'active' },
    { id: 3, meal: 'Dinner', timeRange: '18:00 - 20:00', capacity: 150, currentBookings: 89, status: 'active' }
  ];

  // Mock analytics data
  const weeklyData = [
    { day: 'Mon', breakfast: 85, lunch: 120, dinner: 95 },
    { day: 'Tue', breakfast: 90, lunch: 125, dinner: 100 },
    { day: 'Wed', breakfast: 88, lunch: 130, dinner: 98 },
    { day: 'Thu', breakfast: 92, lunch: 128, dinner: 102 },
    { day: 'Fri', breakfast: 95, lunch: 135, dinner: 105 },
    { day: 'Sat', breakfast: 75, lunch: 100, dinner: 85 },
    { day: 'Sun', breakfast: 70, lunch: 95, dinner: 80 }
  ];

  // Mock recent activities
  const recentActivities = [
    { id: 1, action: 'New student registered', user: 'Tanaka Moyo', time: '5 mins ago', type: 'user' },
    { id: 2, action: 'Time slot updated', detail: 'Lunch capacity increased', time: '15 mins ago', type: 'system' },
    { id: 3, action: 'Staff member added', user: 'Sarah Johnson', time: '1 hour ago', type: 'user' },
    { id: 4, action: 'Booking cancelled', user: 'Chipo Ndlovu', time: '2 hours ago', type: 'booking' },
    { id: 5, action: 'System maintenance completed', detail: 'Database optimization', time: '3 hours ago', type: 'system' }
  ];

  const handleLogout = () => {
    window.location.href = '/admin-login';
  };

  const handleAddUser = () => {
    console.log('Adding user:', userType);
    setShowAddUserModal(false);
    // Add API call here
  };

  const handleAddSlot = () => {
    console.log('Adding time slot');
    setShowAddSlotModal(false);
    // Add API call here
  };

  const navigation = [
    { name: 'Dashboard', icon: Home, key: 'dashboard' },
    { name: 'Users', icon: Users, key: 'users' },
    { name: 'Time Slots', icon: Clock, key: 'slots' },
    { name: 'Analytics', icon: BarChart2, key: 'analytics' },
    { name: 'Reports', icon: FileText, key: 'reports' },
    { name: 'Settings', icon: Settings, key: 'settings' }
  ];

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.regNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStaff = staffList.filter(staff => 
    staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.staffId.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        style={{backgroundColor: '#dc2626'}}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6" style={{borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-6 h-6" style={{color: 'white'}} />
                <h1 className="text-2xl font-bold" style={{color: 'white'}}>
                  <span>Eat</span><span style={{color: '#fca5a5'}}>Easy</span>
                </h1>
              </div>
              <p className="text-xs" style={{color: '#fca5a5'}}>Admin Portal</p>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden" style={{color: 'white'}}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key);
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
                style={{
                  backgroundColor: activeTab === item.key ? '#991b1b' : 'transparent',
                  color: 'white'
                }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4" style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: '#991b1b'}}>
                <Shield className="w-6 h-6" style={{color: 'white'}} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate" style={{color: 'white'}}>{admin.name}</p>
                <p className="text-xs truncate" style={{color: '#fca5a5'}}>{admin.adminId}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
              style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', color: '#fca5a5'}}
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-30" style={{backgroundColor: 'white', borderBottom: '1px solid #e5e7eb'}}>
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg"
                style={{color: '#dc2626', backgroundColor: '#fee2e2'}}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold" style={{color: '#dc2626'}}>
                  {navigation.find(n => n.key === activeTab)?.name}
                </h2>
                <p className="text-sm" style={{color: '#6b7280'}}>Welcome back, {admin.name.split(' ')[0]}!</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#dcfce7', color: '#166534'}}>
                <Activity className="w-3 h-3" />
                System Online
              </div>
              <button className="relative" style={{color: '#dc2626'}}>
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center" style={{backgroundColor: '#dc2626', color: 'white'}}>5</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 sm:p-6 lg:p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 rounded-xl" style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium" style={{color: '#6b7280'}}>Total Students</p>
                      <p className="text-3xl font-bold mt-2" style={{color: '#dc2626'}}>{systemStats.totalStudents}</p>
                    </div>
                    <Users className="w-12 h-12" style={{color: '#fee2e2'}} />
                  </div>
                </div>
                         </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4 sm:p-6 lg:p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 rounded-xl" style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium" style={{color: '#6b7280'}}>Total Students</p>
                      <p className="text-3xl font-bold mt-2" style={{color: '#dc2626'}}>{systemStats.totalStudents}</p>
                    </div>
                    <Users className="w-12 h-12" style={{color: '#fee2e2'}} />
                  </div>
                </div>

                <div className="p-6 rounded-xl" style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium" style={{color: '#6b7280'}}>Staff Members</p>
                      <p className="text-3xl font-bold mt-2" style={{color: '#dc2626'}}>{systemStats.totalStaff}</p>
                    </div>
                    <UserCheck className="w-12 h-12" style={{color: '#fee2e2'}} />
                  </div>
                </div>

                <div className="p-6 rounded-xl" style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium" style={{color: '#6b7280'}}>Active Bookings</p>
                      <p className="text-3xl font-bold mt-2" style={{color: '#dc2626'}}>{systemStats.activeBookings}</p>
                    </div>
                    <Calendar className="w-12 h-12" style={{color: '#fee2e2'}} />
                  </div>
                </div>

                <div className="p-6 rounded-xl" style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium" style={{color: '#6b7280'}}>Today's Meals</p>
                      <p className="text-3xl font-bold mt-2" style={{color: '#dc2626'}}>{systemStats.todayMeals}</p>
                    </div>
                    <Utensils className="w-12 h-12" style={{color: '#fee2e2'}} />
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-6 rounded-xl" style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
                <h3 className="text-lg font-semibold mb-4" style={{color: '#dc2626'}}>Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <button
                    onClick={() => setShowAddUserModal(true)}
                    className="p-4 rounded-lg border-2 border-dashed transition-all hover:scale-105"
                    style={{borderColor: '#dc2626'}}
                  >
                    <UserPlus className="w-8 h-8 mx-auto mb-2" style={{color: '#dc2626'}} />
                    <p className="font-semibold" style={{color: '#dc2626'}}>Add User</p>
                  </button>
                  <button
                    onClick={() => setShowAddSlotModal(true)}
                    className="p-4 rounded-lg border-2 border-dashed transition-all hover:scale-105"
                    style={{borderColor: '#dc2626'}}
                  >
                    <Clock className="w-8 h-8 mx-auto mb-2" style={{color: '#dc2626'}} />
                    <p className="font-semibold" style={{color: '#dc2626'}}>Add Time Slot</p>
                  </button>
                  <button
                    onClick={() => setActiveTab('reports')}
                    className="p-4 rounded-lg border-2 border-dashed transition-all hover:scale-105"
                    style={{borderColor: '#dc2626'}}
                  >
                    <FileText className="w-8 h-8 mx-auto mb-2" style={{color: '#dc2626'}} />
                    <p className="font-semibold" style={{color: '#dc2626'}}>Generate Report</p>
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className="p-4 rounded-lg border-2 border-dashed transition-all hover:scale-105"
                    style={{borderColor: '#dc2626'}}
                  >
                    <BarChart2 className="w-8 h-8 mx-auto mb-2" style={{color: '#dc2626'}} />
                    <p className="font-semibold" style={{color: '#dc2626'}}>View Analytics</p>
                  </button>
                </div>
              </div>

              {/* System Overview */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Time Slots Overview */}
                <div className="p-6 rounded-xl" style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold" style={{color: '#dc2626'}}>Time Slots Overview</h3>
                    <button onClick={() => setActiveTab('slots')} className="text-sm font-medium" style={{color: '#dc2626'}}>View All</button>
                  </div>
                  <div className="space-y-3">
                    {timeSlots.map((slot) => (
                      <div key={slot.id} className="p-4 rounded-lg" style={{backgroundColor: '#f9fafb', border: '1px solid #e5e7eb'}}>
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold" style={{color: '#dc2626'}}>{slot.meal}</h4>
                            <p className="text-sm" style={{color: '#6b7280'}}>{slot.timeRange}</p>
                          </div>
                          <span className="text-2xl font-bold" style={{color: '#dc2626'}}>
                            {slot.currentBookings}/{slot.capacity}
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full overflow-hidden" style={{backgroundColor: '#e5e7eb'}}>
                          <div 
                            className="h-full transition-all"
                            style={{
                              width: `${(slot.currentBookings / slot.capacity) * 100}%`,
                              backgroundColor: slot.currentBookings / slot.capacity > 0.8 ? '#dc2626' : '#059669'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="p-6 rounded-xl" style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
                  <h3 className="text-lg font-semibold mb-4" style={{color: '#dc2626'}}>Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg" style={{backgroundColor: '#f9fafb'}}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#fee2e2'}}>
                          {activity.type === 'user' && <Users className="w-4 h-4" style={{color: '#dc2626'}} />}
                          {activity.type === 'system' && <Settings className="w-4 h-4" style={{color: '#dc2626'}} />}
                          {activity.type === 'booking' && <Calendar className="w-4 h-4" style={{color: '#dc2626'}} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium" style={{color: '#374151'}}>{activity.action}</p>
                          {activity.user && <p className="text-xs" style={{color: '#6b7280'}}>{activity.user}</p>}
                          {activity.detail && <p className="text-xs" style={{color: '#6b7280'}}>{activity.detail}</p>}
                          <p className="text-xs mt-1" style={{color: '#9ca3af'}}>{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* System Health */}
              <div className="p-6 rounded-xl" style={{backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'}}>
                <h3 className="text-lg font-semibold mb-4" style={{color: '#dc2626'}}>System Health</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm" style={{color: '#6b7280'}}>System Uptime</span>
                      <span className="font-semibold" style={{color: '#059669'}}>{systemStats.systemUptime}</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{backgroundColor: '#e5e7eb'}}>
                      <div className="h-full" style={{width: '99.9%', backgroundColor: '#059669'}} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm" style={{color: '#6b7280'}}>Avg Response Time</span>
                      <span className="font-semibold" style={{color: '#059669'}}>{systemStats.avgResponseTime}</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{backgroundColor: '#e5e7eb'}}>
                      <div className="h-full" style={{width: '95%', backgroundColor: '#059669'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

                