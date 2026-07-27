import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/public/Login';
import Dashboard from './components/pages/private/dashboard';
import Attendence from './components/pages/private/attendence';
import Payroll from './components/pages/private/payroll/payroll';
import EmployeeProfile from './components/pages/private/employes/employes';
import Settings from './components/pages/private/settings/settings';
import MainLayout from './components/layouts/MainLayout';
import { useTheme } from './components/context/ThemeContext';
import { ThemeToggle } from './components/themetoggle';
const App = () => {
  const {theme} = useTheme();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendence />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/employees" element={<EmployeeProfile />} />
        <Route path="/settings" element={<Settings />} />
       
      </Route>
    </Routes>
  );
};

export default App;