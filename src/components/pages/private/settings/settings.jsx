// src/components/settings/Settings.jsx
import React, { useState } from 'react';
import { Sliders, Bell, Shield, UserCheck } from 'lucide-react';


import GeneralSettings from './GeneralSetting';
import Security from './Security';
import Notifications from './notifications';
import UserRoles from './UserRoles';

const Settings = () => {
  // Navigation Tab State
  const [activeTab, setActiveTab] = useState('General Settings');

  // Navigation tab definitions
  const tabs = [
    { id: 'General Settings', name: 'General Settings', icon: Sliders },
    { id: 'Notifications', name: 'Notifications', icon: Bell },
    { id: 'Security', name: 'Security', icon: Shield },
    { id: 'User Roles', name: 'User Roles', icon: UserCheck },
  ];

  // Helper function to render active page view
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'General Settings':
        return <GeneralSettings />;
      case 'Notifications':
        return <Notifications />;
      case 'Security':
        return <Security />;
      case 'User Roles':
        return <UserRoles />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] dark:bg-gray-950 p-6 lg:p-8 font-sans text-slate-800 dark:text-gray-200 space-y-6">
      
      {/* 1. Header Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">System Settings</h1>
        <p className="text-xs font-medium text-slate-500 dark:text-gray-400 mt-1">
          Manage your company profile and administrative preferences
        </p>
      </div>

      {/* 2. Top Navigation Tabs */}
      <div className="border-b border-slate-200/80 dark:border-gray-800">
        <nav className="flex space-x-8 text-xs font-bold">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 pb-3 border-b-2 transition-colors cursor-pointer ${
                  isActive
                    ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* 3. Dynamic Tab Content Component */}
      <div className="pt-2">
        {renderActiveTabContent()}
      </div>

    </div>
  );
};

export default Settings;