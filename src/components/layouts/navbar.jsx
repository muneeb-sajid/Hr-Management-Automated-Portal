import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell, HelpCircle } from 'lucide-react';
import { ThemeToggle } from '../themetoggle';

const Navbar = () => {
  const location = useLocation();

  // Route title mapping
  const getPageTitle = (pathname) => {
    if (pathname.startsWith('/employees/')) return 'Employee Dashboard';
    if (pathname.startsWith('/dashboard')) return 'Statistics Dashboard';
    if (pathname.startsWith('/attendance')) return 'Attendance Management';
    if (pathname.startsWith('/payroll')) return 'Payroll Management';
    if (pathname.startsWith('/employees')) return 'Employee List';
    if (pathname.startsWith('/settings')) return 'Settings';
    if (pathname.startsWith('/style-doc')) return 'Style Document';
    if (pathname.startsWith('/login')) return 'Login';

    return 'Employee Dashboard';
  };

  const title = getPageTitle(location.pathname);

  return (
    <header className="h-16 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 flex items-center justify-between sticky top-0 z-10">
      
      {/* Search Input */}
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-gray-500">
          <Search className="w-4 h-4 stroke-[2]" />
        </div>
        <input 
          type="text" 
          placeholder="Search employees, reports, or tasks..." 
          className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50/80 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-800 text-slate-700 dark:text-gray-200 placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-150"
        />
      </div>

      {/* Right Action Icons & Dynamic Title */}
      <div className="flex items-center space-x-6">
        
        {/* Notifications Icon */}
        <button 
          aria-label="Notifications"
          className="text-slate-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors"
        >
          <Bell className="w-5 h-5 stroke-[1.75]" />
        </button>

        {/* Help Icon */}
        <button 
          aria-label="Help"
          className="text-slate-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors"
        >
          <HelpCircle className="w-5 h-5 stroke-[1.75]" />
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Vertical Divider */}
        <div className="h-8 w-px bg-slate-200 dark:bg-gray-700"></div>

        {/* Dynamic Page Title */}
        <span className="text-sm font-semibold text-slate-900 dark:text-white min-w-max">
          {title}
        </span>

      </div>

    </header>
  );
};

export default Navbar;