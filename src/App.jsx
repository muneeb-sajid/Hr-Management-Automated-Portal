import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/public/Login';
import Dashboard from './components/pages/private/dashboard';
import Payroll from './components/pages/private/payroll/payroll';
import Attendance from './components/pages/private/attendence/attendence';
import EmployeeProfile from './components/pages/private/employes/employes';
import Settings from './components/pages/private/settings/settings';
import MainLayout from './components/layouts/MainLayout';
import { useTheme } from './components/context/ThemeContext';
import { ThemeToggle } from './components/themetoggle';
import AttendenceMark from './components/pages/private/attendence/attendencemark';
const App = () => {
  const {theme} = useTheme();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/attendance' element = {<Attendance/>}/>
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/employees" element={<EmployeeProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path='/overrideattence' element = {<AttendenceMark/>}/>
       
      </Route>
    </Routes>
  );
};

export default App;