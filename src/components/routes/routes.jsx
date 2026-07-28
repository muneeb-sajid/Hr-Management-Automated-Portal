import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/public/Login';
import Dashboard from '../pages/private/dashboard';
import Payroll from '../pages/private/payroll/payroll';
import Attendance from '../pages/private/attendence/attendence';
import EmployeeProfile from '../pages/private/employes/employes';
import Settings from '../pages/private/settings/settings';
import MainLayout from '../layouts/MainLayout';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from '../themetoggle';
import AttendenceMark from '../pages/private/attendence/attendencemark';
import AddEmployee from '../pages/private/employes/addemployee';
const Routers = () => {
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
       <Route path='/addemployee' element = {<AddEmployee/>}/>
      </Route>
    </Routes>
  );
};

export default Routers;