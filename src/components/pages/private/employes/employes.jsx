import React, { useState } from 'react';
import { Share2, MapPin, Mail } from 'lucide-react';

import PersonalInfo from './personalinfo';
import Documents from './documents';
import Activity from './activity';

const EmployeeProfile = () => {
  const [activeTab, setActiveTab] = useState('Activity');

  return (
    <div className="p-8 bg-[#f9f9ff] dark:bg-gray-950 min-h-screen text-slate-800 dark:text-gray-200 font-sans">
      
      {/* 1. Header Banner Profile Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-5">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
              alt="Sarah Jenkins"
              className="w-16 h-16 rounded-full object-cover shadow-sm border border-slate-200 dark:border-gray-700"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
          </div>
          <div>
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Sarah Jenkins</h1>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100/60 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                Active
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-gray-400 mt-1">
              Senior Product Designer • Product Team
            </p>
            <div className="flex items-center space-x-4 mt-1.5 text-xs text-slate-500 dark:text-gray-400">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
                <span>London, UK</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
                <span>s.jenkins@acmecorp.com</span>
              </span>
            </div>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
            <Share2 className="w-4 h-4 text-slate-500 dark:text-gray-400" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="border-b border-slate-200 dark:border-gray-800 mb-8">
        <div className="flex space-x-8">
          {['Personal Info', 'Documents', 'Activity'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-gray-200'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Dynamic Tab Rendering - Removed extra padding from child components */}
      <div className=" -mx-6 -my-6">
        {activeTab === 'Personal Info' && <PersonalInfo />}
        {activeTab === 'Documents' && <Documents />}
        {activeTab === 'Activity' && <Activity />}
      </div>

    </div>
  );
};

export default EmployeeProfile;