import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell, HelpCircle, X } from 'lucide-react';
import { ThemeToggle } from '../themetoggle';

const Navbar = () => {
  const location = useLocation();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  // Route title mapping
  const getPageTitle = (pathname) => {
    if (pathname.startsWith('/employees/add')) return 'Add New Employee';
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
    <header className="h-16 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 transition-colors">
      
      {/* LEFT CONTAINER: Cleared for fixed sidebar toggle on mobile (`pl-12 sm:pl-0`) */}
      <div className="flex items-center space-x-2 pl-12 sm:pl-0 min-w-0">
        
        {/* Desktop Search Bar */}
        <div className="hidden sm:block relative w-full max-w-xs md:max-w-md lg:max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-gray-500">
            <Search className="w-4 h-4 stroke-[2]" />
          </div>
          <input 
            type="text" 
            placeholder="Search employees, reports, or tasks..." 
            className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-slate-50/80 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-800 text-slate-700 dark:text-gray-200 placeholder-slate-400 dark:placeholder-gray-500 transition-all duration-150"
          />
        </div>

        {/* Mobile Search Toggle Icon */}
        {!isMobileSearchOpen && (
          <button
            type="button"
            onClick={() => setIsMobileSearchOpen(true)}
            aria-label="Open Search"
            className="sm:hidden p-2 text-slate-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none rounded-lg"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>
        )}
      </div>

      {/* Mobile Overlay Search Bar */}
      {isMobileSearchOpen && (
        <div className="absolute inset-0 bg-white dark:bg-gray-900 px-4 pl-14 pr-4 flex items-center z-40 sm:hidden">
          <div className="relative w-full flex items-center">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input 
              autoFocus
              type="text" 
              placeholder="Search..." 
              className="w-full pl-9 pr-10 py-1.5 text-xs bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-full text-slate-800 dark:text-gray-100 focus:outline-none"
            />
            <button 
              type="button"
              onClick={() => setIsMobileSearchOpen(false)}
              aria-label="Close Search"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* RIGHT CONTAINER: Action Icons & Desktop-Only Page Title */}
      <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 ml-auto shrink-0">
        
        {/* Notifications Icon */}
        <button 
          aria-label="Notifications"
          className="p-1.5 text-slate-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors"
        >
          <Bell className="w-5 h-5 stroke-[1.75]" />
        </button>

        {/* Help Icon */}
        <button 
          aria-label="Help"
          className="p-1.5 text-slate-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors"
        >
          <HelpCircle className="w-5 h-5 stroke-[1.75]" />
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Vertical Divider (Hidden on small screens) */}
        <div className="hidden md:block h-6 w-px bg-slate-200 dark:bg-gray-700" />

        {/* Dynamic Page Title (Strictly hidden on small & medium screens, visible on `md:` and up) */}
        <span className="hidden md:inline-block text-xs lg:text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap">
          {title}
        </span>

      </div>

    </header>
  );
};

export default Navbar;