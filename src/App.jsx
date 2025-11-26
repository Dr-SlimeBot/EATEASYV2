import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import StudentLogin from './pages/StudentLogin';
import { StaffLogin } from './pages/StaffLogin';
import { AdminLogin } from './pages/AdminLogin';
import StudentDashboard from './pages/student/StudentDashboard';
import StaffDashboard from './pages/staff/StaffDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home/Welcome Page */}
        <Route path="/" element={<Welcome />} />
        
        {/* Login Pages */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* Placeholder routes for dashboards (you'll create these later) */}
        <Route path="/student/dashboard" element={<StudentDashboard/>} />
        <Route path="/staff/dashboard" element={<StaffDashboard/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        
        {/* Placeholder for forgot password */}
        <Route path="/forgot-password" element={<div>Forgot Password - Coming Soon</div>} />
        
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;