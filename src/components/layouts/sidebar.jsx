// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutGrid,
  Users,
  Calendar,
  Banknote,
  Settings,
  Menu,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutGrid, end: true },
    { name: 'Employees', path: '/employees', icon: Users },
    { name: 'Attendance', path: '/attendance', icon: Calendar },
    { name: 'Payroll', path: '/payroll', icon: Banknote },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  // Toggle collapsed state
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Handle Logout & Redirect
  const handleLogout = () => {
    // 1. Clear session / auth storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.clear();

    // 2. Redirect user to login route
    navigate('/login');
  };

  return (
    <aside
      className={`h-screen bg-[#f9f9ff] dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between sticky top-0 transition-all duration-300 ease-in-out z-20 ${isCollapsed ? 'w-20' : 'w-64'
        }`}
    >
      {/* Top Section: Brand & Navigation */}
      <div>
        {/* Brand Header with Hamburger Menu Button */}
        <div className={`p-5 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && (
            <div className="overflow-hidden whitespace-nowrap">
              <h1 className="text-lg font-bold text-indigo-950 dark:text-white tracking-tight leading-none">
                Enterprise HR
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-normal mt-1">
                Management Portal
              </p>
            </div>
          )}

          {/* Toggle Hamburger Button */}
          <button
            onClick={toggleSidebar}
            type="button"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/30 transition-colors focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            <Menu className="w-5 h-5 shrink-0" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `group relative flex items-center py-3.5 text-sm font-medium transition-colors ${isCollapsed ? 'justify-center px-0' : 'px-6'
                  } ${isActive
                    ? 'bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 font-semibold border-l-4 border-indigo-600 dark:border-indigo-500'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 border-l-4 border-transparent'
                  }`
                }
              >
                <Icon className={`w-5 h-5 shrink-0 ${!isCollapsed ? 'mr-3' : ''}`} />

                {/* Expanded Menu Label */}
                {!isCollapsed && (
                  <span className="truncate whitespace-nowrap">{item.name}</span>
                )}

                {/* Hover Tooltip for Collapsed View */}
                {isCollapsed && (
                  <div className="absolute left-full ml-3 px-2.5 py-1 bg-slate-800 dark:bg-gray-700 text-white text-xs font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-30 whitespace-nowrap">
                    {item.name}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Profile & Logout */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-3 space-y-2">
        {/* User Details */}
        <div className={`flex items-center space-x-3 px-2 py-1 ${isCollapsed ? 'justify-center' : ''}`}>
          {/* Avatar Circle */}
          <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400 font-semibold text-xs flex items-center justify-center shrink-0 shadow-xs">
            JD
          </div>

          {!isCollapsed && (
            <div className="flex flex-col min-w-0 overflow-hidden">
              <span className="text-sm font-semibold text-gray-900 dark:text-white truncate leading-snug">
                John Doe
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                HR Director
              </span>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          type="button"
          className={`group relative w-full flex items-center py-2.5 text-sm font-bold text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/30 rounded-xl transition-colors ${isCollapsed ? 'justify-center px-0' : 'px-3'
            }`}
        >
          <LogOut className={`w-5 h-5 shrink-0 ${!isCollapsed ? 'mr-3' : ''}`} />

          {!isCollapsed && <span>Logout</span>}

          {/* Hover Tooltip for Collapsed View */}
          {isCollapsed && (
            <div className="absolute left-full ml-3 px-2.5 py-1 bg-rose-600 text-white text-xs font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-30 whitespace-nowrap">
              Logout
            </div>
          )}
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;