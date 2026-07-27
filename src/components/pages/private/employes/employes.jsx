import React, { useState } from 'react';
import { Share2, MapPin, Mail } from 'lucide-react';

import PersonalInfo from './personalinfo';
import Documents from './documents';
import Activity from './activity';
import AddEmployee from './addemployee';
import { useNavigate } from 'react-router-dom';

const EmployeeProfile = () => {
  const [activeTab, setActiveTab] = useState('Activity');
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-[#f9f9ff] dark:bg-gray-950 min-h-screen text-slate-800 dark:text-gray-200 font-sans">
      
      {/* 1. Header Banner Profile Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-start sm:items-center space-x-4 sm:space-x-5">
          <div className="relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
              alt="Sarah Jenkins"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-xs border border-slate-200 dark:border-gray-700"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight truncate">
                Sarah Jenkins
              </h1>
              <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-emerald-100/60 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                Active
              </span>
            </div>

            <p className="text-xs font-medium text-slate-500 dark:text-gray-400 mt-1 truncate">
              Senior Product Designer • Product Team
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500 dark:text-gray-400">
              <span className="flex items-center space-x-1 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
                <span>London, UK</span>
              </span>
              <span className="flex items-center space-x-1 min-w-0">
                <Mail className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500 shrink-0" />
                <span className="truncate">s.jenkins@acmecorp.com</span>
              </span>
            </div>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center self-start sm:self-auto space-x-3">
          <button 
            type="button"
            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-4 py-2 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors shadow-xs"
          >
            <Share2 className="w-4 h-4 text-slate-500 dark:text-gray-400" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="border-b border-slate-200 dark:border-gray-800 mb-6 overflow-x-auto scrollbar-none">
        <div className="flex space-x-6 sm:space-x-8 min-w-max">
          {['Personal Info', 'Documents', 'Activity'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
              className={`pb-3 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap ${
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

      {/* 3. Dynamic Tab Content */}
      <div className="w-full">
        {activeTab === 'Personal Info' && <PersonalInfo />}
        {activeTab === 'Documents' && <Documents />}
        {activeTab === 'Activity' && <Activity />}
      </div>

    </div>
  );
};

export default EmployeeProfile;