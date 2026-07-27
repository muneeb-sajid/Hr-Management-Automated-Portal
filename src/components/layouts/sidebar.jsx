import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutGrid,
  Users,
  Calendar,
  Banknote,
  Settings,
  Menu,
  LogOut,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutGrid, end: true },
    { name: 'Employees', path: '/employees', icon: Users },
    { name: 'Attendance', path: '/attendance', icon: Calendar },
    { name: 'Payroll', path: '/payroll', icon: Banknote },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  // Automatically close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Toggle desktop collapsed state
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Toggle mobile drawer state
  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  // Handle Logout & Redirect
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <>
      {/* ========================================== */}
      {/* MOBILE TRIGGER BUTTON (Visible < md screens) */}
      {/* ========================================== */}
      <button
        onClick={toggleMobileSidebar}
        type="button"
        className="md:hidden fixed top-3.5 left-4 z-40 p-2 text-slate-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
        aria-label="Open Navigation Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* ========================================== */}
      {/* MOBILE BACKDROP OVERLAY                    */}
      {/* ========================================== */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* ========================================== */}
      {/* SIDEBAR CONTAINER                          */}
      {/* ========================================== */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen bg-[#f9f9ff] dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between transition-all duration-300 ease-in-out z-50 md:z-20 ${
          /* Mobile Drawer Positioning */
          isMobileOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'
        } ${
          /* Desktop Width Control */
          isCollapsed ? 'md:w-20' : 'md:w-64'
        }`}
      >
        {/* TOP SECTION: BRAND & NAVIGATION */}
        <div>
          {/* Header & Toggle Button */}
          <div className={`p-5 flex items-center ${isCollapsed ? 'md:justify-center justify-between' : 'justify-between'}`}>
            
            {/* Logo / Brand Title (Shown when not collapsed or when in Mobile Drawer) */}
            <div className={`overflow-hidden whitespace-nowrap ${isCollapsed ? 'md:hidden block' : 'block'}`}>
              <h1 className="text-lg font-extrabold text-indigo-950 dark:text-white tracking-tight leading-none">
                Enterprise HR
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                Management Portal
              </p>
            </div>

            {/* Desktop Collapse Button */}
            <button
              onClick={toggleSidebar}
              type="button"
              className="hidden md:flex p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/30 transition-colors focus:outline-none"
              aria-label="Toggle Desktop Sidebar"
            >
              <Menu className="w-5 h-5 shrink-0" />
            </button>

            {/* Mobile Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              type="button"
              className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:text-rose-600 focus:outline-none"
              aria-label="Close Mobile Sidebar"
            >
              <X className="w-5 h-5 shrink-0" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-2 space-y-1 px-2 md:px-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `group relative flex items-center py-3 text-sm font-medium rounded-xl md:rounded-none transition-colors ${
                      isCollapsed
                        ? 'md:justify-center md:px-0 px-4'
                        : 'px-4 md:px-6'
                    } ${
                      isActive
                        ? 'bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 font-semibold md:border-l-4 md:border-indigo-600 dark:md:border-indigo-500'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 md:border-l-4 md:border-transparent'
                    }`
                  }
                >
                  <Icon className={`w-5 h-5 shrink-0 ${!isCollapsed ? 'mr-3' : 'md:mr-0 mr-3'}`} />

                  {/* Text Label */}
                  <span className={`truncate whitespace-nowrap ${isCollapsed ? 'md:hidden block' : 'block'}`}>
                    {item.name}
                  </span>

                  {/* Desktop Hover Tooltip (Shown only when collapsed) */}
                  {isCollapsed && (
                    <div className="hidden md:block absolute left-full ml-3 px-2.5 py-1 bg-slate-800 dark:bg-gray-700 text-white text-xs font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 whitespace-nowrap">
                      {item.name}
                    </div>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM SECTION: USER PROFILE & LOGOUT */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-3 space-y-2">
          
          {/* User Details */}
          <div className={`flex items-center space-x-3 px-2 py-1 ${isCollapsed ? 'md:justify-center' : ''}`}>
            <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400 font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
              JD
            </div>

            <div className={`flex flex-col min-w-0 overflow-hidden ${isCollapsed ? 'md:hidden block' : 'block'}`}>
              <span className="text-sm font-semibold text-gray-900 dark:text-white truncate leading-snug">
                John Doe
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                HR Director
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            type="button"
            className={`group relative w-full flex items-center py-2.5 text-sm font-bold text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-950/30 rounded-xl transition-colors ${
              isCollapsed ? 'md:justify-center md:px-0 px-3' : 'px-3'
            }`}
          >
            <LogOut className={`w-5 h-5 shrink-0 ${!isCollapsed ? 'mr-3' : 'md:mr-0 mr-3'}`} />

            <span className={isCollapsed ? 'md:hidden block' : 'block'}>Logout</span>

            {/* Desktop Hover Tooltip for Collapsed View */}
            {isCollapsed && (
              <div className="hidden md:block absolute left-full ml-3 px-2.5 py-1 bg-rose-600 text-white text-xs font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 whitespace-nowrap">
                Logout
              </div>
            )}
          </button>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;